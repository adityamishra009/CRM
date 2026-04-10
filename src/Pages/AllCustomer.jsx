import React, { useState } from "react";
import DataTable from "react-data-table-component/dist/index.es.js";
import AddCustomer from "../Components/AddCustomer";
import FilterCustomer from "../Components/FilterCustomer";
import BackButton from "../Components/BackButton"
import EditCustomerModal from "../Components/EditCustomerModal";
import { MdDelete } from "react-icons/md";

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


const handleDeleteRow = (id) => {
  setData((prev) => prev.filter((item) => item.id !== id));
};

const customStyles = {
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
      fontWeight: "700",
      fontSize: "12px",
       textTransform: "uppercase",
    },
  },
};

  const columns = [
    {
      name: "LPI ID",
      selector: (row) => row.lpiId,
      sortable: true,
    },
    {
      name: "Customer Name",
      selector: (row) => row.customerName,
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
      name: "Last Lead Date",
      selector: (row) => row.lastleadDate,
    },
    {
     name: "Action",
     cell: (row) => (
      <div className="flex gap-1">
      <button
        onClick={(e) => {
          e.stopPropagation(); 
          if (window.confirm("Delete this customer?")) {
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
      
      <div className="flex justify-between items-center mb-3">
        <div className="flex gap-2 items-center">
         <BackButton/>
          <h1 className="text-xl font-semibold">Customers</h1>
        </div>

        <div className="flex gap-2">
          <AddCustomer onAddCustomer={handleAddCustomer} />
          <FilterCustomer />
        </div>
      </div>

      
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

      
      <EditCustomerModal
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

export default AllCustomers;