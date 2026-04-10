import React from "react";
import { FaPlus } from "react-icons/fa";

const AddBtn = ({ onAdd }) => {
  return (
    <div className="w-full">
      <button
        onClick={onAdd}
        className="flex items-center gap-[6px]
                   px-4 py-2.5
                   rounded-md
                   bg-[linear-gradient(to_right,var(--color-primary-1),var(--color-primary-2))]
                   text-white
                   cursor-pointer
                   transition-all duration-200
                   hover:brightness-90
                   w-full sm:w-auto"
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default AddBtn;