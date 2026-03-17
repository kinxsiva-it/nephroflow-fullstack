import React from 'react';
import { Outlet } from 'react-router-dom'; 
import Sidebar from './Sidebar';

export default function MainLayout() {
  return (
    <div className="flex min-h-screen bg-slate-50 font-['Prompt']">
      <Sidebar />

      <div className="flex-1 flex flex-col h-screen overflow-y-auto">
        

        <Outlet /> 

      </div>
    </div>
  );
}