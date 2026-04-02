import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      {/* Sidebar */}
      <Sidebar />

      {/* Right side */}
      <div className="md:ml-60">
        
        {/* Navbar */}
        <Navbar />

        {/* Content */}
        <div className="p-4">
          <Outlet />
        </div>

      </div>
    </div>
  );
}