import React, { useState } from "react";
import { Modal, Button } from "antd";
import { useForm } from "react-hook-form";
import AddBtn from "./AddBtn";
import InputField from "./fields/InputField";
import { Controller } from "react-hook-form";

const AddEmployee = ({ onAddEmployee }) => {
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
    onAddEmployee(data);
    setOpen(false);
    reset();
  };

  return (
    <div>
      {/* Button */}
      <AddBtn onAdd={showModal} />

      {/* Modal */}
      <Modal
        title="Add Employee"
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
              name="mobile"
              label="Mobile"
              placeholder="Enter Mobile"
              required
            />
          </div>

          <div className="mb-3">
            <InputField
              control={control}
              errors={errors}
              name="profile"
              type="option"
              label="Profile"
              placeholder="Select Status"
              options={[
                { label: "Active", value: "Active" },
                { label: "Inactive", value: "Inactive" },
              ]}
              required
            />
          </div>

          <Button className="mt-3 bg-[linear-gradient(to_right,var(--color-primary-1),var(--color-primary-2))]! text-white! hover:scale-105! border-[linear-gradient(to_right,var(--color-primary-1),var(--color-primary-2))]!" 
          type="primary" htmlType="submit" block>
            Add Employee
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default AddEmployee;