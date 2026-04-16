import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { useForm } from "react-hook-form";
import FilterButton from "./Filterbtn";
import InputField from "./fields/InputField";

const FilterLead = () => {
  const [open, setOpen] = useState(false);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit = (data) => {
    console.log("Filter Data:", data);
    setOpen(false);
  };

  return (
    <div>
      <FilterButton onClick={handleOpen} />

      <Drawer
        title="Filter Lead"
        placement="right"
        open={open}
        onClose={handleClose}
        size={350}
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

          <div className="flex gap-2">
            <Button 
            type="primary" 
            htmlType="submit" 
            block 
            onClick={() => message.info("Applied...")}
            className="bg-[linear-gradient(to_right,var(--color-primary-1),var(--color-primary-2))]! text-white! hover:scale-105! border-[linear-gradient(to_right,var(--color-primary-1),var(--color-primary-2))]!">
              Apply
            </Button>

            <Button 
            onClick={() => reset()} 
            block
            className="hover:scale-105!"
            >
              Reset
            </Button>
          </div>

        </form>
      </Drawer>
    </div>
  );
};

export default FilterLead;