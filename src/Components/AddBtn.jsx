import React from "react";
import { FaPlus } from "react-icons/fa";

const AddBtn = ({ onAdd }) => {
  return (
    <div className="w-auto">
      <button
        onClick={onAdd}
        className="flex items-center justify-center gap-1
                   px-3 py-3 sm:px-4 sm:py-2.5
                   rounded-md
                   bg-[linear-gradient(to_right,var(--color-primary-1),var(--color-primary-2))]
                   text-white
                   text-sm sm:text-base
                   cursor-pointer
                   transition-all duration-200
                   hover:brightness-90
                   w-auto whitespace-nowrap">
        <FaPlus className="text-xs sm:text-sm" />
      </button>
    </div>
  );
};

export default AddBtn;