import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Doctor from './App/Doctor.js';
import Login from "./Login/Login";
import Patient from './App/Patient.js';

ReactDOM.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
