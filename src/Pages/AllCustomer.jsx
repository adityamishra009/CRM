import React, { useState } from "react";
import DataTable from "react-data-table-component/dist/index.es.js";
import CustomerHeader from "../Components/CustomerHeader"; // ✅ added
import EditCustomerModal from "../Components/EditCustomerModal";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";


const AllCustomers = () => {
  const [data, setData] = useState([
    {
      id: 1,
      lpiId:"LPI123",
      customerName: "Meena Kumari",
      mobileNumber: "9878435602",
      email: "Meena@gmail.com",
      lastleadDate: "2026-04-01",
    },
    {
      id: 2,
      lpiId:"LPI4567",
      customerName: "Urvashi Sharma",
      mobileNumber: "7609835685",
      email: "urvshi@gmail.com",
      lastleadDate: "2026-03-30",
    },
  ]);

  const [editOpen, setEditOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleAddCustomer = (values) => {
    const newCustomer = {
      id: data.length + 1,
      ...values,
    };
    setData([...data, newCustomer]);
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

  const customStyles = {
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

  const columns = [
    { name: "LPI ID", selector: (row) => row.lpiId, sortable: true },
    { name: "Customer Name", selector: (row) => row.customerName },
    { name: "Mobile Number", selector: (row) => row.mobileNumber },
    { name: "Email", selector: (row) => row.email },
    { name: "Last Lead Date", selector: (row) => row.lastleadDate },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex gap-1">
          <button
            onClick={()=>handleDelete(row.id)}
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
    <div className="mt-1 bg-white p-3 sm:p-4 rounded-lg shadow-sm">

      {/* ✅ Replaced Header */}
      <CustomerHeader onAddCustomer={handleAddCustomer} />

      {/* Table */}
      <div className="overflow-x-auto">
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
          customStyles={customStyles}
        />
      </div>

      {/* Edit Modal */}
      <EditCustomerModal
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

export default AllCustomers;