import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css'
import axios from 'axios'
import qs from "qs";
import {Link} from "react-router-dom";

function LoginForm() {

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };

    var status = "login";

    const onFinish = values => {
        axios.post('http://localhost:8080/user/login',
            qs.stringify({
                account: values.account,
                password: values.password,
                status : "doctor"
            })
        )
            .then(function (response) {
                console.log(response);
                status = response.data["success"];
                if(status == "login status: doctor"){
                    console.log("hello");
                }

                if (response.data.code === 1) {
                    alert(response.data.data.dispaly_name);
                } else {
                    if(status != null){
                        alert(status);
                        return true;
                    }
                    else{
                        alert(response.data["failure"]);
                        return false;
                    }
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
                    {/* <Link to="/">*/}
                    {/*    <Button type="primary" htmlType="submit">*/}
                    {/*        Submit*/}
                    {/*    </Button>*/}
                    {/*</Link>*/}
                </Form.Item>
            </Form>
        </div>
        
    );
}
export default LoginForm;