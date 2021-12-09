import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css'
import axios from 'axios'

function LoginForm() {

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };

    const onFinish = values => {
        axios.post('http://localhost:8080/user/login', {
            params: {
                account: values.account,
                password: values.password,
                status : "doctor"
            }
        })
            .then(function (response) {
                if (response.data.code === 1) {
                    alert(response.data.data.dispaly_name);
                } else {
                    alert(response.status);
                }
            })
            .catch(function (error) {
                console.log(error.message);
                if(error.response){
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
            });
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className = "LoginForm">
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="account"
                    name="account"
                    rules={[{ required: true, message: 'Please input your account!' }]}
                >
                    <Input style={{ width:300}}/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password style={{ width:300}}/>
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            <div className = "Login_to_home">
                <Link to="/"style={{ 
                    color: 'white', 
                    backgroundColor: '#f1356d',
                    borderRadius: '8px' 
                }}>Home</Link>
            </div>
        </div>
        
    );
}
export default LoginForm;