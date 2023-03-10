import { Button,Form,Input,Select,Modal,message, Space,} from 'antd';
import { useState } from 'react';
import { newRequest } from '../utils';


const { Option } = Select; // keep this.

// once connected to server, change to ({onSubmitSuccess}) ; call onSubmitSuccess after newRequest(data) success.

const NewRequestButton = ({}) => {
    const [loading, setLoading] = useState(false);

    const [isModalOpen, setIsModalOpen] = useState(false);


    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFormSubmit= async(data) => {
        setLoading(true);
        try{
            await newRequest(data);
            message.success("Submit new maintenance request successfully!");
            setIsModalOpen(false);
        } catch(error) {
            message.error(error.message);
        } finally {
            setLoading(false)
        }
    };

    return (
        <>
            <Button type="primary" onClick={showModal} size="large" >
                + New Maintenance Requst
            </Button>
            <Modal title="Start a new maintenance request" open={isModalOpen} onCancel={handleCancel} footer={null} destroyOnClose={true}>
                <Form labelCol={{span: 8}} wrapperCol={{span: 16}} 
                    style={{maxWidth: 600}} onFinish={onFormSubmit}
                >
                    <Form.Item name="title" label="Title"
                        rules={[
                            {
                            required: true,
                            message: "Please input your request title!",
                            },]} >
                        <Input disabled={loading} placeholder="Request Title" showCount maxLength={40}/>
                    </Form.Item>
                    <Form.Item name="category" label="Category"
                        rules={[{required: true, message: "Please select a category!"}]}
                    >
                        <Select placeholder="Please select" >
                            <Option value="Internet">Internet</Option>
                            <Option value="Plumbing">Plumbing</Option>
                            <Option value="Electrical">Electrical</Option>
                            <Option value="AC and Heating">AC and Heating</Option>
                            <Option value="Cleaning">Cleaning</Option>
                            <Option value="Other">Other</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="description" label="Description"
                        rules={[{required: true, message: "Please povide a description to help us get more details."}]}
                    >
                        <Input.TextArea style={{height: 150}} showCount maxLength={400}/>
                    </Form.Item>
                    <Form.Item wrapperCol={{offset: 8, span: 16}}>
                        <Space size="large">
                        <Button loading={loading} type="primary" htmlType="submit">
                            Submit
                        </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default NewRequestButton;