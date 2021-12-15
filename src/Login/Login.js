import LoginForm from "./LoginForm"
import React from 'react';
import {withRouter} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { render } from "@testing-library/react";
import Doctor from "../App/Doctor";
class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          loginState:""        
        };
      }
    
    Checkpassword(){
        axios.post('http://localhost:8080/user/login', {
            params: {
                account: values.account,
                password: values.password,
                status : "doctor"
            }
        })
            .then(function (response) {
                this.setState(response.data["success"]);
                if (this.state =="login status: doctor"){
                    <Doctor />
                }
                if (response.data.code === 1) {
                    alert(response.data.data.dispaly_name);
                } else {
                    alert(response.status);
                }
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error.message);
                if(error.response){
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
            });
    }
    render(){
        return (
        <div className = "Login">
            <LoginForm/>
            <div className ="testbutton">
            
            </div>
        </div>
        );
    }
    
}
export default Login;