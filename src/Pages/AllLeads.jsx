import React, { useState } from "react";
import DataTable from "react-data-table-component/dist/index.es.js";
import FilterLead from "../Components/FilterLead"
import AddLead from "../Components/AddLead";
import ExportBtn from "../Components/ExportBtn";
import BulkUploadBtn from "../Components/BulkUploadBtn";
import BackButton from "../Components/BackButton";
import EditLeadModal from "../Components/EditLeadModal";

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

  // Add Lead
  const handleAddLead = (values) => {
    const newLead = {
      id: data.length + 1,
      ...values,
    };
    setData([...data, newLead]);
  };

  // ✅ Update
  const handleUpdate = (updatedData) => {
    if (!selectedRow) return;

    setData((prev) =>
      prev.map((item) =>
        item.id === selectedRow.id ? { ...item, ...updatedData } : item
      )
    );

    setEditOpen(false);
    setSelectedRow(null);
  };

  // ✅ Delete
const handleDelete = () => {
  if (!selectedRow) return;

  setData((prev) =>
    prev.filter((item) => item.id !== selectedRow.id)
  );

  setEditOpen(false);
  setSelectedRow(null);
};

const leadStyles = {
  headRow: {
    style: {
      background: "black",
      borderRadius: "10px",
      overflow: "hidden",
    },
  },
  headCells: {
    style: {
      color: "white",
      fontWeight: "600",
    },
  },
};

  // Columns
  const columns = [
  { name: "Lead ID", selector: (row) => row.leadId, wrap: true, grow: 1 },
  { name: "Date", selector: (row) => row.date, wrap: true, grow: 2 },
  { name: "Name", selector: (row) => row.name, wrap: true },
  { name: "Mobile", selector: (row) => row.mobileNumber },
  { name: "Email", selector: (row) => row.emailId, wrap: true, grow: 2 },
  { name: "Service", selector: (row) => row.serviceCategary },
  { name: "Sales Status", selector: (row) => row.salesStatus },
  { name: "Operation Status", selector: (row) => row.operationStatus, wrap: true },
  { name: "Payments", selector: (row) => row.totalPayments },
];

  return (
    <div className="mt-3">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex gap-2 items-center">
          <BackButton/>
          <h1 className="text-xl font-semibold">Leads</h1>
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
        pointerOnHover
        onRowClicked={(row) => {
          setSelectedRow(row);
          setEditOpen(true);
        }}
        customStyles={leadStyles}
      />
      
      {/* Edit lead */}
      <EditLeadModal
        open={editOpen}
        onClose={() => {
          setEditOpen(false);
          setSelectedRow(null);
        }}
        selectedRow={selectedRow}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default AllLeads;