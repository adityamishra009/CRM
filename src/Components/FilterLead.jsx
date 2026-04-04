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

          <div className="flex gap-2">
            <Button type="primary" htmlType="submit" block>
              Apply
            </Button>

            <Button onClick={() => reset()} block>
              Reset
            </Button>
          </div>

        </form>
      </Drawer>
    </div>
  );
};

export default FilterLead;