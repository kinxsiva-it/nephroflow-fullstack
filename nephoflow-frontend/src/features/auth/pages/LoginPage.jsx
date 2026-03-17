import React from "react";
import LoginForm from "../components/LoginFrom"; 

export default function LoginPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden font-['Prompt'] px-6 py-12"
      style={{
        background:
          "radial-gradient(1200px 600px at 10% 10%, #dbeafe 0%, transparent 55%), radial-gradient(900px 500px at 90% 90%, #e0e7ff 0%, transparent 55%), linear-gradient(180deg, #f8fafc 0%, #ffffff 60%, #f8fafc 100%)",
      }}
    >

      <div className="absolute top-[-140px] left-[-160px] w-[380px] h-[380px] rounded-full bg-blue-300 blur-[48px] opacity-55 z-0 pointer-events-none"></div>
      <div className="absolute bottom-[-160px] right-[-180px] w-[380px] h-[380px] rounded-full bg-indigo-300 blur-[48px] opacity-55 z-0 pointer-events-none"></div>


      <div className="flex flex-col items-center gap-2 mb-6 z-10">
        <img
          src="https://nephroflow-assets-pakin.s3.ap-southeast-1.amazonaws.com/nephroFlow.png"
          alt="NephroFlow Logo"
          className="w-30 h-auto md:w-40 drop-shadow-md"
        />
        <div className="text-5xl font-extrabold text-slate-900 tracking-tight">
          NephroFlow
        </div>
      </div>


      <div className="w-full max-w-[380px] bg-white/75 border border-slate-400/25 rounded-[22px] p-7 backdrop-blur-md shadow-[0_18px_60px_rgba(15,23,42,0.10),0_2px_10px_rgba(15,23,42,0.06)] z-10 relative">

        <LoginForm />
      </div>
    </div>
  );
}
