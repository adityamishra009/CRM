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

  return (
    <div style={{ marginTop: "30px", background: "#fff", padding: "15px", borderRadius: "8px" }}>
      <h2 style={{ marginBottom: "10px" }}>Recent Leads</h2>

      <DataTable
        columns={columns}
        data={data}
        pagination
        highlightOnHover
        striped
      />
    </div>
  );
};

export default RecentLeadsTable;