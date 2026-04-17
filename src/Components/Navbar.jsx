import React, { useState, useRef, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { ChevronDown, Bell } from "lucide-react";
import { CgProfile } from "react-icons/cg";
import { Dropdown } from "antd";
import { Menu } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const Navbar = ({setOpen}) => {

  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const searchRef = useRef();

 useEffect(() => {
  const handleClickOutside = (e) => {

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

  const items = [
  {
    key: "1",
    label: <span onClick={() => navigate("/profile")}
        className="cursor-pointer">Profile</span>,
  },]

  return (
    <div className="fixed h-13 top-0 md:left-60 left-0 right-0 z-50 bg-[linear-gradient(to_right,var(--color-primary-1),var(--color-primary-2))]">
      <div className="flex justify-between items-center py-1 px-2">

        {/* Left */}
        <div ref={searchRef} className="p-2 gap-4 flex items-center">

          <div className="cursor-pointer md:hidden" onClick={() => setOpen(true)}>
            <Menu size={24}/>
          </div>

          <div>
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
              className="cursor-pointer "
            >
              <FiSearch size={24} />
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="flex gap-4 items-center">

          <button className="cursor-pointer">
            <Bell size={24} />
          </button>

          {/* Profile */}
          <Dropdown
            menu={{ items }}
            trigger={["click"]}
            placement="bottomRight"
          >
            <div className="flex items-center gap-1 cursor-pointer">
              <CgProfile size={24} />
              <ChevronDown size={15} />
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Navbar;