import React, { useState } from "react";
import { Modal, Button } from "antd";
import { useForm } from "react-hook-form";
import AddBtn from "./AddBtn";
import InputField from "./fields/InputField";

const AddCustomer = ({ onAddCustomer }) => {
  const [open, setOpen] = useState(false);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const showModal = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit = (data) => {
    onAddCustomer(data);
    setOpen(false);
    reset();
  };

  return (
    <div>
      {/* Button */}
      <AddBtn onAdd={showModal} />

      {/* Modal */}
      <Modal
        title="Add Customer"
        open={open}
        onCancel={handleClose}
        footer={null}
        centered
      >
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="mb-3 mt-5">
            <InputField
              control={control}
              errors={errors}
              name="lpiId"
              label="LPI ID"
              placeholder="Enter LPI ID"
              required
            />
          </div>
          <div className="mb-3">
            <InputField
              control={control}
              errors={errors}
              name="customerName"
              label="Customer Name"
              placeholder="Enter Customer Name"
              required
            />
          </div>

          <div className="mb-3">
            <InputField
              control={control}
              errors={errors}
              name="mobileNumber"
              label="Mobile Number"
              placeholder="Enter Mobile Number"
              required
            />
          </div>

          <div className="mb-3">
            <InputField
              control={control}
              errors={errors}
              name="email"
              type="email"
              label="Email"
              placeholder="Enter Email"
              required
            />
          </div>

          <div className="mb-3">
            <InputField
              control={control}
              errors={errors}
              name="lastleadDate"
              type="date"
              label="Last Lead Date"
              required
            />
          </div>

          <Button 
          className="mt-3 bg-[linear-gradient(to_right,var(--color-primary-1),var(--color-primary-2))]! text-white! hover:scale-105! border-[linear-gradient(to_right,var(--color-primary-1),var(--color-primary-2))]!" 
          type="primary" 
          htmlType="submit" 
          block>
            Add Customer
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default AddCustomer;