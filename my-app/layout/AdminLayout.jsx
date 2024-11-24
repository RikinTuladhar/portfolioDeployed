"use client"; // Use client to enable dynamic sidebar

import AdminSidebar from "@/components/AdminSidebar";
const AdminLayout = ({ children }) => {
  return (
    <div className="flex  bg-red-400  min-h-screen ">
      <main className="p-6 ">{children}</main>
    </div>
  );
};

export default AdminLayout;
