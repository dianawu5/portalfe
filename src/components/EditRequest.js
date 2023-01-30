import { Button,Form,Input,Select,Modal,message, Space,} from "antd";
import FormItem from "antd/es/form/FormItem";
import { Option } from "antd/lib/mentions";
import { useState } from "react";
import { updateRequest } from "../utils";



// once connected to server, change to ({info, onEditSuccess}) ; call onEditSuccess after updateRequest(data) success.
const EditRequest = ({info}) => {
    const [loading, setLoading] = useState(false);
    const[isModalOpen, setIsModalOpen]=useState(false);
    const defaultData = info;
    const openModal = () => {
        setIsModalOpen(true);
    };
    const handleModalCancel = () => {
        setIsModalOpen(false);
    };

    const onFormSubmit = async(data) =>{
        setLoading(false);
        try {
            await updateRequest(data);
            message.success("Request is updated successfully!");
//          onEditSuccess();
            setIsModalOpen(false);
        } catch (error) {
            message.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return(
        <>
        <a type="link" onClick={openModal}>
            Edit
        </a>
        <Modal title="Edit Your Request" open={isModalOpen} onCancel={handleModalCancel} destroyOnClose={true} footer={null}>
            <Form labelCol={{span: 6}} wrapperCol={{span: 18}} 
                style={{maxWidth: 600}} onFinish={onFormSubmit}
                initialValues={defaultData} size="middle"
            >
                <FormItem name="requestId" label="Request#">
                    <text style={{padding: "0px"}}>{defaultData.requestId}</text>
                </FormItem>
                <FormItem name="date" label="Submit Date">
                    <text style={{padding: "0px"}}>{defaultData.date}</text>
                </FormItem>
                <FormItem name="status" label="Status">
                    <text style={{padding: "0px"}}>{defaultData.status}</text>
                </FormItem>
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
                <Form.Item wrapperCol={{offset: 10, span: 16}}>
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
export default EditRequest;