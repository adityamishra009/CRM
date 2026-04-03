import React, { useState } from "react";
import { Drawer, Form, Input, Button } from "antd";
import FilterButton from "../Components/FilterBtn"

const FilterEmployee = () => {
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
        title="Filter Employee"
        placement="right"   
        open={open}
        onClose={handleClose}
        size={350}      
      >
        <Form form={form} layout="vertical" onFinish={handleFinish}>
                  
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Enter name" }]}
          >
            <Input placeholder="Enter Name" />
          </Form.Item>
        
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Enter email" }]}
          >
            <Input placeholder="Enter Email" />
          </Form.Item>

          <Form.Item
            label="Mobile"
            name="mobile"
            rules={[{ required: true, message: "Enter mobile" }]}
          >
            <Input placeholder="Enter Mobile" />
          </Form.Item>
        
          <Form.Item
            label="Profile"
            name="profile"
            rules={[{ required: true, message: "Enter profile" }]}
          >
            <Input placeholder="Enter Profile" />
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

export default FilterEmployee;