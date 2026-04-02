import React, { useState } from "react";
import { Modal, Form, Input, Button } from "antd";
import AddBtn from "../Components/AddBtn"

const AddCustomer = ({onAddEmployee}) => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

   const handleFinish = (values) => {
  onAddEmployee(values);   // 🔥 parent ko data bhej diya
  setOpen(false);
  form.resetFields();
};

  return (
    <div>

      {/* Button */}
      <AddBtn onAdd={showModal} />

      {/* Modal */}
     <Modal
        title="Add Customer"
        open={open}
        onCancel={handleClose}
        footer={null}
        centered
      >
        <Form form={form} layout="vertical" onFinish={handleFinish}>
          
          <Form.Item
            label="Customer Name"
            name="customerName"
            rules={[{ required: true, message: "Enter customer name" }]}
          >
            <Input placeholder="Enter Customer Name" />
          </Form.Item>

          <Form.Item
            label="Mobile Number"
            name="mobileNumber"
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
            name="leadDate"
            rules={[{ required: true, message: "Enter lead date" }]}
          >
            <Input placeholder="Enter Lead Date" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Add Customer
            </Button>
          </Form.Item>

        </Form>
      </Modal>
    </div>
  );
};

export default AddCustomer;