import React, { useState } from "react";
import DataTable from "react-data-table-component/dist/index.es.js";
import FilterLead from "../Components/FilterLead"

import AddLead from "../Components/AddLead";
import ExportBtn from "../Components/ExportBtn";
import BulkUploadBtn from "../Components/BulkUploadBtn";
import { Modal, Button } from "antd";
import { useForm } from "react-hook-form";
import InputField from "../Components/fields/InputField";
import BackButton from "../Components/BackButton";

const AllLeads = () => {
  const [data, setData] = useState([
    {
      id: 1,
      leadId: "000079988",
      date: "2026-03-31 12:40:05",
      name: "Rinki Kumari",
      mobileNumber: "9878435602",
      emailId: "rinki@gmail.com",
      serviceCategary: "IEC Renewal",
      salesStatus: "New lead",
      operationStatus: "N/A",
      totalPayments: "0",
    },
    { id: 2, 
      leadId:"000079986", 
      date:"2026-02-31 1:10:12", 
      name: "Mohit", 
      mobileNumber: "8712008498", 
      emailId: "mohit@gmail.com", 
      serviceCategary:"AD Code", 
      salesStatus:"Converted", 
      operationStatus:"work not started", 
      totalPayments:"723.4" 
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

  // Add Lead
  const handleAddLead = (values) => {
    const newLead = {
      id: data.length + 1,
      ...values,
    };
    setData([...data, newLead]);
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
    { name: "Lead ID", selector: (row) => row.leadId, sortable: true },
    { name: "Date", selector: (row) => row.date },
    { name: "Name", selector: (row) => row.name },
    { name: "Mobile", selector: (row) => row.mobileNumber },
    { name: "Email", selector: (row) => row.emailId },
    { name: "Service", selector: (row) => row.serviceCategary },
    { name: "Sales Status", selector: (row) => row.salesStatus },
    { name: "Operation Status", selector: (row) => row.operationStatus },
    { name: "Payments", selector: (row) => row.totalPayments },
  ];

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <div className="flex gap-2 items-center">
          <BackButton/>
          <h1 className="text-2xl font-semibold">Leads</h1>
        </div>

        <div className="flex gap-2">
          <FilterLead />
          <BulkUploadBtn />
          <AddLead onAddLead={handleAddLead} />
          <ExportBtn />
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
        title="Edit Lead"
        open={editOpen}
        onCancel={() => setEditOpen(false)}
        footer={null}
      >
        <form onSubmit={handleSubmit(handleUpdate)}>

          <InputField control={control} errors={errors} name="leadId" label="Lead ID" required />
          <InputField control={control} errors={errors} name="date" label="Date" required />
          <InputField control={control} errors={errors} name="name" label="Name" required />
          <InputField control={control} errors={errors} name="mobileNumber" label="Mobile" required />
          <InputField control={control} errors={errors} name="emailId" label="Email" required />
          <InputField control={control} errors={errors} name="serviceCategary" label="Service" required />
          <InputField control={control} errors={errors} name="salesStatus" label="Sales Status" required />
          <InputField control={control} errors={errors} name="operationStatus" label="Operation Status" required />
          <InputField control={control} errors={errors} name="totalPayments" label="Total Payments" required />

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

export default AllLeads;