import React from 'react'
import { FiUpload } from "react-icons/fi";

const BulkUploadBtn = () => {
  return (
    <div>
      <button
        className="flex items-center gap-[6px]
                   px-[14px] py-[8px]
                   rounded-md
                   bg-[linear-gradient(to_right,var(--color-primary-1),var(--color-primary-2))]
                   text-white
                   cursor-pointer
                   transition-all duration-200
                   hover:brightness-90"
      >
        <FiUpload size={18} />
        <span className="font-semibold">Bulk Upload</span>
      </button>
    </div>
  )
}

export default BulkUploadBtn;