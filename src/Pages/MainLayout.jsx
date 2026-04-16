import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export default function MainLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex overflow-x-hidden">
      {/* Sidebar */}
      <Sidebar open={open} setOpen={setOpen} />

      {/* Right side */}
      <div className="md:ml-60 flex-1 min-w-0">
        {/* Navbar */}
        <Navbar setOpen={setOpen} />

        {/* Content */}
        <div className="pt-16 min-h-screen overflow-y-auto overflow-x-hidden p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}