import { useState } from "react";
import { signup } from "../utils";
import { Button, Modal, Form, Input,message, Space } from "antd";
import React from 'react';

const SignupButton = () => {

    const [loading, setLoading] = useState(false);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSignupOnClick = () =>{
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFormSubmit = async(data) =>{
        setLoading(true);
        try {
            await signup(data);
            message.success("Sign up successfully!");
            setIsModalOpen(false);
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

            <Modal title="Sign Up" onCancel={handleCancel} footer={null} open={isModalOpen} destroyOnClose={true}>
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
                    
                    <Form.Item wrapperCol={{offset: 7, span: 14}}>
                        <Space size="large">
                            <Button loading={loading} type="primary" htmlType="submit" >
                                Sign Up
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Modal>
        
        </>
    );
};
export default SignupButton;