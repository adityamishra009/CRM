import React, { useState } from "react";
import AddEmployee from "../Components/AddEmployee";
import FilterEmployee from "../Components/FilterEmployee";
import InputField from "../Components/fields/InputField";
import { ChevronsLeft } from "lucide-react";
import DataTable from "react-data-table-component/dist/index.es.js";
import { Modal, Button } from "antd";
import { useForm } from "react-hook-form";
import BackButton from "../Components/BackButton"

const AllEmployee = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Preeti",
      email: "preeti@gmail.com",
      mobile: "9878435602",
      profile: "Active",
    },
    {
      id: 2,
      name: "Urvshi",
      email: "urvshi@gmail.com",
      mobile: "7609835685",
      profile: "Inactive",
    },
  ]);

  const [editOpen, setEditOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  // Add
  const handleAddEmployee = (values) => {
    const newEmployee = {
      id: data.length + 1,
      ...values,
    };
    setData([...data, newEmployee]);
  };

  // Row Click
  const handleRowClick = (row) => {
    setSelectedRow(row);
    setEditOpen(true);
    reset(row); 
  };

  // Update
  const handleUpdate = (updatedData) => {
    const updated = data.map((item) =>
      item.id === selectedRow.id ? { ...item, ...updatedData } : item
    );
    setData(updated);
    setEditOpen(false);
  };

  // Delete
  const handleDelete = () => {
    const filtered = data.filter((item) => item.id !== selectedRow.id);
    setData(filtered);
    setEditOpen(false);
  };

  // Columns
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Mobile",
      selector: (row) => row.mobile,
    },
    {
      name: "Profile",
      selector: (row) => row.profile,
      cell: (row) => (
        <span
          className={`px-2 py-1 rounded ${
            row.profile === "Active"
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
          }`}
        >
          {row.profile}
        </span>
      ),
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <div className="flex gap-2 items-center">
          
            <BackButton/>
        
          <h1 className="text-2xl font-semibold">Employee</h1>
        </div>

        <div className="flex gap-2">
          <AddEmployee onAddEmployee={handleAddEmployee} />
          <FilterEmployee />
        </div>
      </div>

      {/* Table */}
      <DataTable
        columns={columns}
        data={data}
        pagination
        highlightOnHover
        striped
        responsive
        onRowClicked={handleRowClick}   
        pointerOnHover
      />

      {/* Edit Modal */}
      <Modal
        title="Edit Employee"
        open={editOpen}
        onCancel={() => setEditOpen(false)}
        footer={null}
      >
        <form onSubmit={handleSubmit(handleUpdate)}>
          
          <InputField
            control={control}
            errors={errors}
            name="name"
            label="Name"
            required
          />

          <InputField
            control={control}
            errors={errors}
            name="email"
            type="email"
            label="Email"
            required
          />

          <InputField
            control={control}
            errors={errors}
            name="mobile"
            label="Mobile"
            required
          />

          <InputField
            control={control}
            errors={errors}
            name="profile"
            label="Profile"
            placeholder="Active / Inactive"
            required
          />

          <div className="flex gap-2 mt-3">
            <Button type="primary" htmlType="submit" block>
              Update
            </Button>

            <Button danger onClick={handleDelete} block>
              Delete
            </Button>
          </div>

        </form>
      </Modal>
    </div>
  );
};

export default AllEmployee;