const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("../config/db"); 

const login = async (req, res) => {
  const { username, password } = req.body;
  console.log("มีคนพยายาม Login:", username);

  try {
    const result = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
    
    if (result.rows.length === 0) {
      console.log("ไม่พบ username:", username);
      return res.status(401).json({ success: false, message: "ไม่พบผู้ใช้งาน" });
    }

    const user = result.rows[0];

    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log("ผลการเช็กรหัสผ่านด้วย Bcrypt:", isPasswordValid);

    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: "รหัสผ่านไม่ถูกต้อง" });
    }

    const token = jwt.sign(
      { userId: user.id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "8h" }
    );

    res.json({ success: true, token });

  } catch (err) {
    console.error("💥 Backend Error ->", err.message);
    res.status(500).json({ success: false, message: "เกิดข้อผิดพลาดที่ระบบฐานข้อมูล" });
  }
};

module.exports = {
  login
};