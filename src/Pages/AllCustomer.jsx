import React, { useState } from "react";
import DataTable from "react-data-table-component/dist/index.es.js";
import { Modal, Button } from "antd";
import { useForm } from "react-hook-form";
import AddCustomer from "../Components/AddCustomer";
import FilterCustomer from "../Components/FilterCustomer";
import InputField from "../Components/fields/InputField";
import BackButton from "../Components/BackButton"

const AllCustomers = () => {
  const [data, setData] = useState([
    {
      id: 1,
      customerName: "Meena Kumari",
      mobileNumber: "9878435602",
      email: "Meena@gmail.com",
      leadDate: "2026-04-01",
    },
    {
      id: 2,
      customerName: "Urvashi Sharma",
      mobileNumber: "7609835685",
      email: "urvshi@gmail.com",
      leadDate: "2026-03-30",
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
  const handleAddCustomer = (values) => {
    const newCustomer = {
      id: data.length + 1,
      ...values,
    };
    setData([...data, newCustomer]);
  };

  // Row Click - Open Modal
  const handleRowClick = (row) => {
    setSelectedRow(row);
    setEditOpen(true);

    
    reset(row);
  };

  // Update
  const handleUpdate = (updatedData) => {
    const newData = data.map((item) =>
      item.id === selectedRow.id ? { ...item, ...updatedData } : item
    );

    setData(newData);
    setEditOpen(false);
  };

  // Delete
  const handleDelete = () => {
    const newData = data.filter((item) => item.id !== selectedRow.id);
    setData(newData);
    setEditOpen(false);
  };

  const columns = [
    {
      name: "Customer Name",
      selector: (row) => row.customerName,
      sortable: true,
    },
    {
      name: "Mobile Number",
      selector: (row) => row.mobileNumber,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Lead Date",
      selector: (row) => row.leadDate,
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <div className="flex gap-2 items-center">
         <BackButton/>
          <h1 className="text-2xl font-semibold">Customers</h1>
        </div>

        <div className="flex gap-2">
          <AddCustomer onAddCustomer={handleAddCustomer} />
          <FilterCustomer />
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
        title="Edit Customer"
        open={editOpen}
        onCancel={() => setEditOpen(false)}
        footer={null}
      >
        <form onSubmit={handleSubmit(handleUpdate)}>
          
          <InputField
            control={control}
            errors={errors}
            name="customerName"
            label="Customer Name"
            required
          />

          <InputField
            control={control}
            errors={errors}
            name="mobileNumber"
            label="Mobile"
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
            name="leadDate"
            type="date"
            label="Lead Date"
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

export default AllCustomers;