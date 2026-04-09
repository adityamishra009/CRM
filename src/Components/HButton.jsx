import React from "react";

const HButton = ({ icon, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        padding: "8px 14px",
        borderRadius: "6px",
        border: "none",
        cursor: "pointer",
        color: "var(--color-text)",
        background: `linear-gradient(90deg, var(--color-primary-1), var(--color-primary-2))`,
        transition: "0.2s"
      }}
      onMouseEnter={e => e.currentTarget.style.filter = "brightness(0.85)"}
      onMouseLeave={e => e.currentTarget.style.filter = "none"}
    >
      {icon} {children}
    </button>
  );
};

export default HButton;