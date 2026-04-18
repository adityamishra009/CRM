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
    <Modal 
     title="Edit Lead" 
     open={open} 
     onCancel={onClose} 
     footer={null}
     centered
     className="mb-3"
    >
      <form onSubmit={handleSubmit(onUpdate)} className="grid grid-cols-2 gap-4">
        
        <InputField 
          control={control} 
          errors={errors} 
          name="leadId" 
          label="Lead ID" 
          required
        />

        <InputField 
          control={control} 
          errors={errors} 
          name="date" 
          type="date" 
          label="Date" 
          required 
        />

        <InputField 
          control={control} 
          errors={errors} 
          name="name" 
          label="Name" 
          required
        />

        <InputField 
          control={control} 
          errors={errors} 
          name="mobileNumber" 
          label="Mobile" 
          required
        />

        <InputField 
          control={control} 
          errors={errors} 
          name="emailId" 
          label="Email" 
          required 
        />

        <InputField 
          control={control} 
          errors={errors} 
          name="serviceCategary" 
          label="Service" 
          required 
        />

        <InputField 
          control={control} 
          errors={errors} 
          name="salesStatus" 
          label="Sales Status" 
          required 
        />

        <InputField 
          control={control} 
          errors={errors} 
          name="operationStatus" 
          label="Operation Status" 
          required 
        />

        <InputField 
          control={control} 
          errors={errors} 
          name="totalPayments" 
          label="Total Payments" 
          required 
        />

        <div className="flex gap-2 col-span-2">
          <Button 
           type="primary" 
           htmlType="submit" 
           block
           className="bg-[linear-gradient(to_right,var(--color-primary-1),var(--color-primary-2))]! text-white! hover:scale-105! border-[linear-gradient(to_right,var(--color-primary-1),var(--color-primary-2))]!"
          >
            Update
          </Button>

          <Button 
           danger 
           onClick={onDelete} 
           block
           className="hover:scale-105!"
          >
            Delete
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default EditLeadModal;