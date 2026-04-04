import React from 'react'
import { FiUpload } from "react-icons/fi";

const BulkUploadBtn = () => {
  return (
    <div>
      <button
        className="flex items-center gap-2 px-4 py-2 cursor-pointer rounded-xl hover:scale-105 bg-[linear-gradient(to_right,var(--color-primary-1),var(--color-primary-2))]">
          <FiUpload size={20}/>
          <span className= "font-semibold">Bulk Upload</span>
        </button>
    </div>
  )
}

export default BulkUploadBtn;