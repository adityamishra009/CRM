import React from "react";
import BackButton from "../Components/BackButton";

const PageHeader = ({ title, children }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3">
      
      {/* Left */}
      <div className="flex items-center gap-2">
        <BackButton />
        <h1 className="text-lg md:text-xl font-semibold text-gray-800">
          {title}
        </h1>
      </div>

      {/* Right (buttons / filters / anything) */}
      <div className="flex flex-wrap md:flex-nowrap items-center gap-2 w-full md:w-auto">
        {children}
      </div>

    </div>
  );
};

export default PageHeader;