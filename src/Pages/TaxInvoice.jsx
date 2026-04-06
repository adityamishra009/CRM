import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Card, Button, message } from "antd";

import InputField from "../Components/fields/InputField";
import BackButton from "../Components/BackButton";

import DataTableImport from "react-data-table-component";
const DataTable = DataTableImport.default || DataTableImport;


const TaxInvoice = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const customers = [
    { id: 1, name: "Rahul Sharma", email: "rahul@gmail.com", phone: "9876543210" },
    { id: 2, name: "Amit Verma", email: "amit@gmail.com", phone: "9123456780" },
    { id: 3, name: "Neha Singh", email: "neha@gmail.com", phone: "9988776655" },
    { id: 4, name: "Rohit Yadav", email: "rohit@gmail.com", phone: "9012345678" },
  ];

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
      selector: (row) => row.phone,
    },
    {
      name: "Action",
      cell: (row) => (
        <button
          onClick={() => setSelectedCustomer(row)}
          className="bg-[linear-gradient(to_right,var(--color-primary-1),var(--color-primary-2))] px-3 py-1 rounded text-black"
        >
          Create Invoice
        </button>
      ),
    },
  ];

  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      customer: "",
      previousBalance: 0,
      received: 0,
    },
  });

  useEffect(() => {
    if (selectedCustomer) {
      setValue("customer", selectedCustomer.name);
    }
  }, [selectedCustomer, setValue]);

  const onSubmit = (data) => {
    console.log("FINAL DATA 👉", data);
    message.success("Tax Invoice Created Successfully");
    reset();
    setSelectedCustomer(null);
  };

  // 🔹 TABLE VIEW
  if (!selectedCustomer) {
    return (
      <div className="p-6">

        <div className="flex items-center gap-3 mb-4">
          <BackButton onClick={() => window.history.back()} />
          <h2 className="text-xl font-semibold">
            Select Customer
          </h2>
        </div>

        <DataTable
          columns={columns}
          data={customers}
          pagination
          highlightOnHover
          striped
        />

      </div>
    );
  }

  // 🔹 FORM VIEW
  return (
    <div className="p-6">

      {/* ✅ CUSTOM BACK (IMPORTANT FIX) */}
      <div className="flex items-center gap-3 mb-4">
        <button
          onClick={() => setSelectedCustomer(null)}
          className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
        >
          ← Back
        </button>

        <h2 className="text-xl font-semibold">
          Create Tax Invoice
        </h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

        <InputField
          control={control}
          errors={errors}
          name="customer"
          label="Customer"
          disabled
        />

        <Card className="!p-4">
          <InputField
            control={control}
            errors={errors}
            name="products"
            type="select"
            mode="multiple"
            label="Select Products"
            options={[
              { label: "Product 1", value: "1" },
              { label: "Product 2", value: "2" },
              { label: "Product 3", value: "3" },
            ]}
          />
          <p className="text-xs text-gray-500 mt-1">
            Select products to set quantity, rate and stock used.
          </p>
        </Card>

        <div className="grid grid-cols-3 gap-4">
          <InputField control={control} errors={errors} name="date" type="date" label="Date" />
          <InputField
            control={control}
            errors={errors}
            name="paymentMode"
            type="option"
            label="Mode/Terms of Payment"
            options={[
              { label: "Cash", value: "cash" },
              { label: "Bank", value: "bank" },
              { label: "UPI", value: "upi" },
            ]}
          />
          <InputField control={control} errors={errors} name="salesPerson" label="Sales Person" />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <InputField control={control} errors={errors} name="dispatch" label="Dispatched Through" />
          <InputField control={control} errors={errors} name="destination" label="Destination" />
          <InputField control={control} errors={errors} name="reminderDate" type="date" label="Reminder Date" />
        </div>

        <InputField
          control={control}
          errors={errors}
          name="terms"
          type="description"
          label="Terms of Delivery"
          rows={4}
        />

        <div className="grid grid-cols-3 gap-4">
          <InputField
            control={control}
            errors={errors}
            name="taxType"
            type="option"
            label="Tax Type"
            options={[{ label: "GST", value: "gst" }]}
          />
          <InputField control={control} errors={errors} name="poNumber" label="PO Number" />
          <InputField control={control} errors={errors} name="poDate" type="date" label="PO Date" />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <InputField control={control} errors={errors} name="freight" type="numeric" label="Freight & Cartage Amount" />
          <InputField control={control} errors={errors} name="previousBalance" type="numeric" label="Previous Balance" />
          <InputField control={control} errors={errors} name="received" type="numeric" label="Received Amount" />
        </div>

        <div className="pt-4">
          <Button
            htmlType="submit"
            type="primary"
            className="!bg-[linear-gradient(to_right,var(--color-primary-1),var(--color-primary-2))] !border-none !text-black px-6 py-2 rounded-md"
          >
            Create Tax Invoice
          </Button>
        </div>

      </form>
    </div>
  );
};

export default TaxInvoice;