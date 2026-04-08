import React from "react";
import { Modal, Button } from "antd";
import { useForm } from "react-hook-form";
import InputField from "./fields/InputField";

const EditLeadModal = ({ open, onClose, selectedRow, onUpdate, onDelete }) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();


  React.useEffect(() => {
    if (selectedRow) {
      reset(selectedRow);
    }
  }, [selectedRow, reset]);

  return (
    <Modal title="Edit Lead" open={open} onCancel={onClose} footer={null}>
      <form onSubmit={handleSubmit(onUpdate)}>
        
        <div className="mb-3">
          <InputField control={control} errors={errors} name="leadId" label="Lead ID" required />
        </div>

        <div className="mb-3">
          <InputField control={control} errors={errors} name="date" label="Date" required />
        </div>

        <div className="mb-3">
          <InputField control={control} errors={errors} name="name" label="Name" required />
        </div>

        <div className="mb-3">
          <InputField control={control} errors={errors} name="mobileNumber" label="Mobile" required />
        </div>

        <div className="mb-3">
          <InputField control={control} errors={errors} name="emailId" label="Email" required />
        </div>

        <div className="mb-3">
          <InputField control={control} errors={errors} name="serviceCategary" label="Service" required />
        </div>

        <div className="mb-3">
          <InputField control={control} errors={errors} name="salesStatus" label="Sales Status" required />
        </div>

        <div className="mb-3">
          <InputField control={control} errors={errors} name="operationStatus" label="Operation Status" required />
        </div>

        <div className="mb-3">
          <InputField control={control} errors={errors} name="totalPayments" label="Total Payments" required />
        </div>

        <div className="flex gap-2 mt-3">
          <Button type="primary" htmlType="submit" block>
            Update
          </Button>

          <Button danger onClick={onDelete} block>
            Delete
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default EditLeadModal;