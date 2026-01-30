import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen overflow-hidden bg-gray-50">
      {/* FIXED NAVBAR */}
      <Navbar onMenuClick={() => setSidebarOpen(true)} />

      {/* BODY */}
      <div className="flex pt-14 h-full">
        {/* SIDEBAR */}
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* MAIN CONTENT */}
        <main
          className="
            flex-1
            md:ml-72
            h-[calc(100vh-3.5rem)]
            overflow-y-auto
            bg-gray-50
          "
        >
          {/* PAGE CONTAINER */}
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
