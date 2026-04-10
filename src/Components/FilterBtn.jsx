import React from "react";
import { ListFilter } from 'lucide-react';

const FilterButton = ({ label = "Filter", onClick }) => {
  return (
    <div className="w-full">
      <button
        onClick={onClick}
        className="flex items-center gap-[6px]
                   px-3.5 py-1.5
                   rounded-md
                   bg-[linear-gradient(to_right,var(--color-primary-1),var(--color-primary-2))]
                   text-white
                   cursor-pointer
                   transition-all duration-200
                   hover:brightness-90"
      >
        <ListFilter size={18} />
        <span className="font-semibold">{label}</span>
      </button>
    </div>
  );
};

export default FilterButton;