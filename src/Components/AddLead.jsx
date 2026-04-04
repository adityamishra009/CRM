import React, { useState } from "react";
import { Modal, Button } from "antd";
import { useForm } from "react-hook-form";
import AddBtn from "./AddBtn"
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

          <div className="mb-3 mt-5">
          <InputField
            control={control}
            errors={errors}
            name="businessName"
            label="Business Name"
            placeholder="Enter Business Name"
            required
          />
          </div>

          <div className="mb-3">
          <InputField
            control={control}
            errors={errors}
            name="serviceCategory"
            label="Service Category"
            placeholder="Enter Service Category"
            required
          />
          </div>
          <div className="mb-3">
          <InputField
            control={control}
            errors={errors}
            name="address"
            label="Address"
            placeholder="Enter Address"
            required
          />
          </div>

          <div className="mb-3">
          <InputField
            control={control}
            errors={errors}
            name="typeOfBusinee"
            label="Type of Business"
            placeholder="Enter Type of Business"
            required
          />
          </div>

          <div className="mb-3">
          <InputField
            control={control}
            errors={errors}
            name="natureOfBusiness"
            label="Nature of Business"
            placeholder="Enter Nature of Business"
            required
          />
          </div>

          <div className="mb-3">
          <InputField
            control={control}
            errors={errors}
            name="validity"
            label="Validity"
            placeholder="Enter Validity"
            required
          />
          </div>

          <Button className="mt-3" type="primary" htmlType="submit" block>
            Add Lead
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default AddLead;