import React, { useState } from "react";
import { Table,Form } from "antd";
import AddCustomer from "../Components/AddCustomer"
import FilterCustomer from "../Components/FilterCustomer";
import { ChevronsLeft } from 'lucide-react';

const AllCustomers = () => {
  const [data,setData] = useState([
    {
      key: 1,
      customerName: "Meena Kumari",
      mobileNumber: "9878435602",
      email: "Meena@gmail.com",
      leadDate: "2026-04-01",
    },
    {
      key: 2,
      customerName: "Urvashi Sharma",
      mobileNumber: "7609835685",
      email: "urvshi@gmail.com",
      leadDate: "2026-03-30",
    },
    {
      key: 3,
      customerName: "Twinkle Verma",
      mobileNumber: "9278005632",
      email: "twinkle@gmail.com",
      leadDate: "2026-03-28",
    },
  ]);

  const handleAddEmployee = (values) => {
   const newEmployee = {
    id: data.length + 1,
    ...values,
  };

  setData([...data, newEmployee]);
  };

  const columns = [
    {
      title: "Customer Name",
      dataIndex: "customerName",
    },
    {
      title: "Mobile Number",
      dataIndex: "mobileNumber",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Lead Date",
      dataIndex: "leadDate",
    },
  ];

  return (
    <div>
        <div className="flex justify-between items-center mb-5">
          <div className="flex gap-2 items-center">
            <button 
             className="bg-[linear-gradient(to_right,var(--color-primary-1),var(--color-primary-2))] rounded-xl py-2 px-3 cursor-pointer hover:scale-105">
             <ChevronsLeft />
            </button>
            <h1 className="text-2xl font-semibold">Customers</h1>
          </div>
            <div className="flex gap-2">
                <AddCustomer onAddEmployee={handleAddEmployee} />
                <FilterCustomer />
            </div>
        </div>
      

      <Table
        columns={columns} 
        dataSource={data}
        pagination
        rowKey="key"
        highlightOnHover
        striped
        responsive
      />
    </div>
  );
};

export default AllCustomers;