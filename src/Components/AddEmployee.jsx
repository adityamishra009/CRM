import React, { useState } from "react";
import { Modal, Form, Input, Button } from "antd";
import AddBtn from "./AddBtn"

const AddEmployee = ({onAddEmployee}) => {
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
        title="Add Employee"
        open={open}
        onCancel={handleClose}
        footer={null}
        centered
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

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Add Employee
            </Button>
          </Form.Item>

        </Form>
      </Modal>
    </div>
  );
};

export default AddEmployee;