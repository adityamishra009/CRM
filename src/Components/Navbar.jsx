import React, { useState, useRef, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { ChevronDown, Bell } from "lucide-react";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");

  const dropdownRef = useRef();
  const searchRef = useRef();

 useEffect(() => {
  const handleClickOutside = (e) => {
    // Profile dropdown close
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setOpen(false);
    }

    // ✅ Search input close
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setShowSearch(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);

  // ✅ Search handle
  const handleSearch = () => {
    console.log("Search Value:", search);
    // yaha tum filter ya API call kar sakte ho
  };

  return (
    <div className="fixed top-0 md:left-60 left-0 right-0 z-50 bg-[linear-gradient(to_right,var(--color-primary-1),var(--color-primary-2))]">
      <div className="flex justify-between items-center py-1 px-2">

        {/* Left */}
        <div ref={searchRef} className="p-2 gap-3 flex items-center">

          {/* ✅ Search UI */}
          {showSearch && (
            <input
              type="text"
              placeholder="Search..."
              className="px-2 py-1 rounded border outline-none placeholder:text-white text-white"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          )}

          <button
            onClick={() => {
              if (showSearch) {
                handleSearch();
              }
              setShowSearch(true);
            }}
          >
            <FiSearch size={24} />
          </button>
        </div>

        {/* Right */}
        <div className="flex gap-4 items-center">

          <button>
            <Bell size={24} />
          </button>

          {/* Profile */}
          <div className="relative" ref={dropdownRef}>
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <CgProfile size={24} />
              <ChevronDown size={15} />
            </div>

            {open && (
              <div className="absolute right-0 mt-2 w-32 bg-white border rounded-md shadow-lg py-2">
                <button className="w-full text-center hover:bg-gray-100">
                  Profile
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;