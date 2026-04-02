import React from "react";
import { FaPlus } from "react-icons/fa";

const AddBtn = ({ onAdd }) => {
  return (
    <div className="w-full">
      <button
        onClick={onAdd}
        className="rounded-xl px-4 py-3 bg-[linear-gradient(to_right,var(--color-primary-1),var(--color-primary-2))] text-black cursor-pointer hover:scale-105 w-full sm:w-auto"
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default AddBtn;