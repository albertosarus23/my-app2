import LoginForm from "./LoginForm"
import React from 'react';
import {withRouter} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { render } from "@testing-library/react";
class Login extends React.Component{
    
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