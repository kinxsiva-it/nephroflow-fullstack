import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function LoginForm() {
  const [username, setUsername] = useState(() => localStorage.getItem("rememberedusername") || "");
  const [password, setPassword] = useState("");
  const [isRememberMe, setIsRememberMe] = useState(() => !!localStorage.getItem("rememberedusername"));
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();

      if (data.success) {
        login(data.token);
        if (isRememberMe) {
          localStorage.setItem("rememberedusername", username);
        } else {
          localStorage.removeItem("rememberedusername");
        }
        navigate("/dashboard");
      } else {
        setErrorMessage(data.message);
      }
    } catch {
      setErrorMessage("ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้");
    }
  };

  return (
    <form onSubmit={handleSignIn} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label className="font-semibold text-slate-700">Username</label>
        <input
          type="tel"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter Your username"
          maxLength={13}
          autoComplete="on"
          className="h-11 rounded-xl bg-slate-100/90 border-none px-4 text-base shadow-[inset_0_0_0_1px_rgba(148,163,184,0.35)] outline-none focus:bg-slate-50 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.18),inset_0_0_0_1px_rgba(37,99,235,0.55)] transition-all duration-200"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-semibold text-slate-700">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="At least 8 characters"
          autoComplete="on"
          className="h-11 rounded-xl bg-slate-100/90 border-none px-4 text-base shadow-[inset_0_0_0_1px_rgba(148,163,184,0.35)] outline-none focus:bg-slate-50 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.18),inset_0_0_0_1px_rgba(37,99,235,0.55)] transition-all duration-200"
        />
      </div>

      {errorMessage && (
        <div className="text-red-500 text-xs mt-[-4px]">{errorMessage}</div>
      )}

      <div className="flex items-center gap-2 mt-1 mb-1">
        <input
          type="checkbox"
          id="remember"
          checked={isRememberMe}
          onChange={(e) => setIsRememberMe(e.target.checked)}
          className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
        />
        <label htmlFor="remember" className="text-sm font-medium text-slate-700 cursor-pointer">
          Remember Me
        </label>
      </div>

      <button 
        type="submit" 
        className="h-11 mt-2 rounded-xl bg-blue-600 text-white font-bold text-base shadow-[0_14px_30px_rgba(37,99,235,0.24)] hover:brightness-105 hover:-translate-y-[1px] active:translate-y-0 transition-all duration-150"
      >
        Log in
      </button>
    </form>
  );
}