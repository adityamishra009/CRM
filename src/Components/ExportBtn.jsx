import { Tooltip } from "antd";
import React from "react";
import { BiExport } from "react-icons/bi";

const ExportBtn = ({ onClick }) => {
  return (
    <Tooltip title="Export" placement="top">
      <button
        onClick={onClick}
        className="flex items-center justify-center gap-1
                   px-3 py-2.5 sm:px-4 sm:py-2.5
                   rounded-md
                   text-white text-sm sm:text-base
                   whitespace-nowrap cursor-pointer
                   transition-all duration-200
                   hover:brightness-90"
        style={{
          background:
            "linear-gradient(to right, var(--color-primary-1), var(--color-primary-2))",
        }}
      >
        <BiExport className="text-sm sm:text-base" />
      </button>
    </Tooltip>
  );
};

export default ExportBtn;