import React from "react";
import { ListFilter } from 'lucide-react';

const FilterButton = ({ label = "Filter", onClick }) => {
  return (
    <div className="w-full">
        <button
          onClick={onClick}
          className="flex items-center gap-2 px-4 py-2 rounded-xl cursor-pointer bg-[linear-gradient(to_right,var(--color-primary-1),var(--color-primary-2))]"
        >
          <ListFilter size={20}/>
          <span className= "font-semibold">{label}</span>
        </button>
    </div>
  );
};

export default FilterButton;