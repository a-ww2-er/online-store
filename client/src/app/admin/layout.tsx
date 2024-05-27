"use client";
import React from 'react';
import Sidebar from '@/components/Admin/SideBar';

type AdminProps = {
  children: React.ReactNode;
};

const AdminRootLayout = ({ children }: AdminProps) => {
  return (
    <div className="flex h-screen">
      <Sidebar className="h-full overflow-y-auto no-scrollbar" />
      <div className="flex-1 p-6 overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default AdminRootLayout;