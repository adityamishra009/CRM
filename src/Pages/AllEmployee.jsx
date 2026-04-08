import React, { useState } from "react";
import AddEmployee from "../Components/AddEmployee";
import FilterEmployee from "../Components/FilterEmployee";
import DataTable from "react-data-table-component/dist/index.es.js";
import BackButton from "../Components/BackButton";
import EditEmployeeModal from "../Components/EditEmployeeModal";
import { MdDelete } from "react-icons/md";

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

  // ✅ Add
  const handleAddEmployee = (values) => {
    const newEmployee = {
      id: data.length + 1,
      ...values,
    };
    setData([...data, newEmployee]);
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
const handleDeleteRow = (id) => {
  setData((prev) => prev.filter((item) => item.id !== id));
};

const employeeStyles = {
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

  // ✅ Columns (NO Edit Button)
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
    {
      name: "Action",
      cell: (row) => (
        <div className="flex gap-1">
          <button
            onClick={(e) => {
            e.stopPropagation(); // row click open modal stop karega
              if (window.confirm("Delete this employee?")) {
                setSelectedRow(row);
                handleDeleteRow(row.id);
              }
            }}
            className="flex gap-1 cursor-pointer hover:scale-105 bg-red-500 text-white px-3 py-1 rounded text-sm"
          >
            <MdDelete size={20}/>
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-3">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex gap-2 items-center">
            <BackButton />
          <h1 className="text-xl font-semibold">Employee</h1>
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
        pointerOnHover
        onRowClicked={(row) => {
          setSelectedRow(row);
          setEditOpen(true);
        }}
        customStyles={employeeStyles} 
      />

      {/* Edit Modal */}
      <EditEmployeeModal
        open={editOpen}
        onClose={() => {
          setEditOpen(false);
          setSelectedRow(null);
        }}
        selectedRow={selectedRow}
        onUpdate={handleUpdate}
        onDelete={handleDeleteRow} 
      />
    </div>
  );
};

export default AllEmployee;