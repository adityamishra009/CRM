import React, { useState } from "react";
import DataTable from "react-data-table-component/dist/index.es.js";
import LeadsHeader from "../Components/LeadsHead"
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
    { 
      id: 2, 
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

  const handleAddLead = (values) => {
    const newLead = {
      id: data.length + 1,
      ...values,
    };
    setData([...data, newLead]);
  };

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

  const handleDelete = () => {
    if (!selectedRow) return;

    setData((prev) =>
      prev.filter((item) => item.id !== selectedRow.id)
    );

    setEditOpen(false);
    setSelectedRow(null);
  };

  // ✅ SAME as Employee
  const leadStyles = {
    headRow: {
      style: {
        background: "black",
        borderTopRightRadius: "10px",
        borderTopLeftRadius: "10px",
        overflow: "hidden",
      },
    },
    headCells: {
      style: {
        color: "white",
        fontWeight: "600",
        textTransform: "uppercase",
        fontSize: "14px", // ✅ added (same as employee)
      },
    },
  };

  const columns = [
    { name: "Lead ID", selector: (row) => row.leadId, sortable: true, wrap: true, width:"100px",
      cell: row => <span style={{ fontWeight: 600, fontSize: "11px", color: "#1f2937" }}>{row.leadId}</span>
    },
    { name: "Date", selector: (row) => row.date, sortable: true, wrap: true, width:"90px", 
      cell: row => <span style={{ fontSize: "11px" }}>{row.date}</span>
    },
    {
      name: "Name", selector: (row) => row.name, sortable: true, wrap: true, width: "100px",
      cell: row => <span style={{ fontWeight: 500, fontSize: "11px", lineHeight: "1.3" }}>{row.name}</span>,
    },
    {
      name: "Mobile", selector: row => row.mobileNumber, width: "95px",
      cell: row => <span style={{ fontSize: "11px" }}>{row.mobileNumber}</span>,
    },
    {
      name: "Email", selector: row => row.emailId, width: "115px",
      cell: row => <span style={{ fontSize: "10.5px", letterSpacing: "-0.3px" }}>{row.emailId}</span>,
    },
    { name: "Service", selector: (row) => row.serviceCategary, minwidth:"50px",
      cell: row => <span style={{ fontSize: "11px", letterSpacing: "-0.3px" }}>{row.serviceCategary}</span>
    },
    { name: "Sales Status", selector: (row) => row.salesStatus, width:"110px",
      cell: row => <span style={{ fontSize: "11px" }}>{row.salesStatus}</span>,
    },
    { name: "Operation Status", selector: (row) => row.operationStatus, width:"150px", 
      cell: row => <span style={{ fontSize: "11px" }}>{row.operationStatus}</span>,
    },
    { name: "Payments", selector: (row) => row.totalPayments, width:"100px",
      cell: row => <span style={{fontSize:"11px"}}>{row.totalPayments}</span>
    },
  ];

  return (
    <div className="mt-1 bg-white p-3 sm:p-4 rounded-lg shadow-sm">

      <LeadsHeader onAddLead={handleAddLead} />

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