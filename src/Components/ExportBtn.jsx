import { Tooltip } from 'antd';
import React from 'react'
import { BiExport } from "react-icons/bi";

const ExportBtn = () => {
  return (
    <div>
      <Tooltip title="Export" placement="top">
        <button  
          className="flex items-center gap-[6px]
                     px-[14px] py-[8px]
                     rounded-md
                     bg-[linear-gradient(to_right,var(--color-primary-1),var(--color-primary-2))]
                     text-white
                     cursor-pointer
                     transition-all duration-200
                     hover:brightness-90
                     w-full sm:w-auto"
        >
          <BiExport size={18} />
        </button>
      </Tooltip>
    </div>
  )
}

export default ExportBtn;