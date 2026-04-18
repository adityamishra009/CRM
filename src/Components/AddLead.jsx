import React, { useState } from "react";
import { Modal, Button } from "antd";
import { useForm } from "react-hook-form";
import AddBtn from "./AddBtn";
import InputField from "./fields/InputField";

const AddLead = ({ onAddLead }) => {
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
    onAddLead(data);
    setOpen(false);
    reset();
  };

  return (
    <div>
      <AddBtn onAdd={showModal} />

      <Modal
        title="Add Lead"
        open={open}
        onCancel={handleClose}
        footer={null}
        centered
        className="mb-3"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">

            <InputField
              control={control}
              errors={errors}
              name="leadId"
              label="Lead ID"
              placeholder="Enter Lead ID"
              required
            />

            <InputField
              control={control}
              errors={errors}
              name="date"
              label="Date"
              placeholder="Enter Date"
              required
            />

            <InputField
              control={control}
              errors={errors}
              name="name"
              label="Name"
              placeholder="Enter Name"
              required
            />

            <InputField
              control={control}
              errors={errors}
              name="mobileNumber"
              label="Mobile"
              placeholder="Enter Mobile"
              required
            />

            <InputField
              control={control}
              errors={errors}
              name="emailId"
              label="Email"
              placeholder="Enter Email"
              required
            />

            <InputField
              control={control}
              errors={errors}
              name="serviceCategary"
              label="Service"
              placeholder="Enter Service"
              required
            />

            <InputField
              control={control}
              errors={errors}
              name="salesStatus"
              label="Sales Status"
              placeholder="Enter Sales Status"
              required
            />

            <InputField
              control={control}
              errors={errors}
              name="operationStatus"
              label="Operation Status"
              placeholder="Enter Operation Status"
              required
            />

            <InputField
              control={control}
              errors={errors}
              name="totalPayments"
              label="Payments"
              placeholder="Enter Payments"
              required
            />


          <div className="col-span-2">
            <Button className="mt-3 bg-[linear-gradient(to_right,var(--color-primary-1),var(--color-primary-2))]! text-white! hover:scale-105! border-[linear-gradient(to_right,var(--color-primary-1),var(--color-primary-2))]!" 
            type="primary" htmlType="submit" block>
              Add Lead
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddLead;