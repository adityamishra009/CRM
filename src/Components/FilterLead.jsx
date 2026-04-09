import React, { useState } from "react";
import { Drawer } from "antd";
import { useForm } from "react-hook-form";
import FilterButton from "../Components/FilterBtn";
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
              name="teamMembers"
              label="Team Members"
              placeholder="Enter Team Members"
              required
            />
          </div>

          <div className="mb-3">
            <InputField
              control={control}
              errors={errors}
              name="leadId"
              label="Lead Id"
              placeholder="Enter Lead Id"
              required
            />
          </div>

          <div className="mb-3">
            <InputField
              control={control}
              errors={errors}
              name="clientMobileNumber"
              label="Client Mobile Number"
              placeholder="Enter Client Mobile Number"
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
              name="salesStatus2"
              label="Sales Status 2"
              placeholder="Enter Sales Status 2"
              required
            />
          </div>

          {/* ✅ Updated Buttons */}
          <div className="flex gap-[6px] mt-4">
            
            <button
              type="submit"
              className="flex-1 flex items-center justify-center gap-[6px]
                         px-[14px] py-[8px]
                         rounded-md
                         bg-[linear-gradient(to_right,var(--color-primary-1),var(--color-primary-2))]
                         text-white
                         cursor-pointer
                         transition-all duration-200
                         hover:brightness-90"
            >
              Apply
            </button>

            <button
              type="button"
              onClick={() => reset()}
              className="flex-1 flex items-center justify-center gap-[6px]
                         px-[14px] py-[8px]
                         rounded-md
                         bg-[linear-gradient(to_right,var(--color-primary-1),var(--color-primary-2))]
                         text-white
                         cursor-pointer
                         transition-all duration-200
                         hover:brightness-90"
            >
              Reset
            </button>

          </div>

        </form>
      </Drawer>
    </div>
  );
};

export default FilterLead;