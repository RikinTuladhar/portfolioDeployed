import AdminLayout from "@/layout/AdminLayout";
import Link from "next/link";

import React from "react";
import { logout } from "../login/action";
const navItems = [
  { label: "Dashboard", href: "/admin" },
  { label: "Add Project", href: "/admin/addProject" },
  { label: "Users", href: "/users" },
  { label: "Settings", href: "/settings" },
  { label: "Logout", href: "/login" },
];
const layout = ({ children }) => {
  return (
    <div className="flex">
      {sidebar()}
      <AdminLayout>{children}</AdminLayout>
    </div>
  );
};

export default layout;
function sidebar() {
  return (
    <div className="w-[20%]">
      {/* Mobile toggle button */}
      <button className="fixed z-50 p-2 bg-gray-900 rounded-md lg:hidden top-4 left-4">
        Menu
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out lg:translate-x-0
            -translate-x-full
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center h-16 bg-gray-800">
            <h2 className="text-2xl font-bold">Admin Dashboard</h2>
          </div>
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center px-4 py-2 rounded-md hover:bg-gray-800 transition-colors "bg-gray-800"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="p-4 bg-gray-800">
            <div className="grid w-full place-items-center">
              <button
                className="px-4 py-2 my-2 border hover:bg-slate-400 hover:text-black rounded-xl"
                onClick={logout}
              >
                Logout{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
