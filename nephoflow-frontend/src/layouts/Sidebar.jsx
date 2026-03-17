import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useAuth } from '../features/auth/context/AuthContext';

export default function Sidebar() {
  const { logout } = useAuth();
  const location = useLocation(); 

  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: '📊' },
    { name: 'รายชื่อคนไข้', path: '/patients', icon: '👥' },
    { name: 'ตารางฟอกไต', path: '/schedule', icon: '📅' },
    { name: 'รายงานผลแล็บ', path: '/labs', icon: '🔬' },
    { name: 'ตั้งค่าระบบ', path: '/settings', icon: '⚙️' },
  ];

  return (
    <aside 
      className={`bg-white border-r border-slate-200 hidden md:flex flex-col h-screen sticky top-0 font-['Prompt'] shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-20 transition-all duration-300 ease-in-out ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      
      <button 
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-8 w-6 h-6 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-300 shadow-sm transition-all z-30"
      >
        <span className={`text-xs transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`}>
          ◀
        </span>
      </button>

      <div className={`h-20 flex items-center border-b border-slate-100 overflow-hidden transition-all ${isCollapsed ? 'justify-center px-0' : 'px-6'}`}>
        <h2 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 tracking-tight whitespace-nowrap">
          {isCollapsed ? 'NF' : 'NephroFlow'}
        </h2>
      </div>

      <nav className={`flex-1 py-6 space-y-1.5 overflow-y-auto overflow-x-hidden ${isCollapsed ? 'px-3' : 'px-4'}`}>
        
        {!isCollapsed && (
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-2 transition-opacity duration-300">
            Main Menu
          </div>
        )}
        
        {menuItems.map((item) => {
          const isActive = location.pathname.includes(item.path);
          
          return (
            <Link 
              key={item.path}
              to={item.path}
              title={isCollapsed ? item.name : ""}
              className={`flex items-center rounded-xl font-medium transition-all duration-200 ${
                isCollapsed ? 'justify-center p-3' : 'gap-3 px-3 py-2.5'
              } ${
                isActive 
                  ? 'bg-blue-50 text-blue-600 shadow-sm' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
              }`}
            >
              <span className={`text-xl transition-all duration-200 ${isActive ? 'opacity-100 scale-110' : 'opacity-70 grayscale'}`}>
                {item.icon}
              </span>
              
              {!isCollapsed && (
                <span className="whitespace-nowrap transition-opacity duration-300">
                  {item.name}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      <div className={`p-4 border-t border-slate-100 bg-slate-50/50 mt-auto overflow-hidden transition-all ${isCollapsed ? 'px-2' : ''}`}>
        
        {!isCollapsed ? (
          <div className="flex items-center gap-3 px-2 py-3 mb-2 bg-white rounded-xl border border-slate-100 shadow-sm whitespace-nowrap">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-bold shadow-md shrink-0">
              P
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-slate-800 line-clamp-1">Phakin B.</span>
              <span className="text-[11px] font-medium text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full w-fit mt-0.5">Administrator</span>
            </div>
          </div>
        ) : (
          <div className="w-10 h-10 mx-auto rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-bold shadow-md mb-4 shrink-0">
            P
          </div>
        )}

        <button 
          onClick={logout} 
          title="ออกจากระบบ"
          className={`w-full text-slate-500 hover:bg-red-50 hover:text-red-600 rounded-xl transition-all flex items-center justify-center border border-transparent hover:border-red-100 ${
            isCollapsed ? 'py-3' : 'px-4 py-2.5 gap-2 font-semibold'
          }`}
        >
          <span className="text-xl">🚪</span>
          {!isCollapsed && <span className="whitespace-nowrap">ออกจากระบบ</span>}
        </button>
      </div>
      
    </aside>
  );
}