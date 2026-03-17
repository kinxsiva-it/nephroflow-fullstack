/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from 'react';

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [stats, setStats] = useState([
    { id: 1, label: "คนไข้ทั้งหมด", value: "42", icon: "👥", color: "text-blue-600", bg: "bg-blue-100" },
    { id: 2, label: "กำลังฟอกไตตอนนี้", value: "8", icon: "🏥", color: "text-green-600", bg: "bg-green-100" },
    { id: 3, label: "คิวถัดไป", value: "10:30", icon: "⏰", color: "text-amber-600", bg: "bg-amber-100" },
  ]);

  return (
    <DashboardContext.Provider value={{ stats, setStats }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => useContext(DashboardContext);