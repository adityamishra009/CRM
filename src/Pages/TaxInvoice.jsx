import React from "react";
import { useForm } from "react-hook-form";
import { Card, Button, message } from "antd";
import InputField from "../Components/fields/InputField";
import BackButton from "../Components/BackButton";

const TaxInvoice = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      previousBalance: 0,
      received: 0,
    },
  });

  const onSubmit = (data) => {
    console.log("FINAL DATA 👉", data);

    // create (abhi local)
    message.success("Tax Invoice Created Successfully");

    // reset form after create
    reset();
  };

  return (
    <div className="p-6">
     <div className="flex items-center gap-3 mb-4">
  <BackButton />
  <h2 className="text-xl font-semibold">
    Create Tax Invoice
  </h2>
</div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

        {/* Customer */}
        <InputField
          control={control}
          errors={errors}
          name="customer"
          type="option"
          label="Select Customer"
          options={[
            { label: "Customer 1", value: "1" },
          ]}
          required
        />

        {/* Products */}
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

        {/* Row 1 */}
        <div className="grid grid-cols-3 gap-4">
          <InputField
            control={control}
            errors={errors}
            name="date"
            type="date"
            label="Date"
          />

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

          <InputField
            control={control}
            errors={errors}
            name="salesPerson"
            label="Sales Person"
          />
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-3 gap-4">
          <InputField
            control={control}
            errors={errors}
            name="dispatch"
            label="Dispatched Through"
          />

          <InputField
            control={control}
            errors={errors}
            name="destination"
            label="Destination"
          />

          <InputField
            control={control}
            errors={errors}
            name="reminderDate"
            type="date"
            label="Reminder Date"
          />
        </div>

        {/* Terms */}
        <InputField
          control={control}
          errors={errors}
          name="terms"
          type="description"
          label="Terms of Delivery"
          rows={4}
        />

        {/* Row 3 */}
        <div className="grid grid-cols-3 gap-4">
          <InputField
            control={control}
            errors={errors}
            name="taxType"
            type="option"
            label="Tax Type"
            options={[{ label: "GST", value: "gst" }]}
          />

          <InputField
            control={control}
            errors={errors}
            name="poNumber"
            label="PO Number"
          />

          <InputField
            control={control}
            errors={errors}
            name="poDate"
            type="date"
            label="PO Date"
          />
        </div>

        {/* Row 4 */}
        <div className="grid grid-cols-3 gap-4">
          <InputField
            control={control}
            errors={errors}
            name="freight"
            type="numeric"
            label="Freight & Cartage Amount"
          />

          <InputField
            control={control}
            errors={errors}
            name="previousBalance"
            type="numeric"
            label="Previous Balance"
          />

          <InputField
            control={control}
            errors={errors}
            name="received"
            type="numeric"
            label="Received Amount"
          />
        </div>

        {/* Submit */}
        <div className="pt-4">
        <Button
  htmlType="submit"
  type="primary"
  className="!bg-[linear-gradient(to_right,var(--color-primary-1),var(--color-primary-2))] hover:!opacity-90 transition-all !border-none !rounded-md px-6 py-2 !text-black font-medium"
>
  Create Tax Invoice
</Button>
        </div>
      </form>
    </div>
  );
};

export default TaxInvoice;