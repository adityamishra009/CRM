import React from "react";
import { ListFilter } from "lucide-react";

const FilterButton = ({ label = "Filter", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        flex items-center justify-center gap-1.5
        px-3 py-2 text-xs
        sm:px-2.5 sm:py-1.5 sm:text-xs
        md:px-3 md:py-2 md:text-sm
        rounded-md border-none
        text-white whitespace-nowrap
        cursor-pointer
      "
      style={{
        background:
          "linear-gradient(90deg, var(--color-primary-1), var(--color-primary-2))",
        transition: "0.2s",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.filter = "brightness(0.85)")
      }
      onMouseLeave={(e) => (e.currentTarget.style.filter = "none")}
    >
      <ListFilter size={16} />
      <span>{label}</span>
    </button>
  );
};

export default FilterButton;