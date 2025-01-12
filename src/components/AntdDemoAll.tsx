import React, { useState } from 'react';
import { Button, Form, Input, Table, DatePicker, Space, Select, Modal, message } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { Dayjs } from 'dayjs';

const { Option } = Select;

const AntdDemoAll: React.FC = () => {
  // สำหรับ Table
  const [dataSource, setDataSource] = useState([
    { key: '1', name: 'John Brown', age: 32, address: 'New York' },
    { key: '2', name: 'Jim Green', age: 42, address: 'London' },
  ]);

  const columns: ColumnsType<{ key: string; name: string; age: number; address: string }> = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Age', dataIndex: 'age', key: 'age' },
    { title: 'Address', dataIndex: 'address', key: 'address' },
  ];

  // สำหรับ Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const handleOk = () => {
    setIsModalOpen(false);
    message.success('Modal confirmed!');
  };
  const handleCancel = () => setIsModalOpen(false);

  // สำหรับ Form
  const onFinish = (values: any) => {
    console.log('Form Submitted:', values);
    message.success('Form Submitted Successfully!');
  };

  const onDateChange = (date: Dayjs | null, dateString: string) => {
    console.log('Selected Date:', dateString);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Ant Design All Components Demo</h2>

      {/* Buttons */}
      <Space style={{ marginBottom: 20 }}>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button danger>Danger Button</Button>
        <Button type="link">Link Button</Button>
      </Space>

      {/* Form */}
      <Form
        layout="vertical"
        onFinish={onFinish}
        style={{ maxWidth: 400, marginBottom: 20 }}
      >
        <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
          <Input placeholder="Enter your name" />
        </Form.Item>
        <Form.Item label="Age" name="age" rules={[{ required: true, message: 'Please input your age!' }]}>
          <Input placeholder="Enter your age" type="number" />
        </Form.Item>
        {/* <Form.Item label="Date of Birth" name="dob">
          <DatePicker onChange={onDateChange} style={{ width: '100%' }} />
        </Form.Item> */}
        <Form.Item label="Gender" name="gender">
          <Select placeholder="Select your gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

      {/* Table */}
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ pageSize: 5 }}
        style={{ marginBottom: 20 }}
      />

      {/* Modal */}
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Demo Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>More contents...</p>
      </Modal>
    </div>
  );
};

export default AntdDemoAll;
