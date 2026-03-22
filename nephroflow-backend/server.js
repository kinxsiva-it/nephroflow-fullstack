const express = require("express");
const cors = require("cors");
require("dotenv").config(); 
const loadEnvFromAWS = require("./loadSecrets");

loadEnvFromAWS().then(() => {
  const authRoutes = require("./routes/auth");

  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use("/api/auth", authRoutes);

  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Backend server is running on port ${PORT}`);
  });
}).catch(error => {
  console.error("Failed to start server due to AWS Secrets error:", error);
});