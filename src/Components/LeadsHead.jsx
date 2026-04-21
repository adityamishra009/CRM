import React from "react";
import BackButton from "../Components/BackButton";
import FilterLead from "../Components/FilterLead";
import AddLead from "../Components/AddLead";
import ExportBtn from "../Components/ExportBtn";
import BulkUploadBtn from "../Components/BulkUploadBtn";

const LeadsHeader = ({ onAddLead }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
      
      {/* Left Section */}
      <div className="flex items-center gap-2">
        <BackButton />
        <h1 className="text-lg md:text-xl font-semibold text-gray-800">
          Leads
        </h1>
      </div>

      {/* Right Section */}
      <div className="flex flex-wrap md:flex-nowrap items-center gap-2 w-full md:w-auto">
        <FilterLead />
        <BulkUploadBtn />
        <AddLead onAddLead={onAddLead} />
        <ExportBtn />
      </div>

    </div>
  );
};

export default LeadsHeader;