import React, { useState } from "react";
import AddEmployee from "../Components/AddEmployee"
import { Table } from "antd";
import FilterEmployee from "../Components/FilterEmployee"
import { ChevronsLeft } from 'lucide-react';

const AllEmployee = () => {
  const [data,setData] = useState([
    {
        id:1,
        name:"Preeti",
        email:"preeti@gmail.com",
        mobile:9878435602,
        profile:"Active"
    },
    {
        id:2,
        name:"Urvshi",
        email:"urvshi@gmail.com",
        mobile:7609835685,
        profile:"Inactive"
    },
    {
        id:3,
        name:"Twinkle",
        email:"twinkle@gmail.com",
        mobile:9278005632,
        profile:"Active"
    },
  ]);

  const handleAddEmployee = (values) => {
  const newEmployee = {
    id: data.length + 1,
    ...values,
  };

  setData([...data, newEmployee]);
};
  

  // Table Columns
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
    },
    {
      title: "Profile",
      dataIndex: "profile",
    },
  ];

  return (
    <div>
        <div className="flex justify-between items-center mb-5">
          <div className="flex gap-2 items-center">
            <div 
              className="bg-[linear-gradient(to_right,var(--color-primary-1),var(--color-primary-2))] rounded-xl py-2 px-3 cursor-pointer hover:scale-105">
              <ChevronsLeft />
            </div>
            <h1 className="text-2xl font-semibold">All Employee</h1>
          </div>
      
          <div className="flex gap-2">
            <AddEmployee onAddEmployee={handleAddEmployee}/>
            <FilterEmployee />
          </div>
        </div>

      {/* Table */}
      <Table columns={columns} dataSource={data} rowKey="id" />
      
    </div>
  );
};

export default AllEmployee;