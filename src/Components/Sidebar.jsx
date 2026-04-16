import { useState } from "react";
import { X,LogOut } from "lucide-react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { sidebarMenu } from "../Constant/SidebarMenu";
import { useNavigate } from "react-router-dom"; // ✅ add
import logo1 from "../assets/logo1.png"

export default function Sidebar({open,setOpen}) {

  const navigate = useNavigate();

const handleLogout = () => {
  localStorage.clear(); // सब साफ
  window.location.replace("/login");
};

  return (
    <>
        {/* ✅ Overlay (mobile only) */}
  {open && (
    <div
      className="fixed inset-0 bg-black/40 z-40 md:hidden"
      onClick={() => setOpen(false)}
    />
  )}
      {/* Sidebar */}
      <aside
        className={clsx(
          "fixed top-0 left-0 z-50 h-screen w-60",
          "bg-(--color-bg)",
          "flex flex-col",
          "transition-transform duration-300",
          open ? "translate-x-0" : "-translate-x-full",
          "md:translate-x-0"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 h-13 border-b border-(--color-border) bg-[linear-gradient(to_right,var(--color-primary-1),var(--color-primary-2))]">
  
        <div className="flex items-center text-white font-semibold text-2xl">
           <img src={logo1}></img>
        </div>
          <button
            className="md:hidden text-(--color-text)"
            onClick={() => setOpen(false)}
          >
            <X size={18} />
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 overflow-y-auto px-2 py-4">
          <ul className="space-y-1">
            {sidebarMenu.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    end={item.path === "/dashboard"}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      clsx(
                        "w-full flex items-center gap-3 px-3 py-2 rounded text-sm transition",
                        isActive
                          ? "bg-[linear-gradient(to_right,var(--color-primary-1),var(--color-primary-2))] text-black"
                          : "text-(--color-text) hover:bg-[linear-gradient(to_right,var(--color-primary-1),var(--color-primary-2))]"
                      )
                    }
                  >
                    <Icon size={18} />
                    {item.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-2 m-2 rounded border-t border-(--color-border) bg-[linear-gradient(to_right,var(--color-primary-1),var(--color-primary-2))] flex items-center justify-center"> 
          <button 
            className="flex items-center justify-center gap-2 text-lg font-semibold text-white cursor-pointer w-full" 
            onClick={handleLogout} 
          > 
            <LogOut size={25} /> 
            <span>Logout</span> 
          </button> 
        </div>
      </aside>
    </>
  );
}