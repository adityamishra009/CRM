import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { useForm } from "react-hook-form";
import FilterButton from "./Filterbtn";
import InputField from "./fields/InputField";


const FilterTaxInvoice = () => {
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
        title="Filter Tax Invoice"
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
              name="Invoice No"
              label="Invoice No"
              placeholder="Enter Invoice No"
              required
            />
          </div>

          <div className="mb-3">
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
              name="GST No"
              label="GST No"
              placeholder="Enter GST No"
              required
            />
          </div>

          <div className="mb-3">
            <InputField
              control={control}
              errors={errors}
              name="date"
              type="date"
              label="Date"
              required
            />
          </div>

          <div className="mb-3">
            <InputField
              control={control}
              errors={errors}
              name="service"
              label="Service"
              placeholder="Enter Service"
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
export default FilterTaxInvoice;