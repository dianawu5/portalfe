import { useState } from "react";
import { signup } from "../utils";
import { Button, Modal, Form, Input,message } from "antd";

const SignupButton = () => {

    const [loading, setLoading] = useState(false);

    const [modalVisible, setModalVisible] = useState(false);

    const handleSignupOnClick = () =>{
        setModalVisible(true);
    };

    const handleCancel = () => {
        setModalVisible(false);
    };

    const onFormSubmit = async(data) =>{
        setLoading(true);
        try {
            await signup(data);
            message.success("Sign up successfully!");
            setModalVisible(false);
        } catch (error) {
            message.error(error.message);
        } finally {
            setLoading(false);
        };
    };

    return (
        <>
            <Button type="link" style={{ padding: 0 }} onClick={handleSignupOnClick} >
                Sign Up
            </Button>

            <Modal title="Sign Up" onCancel={handleCancel} footer={null} visible={modalVisible}>
                <Form 
                    labelCol={{
                        span: 7,
                    }}
                    
                    wrapperCol={{
                        span: 14,
                    }}
                    layout="horizontal" 
                    onFinish={onFormSubmit}
                >
                    <Form.Item 
                        label="First Name" 
                        name="firstname"
                        rules={[
                            {
                              required: true,
                              message: "Please input your first name!",
                            },]} >
                        <Input disabled={loading} placeholder="First Name" />
                    </Form.Item>
                    <Form.Item 
                        label="Last Name" 
                        name="lastname"
                        rules={[
                            {
                              required: true,
                              message: "Please input your last name!",
                            },]} >
                        <Input disabled={loading} placeholder="Last Name" />
                    </Form.Item>
                    <Form.Item 
                        label="Email" 
                        name="email"
                        rules={[
                            {
                              required: true,
                              message: "Please input your email address!",
                            },]} >
                        <Input disabled={loading} placeholder="Email" />
                    </Form.Item>
                    <Form.Item 
                        label="Phone#" 
                        name="phone"
                        rules={[
                            {
                              required: true,
                              message: "Please input your phone number!",
                            },]} >
                        <Input disabled={loading} placeholder="Phone#" />
                    </Form.Item> 
                    <Form.Item 
                        label="Apartment#" 
                        name="apartment"
                        rules={[
                            {
                              required: true,
                              message: "Please input your apartment number!",
                            },]} >
                        <Input disabled={loading} placeholder="Apartment#" />
                    </Form.Item> 
                    <Form.Item 
                        label="Username" 
                        name="username"
                        rules={[
                            {
                              required: true,
                              message: "Please input your username!",
                            },]} >
                        <Input disabled={loading} placeholder="Username" />
                    </Form.Item> 
                    <Form.Item 
                        label="Password" 
                        name="password"
                        rules={[
                            {
                              required: true,
                              message: "Please input your phone number!",
                            },]} >
                        <Input.Password disabled={loading} placeholder="Password"/>
                    </Form.Item> 
                    
                    <Form.Item>
                        <Button loading={loading} type="primary" htmlType="submit" >
                            Sign Up
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        
        </>
    );
};
export default SignupButton;