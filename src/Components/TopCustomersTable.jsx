import React from "react";
import DataTableImport from "react-data-table-component";
const DataTable = DataTableImport.default || DataTableImport;


const TopCustomersTable = () => {
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Mobile No",
      selector: (row) => row.mobile,
    },
    {
      name: "Lead Date",
      selector: (row) => row.date,
    },
  ];

  const data = [
    { name: "Rahul Sharma", email: "rahul@gmail.com", mobile: "9876543210", date: "01 Apr 2026" },
    { name: "Amit Verma", email: "amit@gmail.com", mobile: "9123456780", date: "30 Mar 2026" },
    { name: "Sneha Gupta", email: "sneha@gmail.com", mobile: "9988776655", date: "28 Mar 2026" },
    { name: "Pooja Singh", email: "pooja@gmail.com", mobile: "9090909090", date: "25 Mar 2026" },
    { name: "Rohit Kumar", email: "rohit@gmail.com", mobile: "8888888888", date: "20 Mar 2026" },
  ];

  return (
    <div style={{ marginTop: "30px", background: "#fff", padding: "15px", borderRadius: "8px" }}>
      <h2 style={{ marginBottom: "10px" }}>Top Customers</h2>

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

export default TopCustomersTable;