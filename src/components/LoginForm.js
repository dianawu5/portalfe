import { useState } from "react";
import { Form, Button, Input, message } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { login } from "../utils";
import SignupButton from './SignupButton';

const LoginForm = ({onLoginSuccess}) => {
    const [loading, setLoading] = useState(false);

    const handleFormSubmit = async(data) => {
        setLoading(true);
        try{
            await login(data);
            onLoginSuccess();
        } catch (error) {
            message.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return(
        <div style={{ width: 500, margin: "20px auto" }}>
            <Form onFinish={handleFormSubmit}>
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input disabled={loading} prefix={<UserOutlined />} placeholder="Username" />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        }, ]} >
                    <Input.Password disabled={loading} placeholder="Password"/>
                </Form.Item>

                <Form.Item>
                    <Button loading={loading} type="primary" htmlType="submit" style={{ width: "100%" , margin:"20px auto"}}>
                        Submit
                    </Button>
                    Or <SignupButton />
                </Form.Item>
            </Form>
        </div>
    );
};
export default LoginForm;