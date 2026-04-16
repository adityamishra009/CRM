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
      >
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="mb-3">
            <InputField
              control={control}
              errors={errors}
              name="leadId"
              label="Lead ID"
              placeholder="Enter Lead ID"
              required
            />
          </div>

          <div className="mb-3">
            <InputField
              control={control}
              errors={errors}
              name="date"
              label="Date"
              placeholder="Enter Date"
              required
            />
          </div>

          <div className="mb-3 mt-5">
            <InputField
              control={control}
              errors={errors}
              name="name"
              label="Name"
              placeholder="Enter Name"
              required
            />
          </div>

          <div className="mb-3">
            <InputField
              control={control}
              errors={errors}
              name="mobileNumber"
              label="Mobile"
              placeholder="Enter Mobile"
              required
            />
          </div>

          <div className="mb-3">
            <InputField
              control={control}
              errors={errors}
              name="emailId"
              label="Email"
              placeholder="Enter Email"
              required
            />
          </div>

          <div className="mb-3">
            <InputField
              control={control}
              errors={errors}
              name="serviceCategary"
              label="Service"
              placeholder="Enter Service"
              required
            />
          </div>

          <div className="mb-3">
            <InputField
              control={control}
              errors={errors}
              name="salesStatus"
              label="Sales Status"
              placeholder="Enter Sales Status"
              required
            />
          </div>  

          <div className="mb-3">
            <InputField
              control={control}
              errors={errors}
              name="operationStatus"
              label="Operation Status"
              placeholder="Enter Operation Status"
              required
            />
          </div>

          <div className="mb-3">
            <InputField
              control={control}
              errors={errors}
              name="totalPayments"
              label="Payments"
              placeholder="Enter Payments"
              required
            />
          </div>

          <Button className="mt-3 bg-[linear-gradient(to_right,var(--color-primary-1),var(--color-primary-2))]! text-white! hover:scale-105! border-[linear-gradient(to_right,var(--color-primary-1),var(--color-primary-2))]!" 
          type="primary" htmlType="submit" block>
            Add Lead
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default AddLead;