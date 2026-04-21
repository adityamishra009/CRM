import React from "react";
import BackButton from "../Components/BackButton";
import AddCustomer from "../Components/AddCustomer";
import FilterCustomer from "../Components/FilterCustomer";

const CustomerHeader = ({ onAddCustomer }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
      
      {/* Left */}
      <div className="flex items-center gap-2">
        <BackButton />
        <h1 className="text-lg md:text-xl font-semibold text-gray-800">
          Customers
        </h1>
      </div>

      {/* Right */}
      <div className="flex flex-wrap md:flex-nowrap items-center gap-2 w-full md:w-auto">
        <AddCustomer onAddCustomer={onAddCustomer} />
        <FilterCustomer />
      </div>

    </div>
  );
};

export default CustomerHeader;