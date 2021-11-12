import './Login.css';
import Logo from '../template/Logo';
import React from 'react'
import Card from './template/Card';





const Login = ()  => {return ( 
<div className="login_area app">
<div className="container">
    <div class="d-flex justify-content-center h-100">
        <Logo/>
        <Card/>
    </div>
</div>
</div>)}


export default Login;