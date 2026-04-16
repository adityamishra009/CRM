import React from "react";
import { Modal, Button } from "antd";
import { useForm } from "react-hook-form";
import InputField from "./fields/InputField";

const EditCustomerModal = ({
  open,
  onClose,
  selectedRow,
  onUpdate,
  onDelete,
}) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  // form fill when row changes
  React.useEffect(() => {
    if (selectedRow) {
      reset(selectedRow);
    }
  }, [selectedRow, reset]);

  return (
    <Modal title="Edit Customer" open={open} onCancel={onClose} footer={null}>
      <form onSubmit={handleSubmit(onUpdate)}>
        
        <div className="mb-3">
          <InputField
            control={control}
            errors={errors}
            name="lpiId"
            label="LPI ID"
            required
          />
        </div>
        <div className="mb-3">
          <InputField
            control={control}
            errors={errors}
            name="customerName"
            label="Customer Name"
            required
          />
        </div>

        <div className="mb-3">
          <InputField
            control={control}
            errors={errors}
            name="mobileNumber"
            label="Mobile"
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

        <div className="mt-3">
          <Button 
          type="primary" 
          htmlType="submit" 
          block
          className="mt-3 bg-[linear-gradient(to_right,var(--color-primary-1),var(--color-primary-2))]! text-white! hover:scale-105! border-[linear-gradient(to_right,var(--color-primary-1),var(--color-primary-2))]!"
          >
            Update
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default EditCustomerModal;