import { useState } from "react";
import { Menu, X,LogOut } from "lucide-react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { sidebarMenu } from "../Constant/SidebarMenu";
import { useNavigate } from "react-router-dom"; // ✅ add
import logo1 from "../assets/logo1.png"

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

const handleLogout = () => {
  localStorage.clear(); // सब साफ
  window.location.replace("/login");
};

  return (
    <>
      {/* Mobile button */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-[var(--color-bg)] border border-[var(--color-border)] rounded text-[var(--color-text)]"
      >
        <Menu size={18} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={clsx(
          "fixed top-0 left-0 z-50 h-screen w-60",
          "bg-[var(--color-bg)]",
          "flex flex-col",
          "transition-transform duration-300",
          open ? "translate-x-0" : "-translate-x-full",
          "md:translate-x-0"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 h-13 border-b border-[var(--color-border)] bg-[linear-gradient(to_right,var(--color-primary-1),var(--color-primary-2))]">
  
  <div className="flex items-center h-full">
    <img
      src={logo1}
      alt="logo"
      className="h-48 w-auto object-contain"
    />
  </div>
          <button
            className="md:hidden text-[var(--color-text)]"
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
                          : "text-[var(--color-text)] hover:bg-[linear-gradient(to_right,var(--color-primary-1),var(--color-primary-2))]"
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
        <div className="p-4 border-t border-[var(--color-border)] text-xs text-[var(--color-text)] bg-[linear-gradient(to_right,var(--color-primary-1),var(--color-primary-2))]">
          <button className="cursor-pointer text-black flex gap-1" onClick={handleLogout}>Logout <LogOut size={18} /></button>
        </div>
      </aside>
    </>
  );
}