import React, { useState } from "react";
import AddEmployee from "../Components/AddEmployee";
import FilterEmployee from "../Components/FilterEmployee";
import DataTable from "react-data-table-component/dist/index.es.js";
import BackButton from "../Components/BackButton";
import EditEmployeeModal from "../Components/EditEmployeeModal";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

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
const handleDelete = (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      setData(data.filter((item) => item.id !== id));

      Swal.fire({
        title: "Deleted!",
        text: "Your record has been deleted.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
    }
  });
};

const employeeStyles = {
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
      fontSize: "14px",
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
            onClick={()=>handleDelete(row.id)}
            className="flex items-center gap-1 cursor-pointer hover:scale-105 bg-red-500 text-white px-2 py-1 rounded text-sm sm:px-3 sm:text-sm whitespace-nowrap"
          >
            <MdDelete size={20}/>
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="mt-5 bg-white p-3 sm:p-4 rounded-lg shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 mb-3">
        <div className="flex gap-2 items-center">
            <BackButton />
          <h1 className="text-xl font-semibold">Employee</h1>
        </div>

        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
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
        onDelete={handleDelete} 
      />
    </div>
  );
};

export default AllEmployee;