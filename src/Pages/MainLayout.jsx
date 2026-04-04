import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Right side */}
      <div className="md:ml-60 w-full">

        {/* Navbar */}
        <Navbar />

        {/* Content */}
        <div className="pt-16 h-screen overflow-y-auto p-4">
          <Outlet />
        </div>

      </div>
    </div>
  );
}