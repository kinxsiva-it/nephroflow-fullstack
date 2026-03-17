import React from 'react';
import { DashboardProvider, useDashboard } from '../context/DashboradContext'; 


const DashboardContent = () => {
  const { stats } = useDashboard(); 

  return (
    <main className="flex-1 flex flex-col min-h-screen bg-slate-50/50 font-['Prompt']">
      

      <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
        <h1 className="text-xl font-bold text-slate-800">Overview</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-slate-500">
            สถานะ: <span className="text-green-500 font-bold px-2 py-1 bg-green-50 rounded-full ml-1">Online</span>
          </span>
          <div className="w-9 h-9 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-full flex items-center justify-center text-white font-bold shadow-md cursor-pointer hover:scale-105 transition-transform">
            P
          </div>
        </div>
      </header>

      <div className="p-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div key={stat.id} className="bg-white p-6 rounded-[24px] border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow flex items-center gap-5">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl ${stat.bg} ${stat.color}`}>
                {stat.icon}
              </div>
              <div>
                <div className="text-slate-500 text-sm font-medium mb-1">{stat.label}</div>
                <div className="text-3xl font-black text-slate-800 tracking-tight">{stat.value}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-[24px] border border-slate-200/60 p-7 shadow-sm">
          <h3 className="text-xl font-bold text-slate-800 mb-6">ตารางการฟอกไตวันนี้</h3>
          <div className="h-64 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center text-slate-400 bg-slate-50/50">
            <span className="text-4xl mb-3">🛏️</span>
            <p className="font-medium">ยังไม่มีข้อมูลคนไข้ในระบบ</p>
          </div>
        </div>

      </div>
    </main>
  );
};

export default function DashboardPage() {
  return (
    <DashboardProvider>
      <DashboardContent />
    </DashboardProvider>
  );
}