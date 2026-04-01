import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";

export default function MainLayout({ children }) {
  return (
    <div>
      {/* Sidebar */}
      <Sidebar />

      {/* Right side (shift everything) */}
      <div className="md:ml-60">
        
        {/* Navbar */}
        <Navbar />

        {/* Content */}
        <div className="p-4">
          {children}
        </div>

      </div>
    </div>
  );
}