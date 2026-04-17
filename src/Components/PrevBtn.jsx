import React from "react";
import { ChevronsLeft } from "lucide-react";

const PrevBtn = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[linear-gradient(to_right,var(--color-primary-1),var(--color-primary-2))] 
                 rounded-md py-1.5 px-3.5 cursor-pointer 
                 hover:scale-105 transition-all duration-200 text-white 
                 flex items-center gap-1">
      <ChevronsLeft  />
    </button>
  );
};

export default PrevBtn;