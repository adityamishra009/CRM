import React from "react";
import { ChevronsLeft } from "lucide-react";

const PrevBtn = ({ onClick, label = "Back" }) => {
  return (
    <button
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "4px",
        background: "linear-gradient(to right, var(--color-primary-1), var(--color-primary-2))",
        border: "none",
        borderRadius: "6px",
        padding: "6px 12px",
        fontSize: "13px",
        fontWeight: 500,
        cursor: "pointer",
        color: "var(--color-text)",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(0.85)")}
      onMouseLeave={(e) => (e.currentTarget.style.filter = "none")}
    >
      <ChevronsLeft size={16} /> {label}
    </button>
  );
};

export default PrevBtn;