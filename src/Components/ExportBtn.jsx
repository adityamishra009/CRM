import { Tooltip } from 'antd';
import React from 'react'
import { BiExport } from "react-icons/bi";

const ExportBtn = () => {
  return (
    <div>
        <Tooltip title="Export" placement='top'>
            <button  
              className="rounded-xl px-3 py-2 bg-[linear-gradient(to_right,var(--color-primary-1),var(--color-primary-2))] text-black cursor-pointer hover:scale-105 w-full sm:w-auto">
              <BiExport size={22} />
            </button>
        </Tooltip>
    </div>
  )
}

export default ExportBtn