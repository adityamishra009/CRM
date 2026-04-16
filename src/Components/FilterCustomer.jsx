import React, { useState } from "react";
import { Drawer, Button, message } from "antd";
import { useForm } from "react-hook-form";
import FilterButton from "./Filterbtn";
import InputField from "./fields/InputField";

const FilterCustomer = () => {
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
        title="Filter Customer"
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

export default FilterCustomer;