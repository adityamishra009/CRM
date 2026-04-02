import React, { useState } from "react";
import { Drawer, Form, Input, Button } from "antd";
import FilterButton from "../Components/FilterBtn"

const FilterCustomer = () => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFinish = (values) => {
    console.log("Filter Data:", values);
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
        <Form form={form} layout="vertical" onFinish={handleFinish}>
                  
          <Form.Item
            label="Customer Name"
            name="customer name"
            rules={[{ required: true, message: "Enter Customer Name" }]}
          >
            <Input placeholder="Enter Customer Name" />
          </Form.Item>

          <Form.Item
            label="Mobile Number"
            name="mobile number"
            rules={[{ required: true, message: "Enter mobile number" }]}
          >
            <Input placeholder="Enter Mobile Number" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Enter email" }]}
          >
            <Input placeholder="Enter Email" />
          </Form.Item>
        
          <Form.Item
            label="Lead Date"
            name="lead date"
            rules={[{ required: true, message: "Enter Lead Date" }]}
          >
            <Input placeholder="Enter Lead Date" />
          </Form.Item>
        
          <div className="flex gap-2">
            <Button type="primary" htmlType="submit" block>
              Apply
            </Button>
            <Button onClick={() => form.resetFields()} block>
              Reset
            </Button>
          </div>
        
        </Form>
      </Drawer>
    </div>
  );
};

export default FilterCustomer;