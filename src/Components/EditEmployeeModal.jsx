import React, { useEffect } from "react";
import { Modal, Button } from "antd";
import { useForm } from "react-hook-form";
import InputField from "./fields/InputField";

const EditEmployeeModal = ({ open, onClose, selectedRow, onUpdate, onDelete }) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  // ✅ Set default values
  useEffect(() => {
    if (selectedRow) {
      reset(selectedRow);
    }
  }, [selectedRow, reset]);

  return (
    <Modal title="Edit Employee" open={open} onCancel={onClose} footer={null}>
      <form onSubmit={handleSubmit(onUpdate)}>

        <div className="mb-3">
          <InputField control={control} errors={errors} name="name" label="Name" required />
        </div>

        <div className="mb-3">
          <InputField control={control} errors={errors} name="email" label="Email" required />
        </div>

        <div className="mb-3">
          <InputField control={control} errors={errors} name="mobile" label="Mobile" required />
        </div>

        <div className="mb-3">
          <InputField control={control} errors={errors} name="profile" label="Profile" required />
        </div>

        <div className="mt-3">
          <Button type="primary" htmlType="submit" block>
            Update
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default EditEmployeeModal;