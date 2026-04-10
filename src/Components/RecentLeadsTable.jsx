import React from "react";
import DataTableImport from "react-data-table-component";
const DataTable = DataTableImport.default || DataTableImport;

const RecentLeadsTable = () => {
  const columns = [
    {
      name: "Lead ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Mobile No",
      selector: (row) => row.mobile,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
  ];

  const data = [
    { id: "L001", name: "Rahul Sharma", mobile: "9876543210", email: "rahul@gmail.com" },
    { id: "L002", name: "Amit Verma", mobile: "9123456780", email: "amit@gmail.com" },
    { id: "L003", name: "Sneha Gupta", mobile: "9988776655", email: "sneha@gmail.com" },
    { id: "L004", name: "Pooja Singh", mobile: "9090909090", email: "pooja@gmail.com" },
    { id: "L005", name: "Rohit Kumar", mobile: "8888888888", email: "rohit@gmail.com" },
  ];

  
  const customStyles = {
    headRow: {
      style: {
        backgroundColor: "#000", 
        minHeight: "50px",
      },
    },
    headCells: {
      style: {
        color: "#fff", 
        fontWeight: "700", 
        fontSize: "12px",
         textTransform: "uppercase",
      },
    },
  };

  return (
    <div
      style={{
        marginTop: "20px",
        background: "#fff",
        padding: "16px",
        borderRadius: "10px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
      }}
    >
      <h2
        style={{
          marginBottom: "12px",
          fontWeight: 600,
        }}
      >
        Recent Leads
      </h2>

      <DataTable
        columns={columns}
        data={data}
        pagination
        highlightOnHover
        striped
        customStyles={customStyles} 
      />
    </div>
  );
};

export default RecentLeadsTable;