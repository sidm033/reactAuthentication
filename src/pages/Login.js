import React, { useContext, useEffect, useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import './Login.css';
import AuthContext from '../store/Auth-Contex';

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [isEmailValid, setEmailValid] = useState(false);
    const [password, setPassword] = useState('');
    const [isPasswordValid, setPasswordValid] = useState(false);
    const [isFormValid, setFormValid] = useState(false);
    const [show, setShow] = useState(false);
    
    const AuthCtx = useContext(AuthContext);

    console.log(AuthCtx)

    useEffect(() => {
        console.log(password.trim().length > 6 && email.includes('@'));
        setFormValid(password.trim().length > 6 && email.includes('@'))
    },[password, email]);

    const userEmail = (event) => {
        setEmail(event.target.value);
        // setFormValid(event.target.value.trim().length > 6 && email.includes('@'))
    };

    const userPassword = (event) => {
        setPassword(event.target.value);
        // setFormValid(password.trim().length > 6)
    }

    const validateEmail = () => {
        setEmailValid(email.includes('@'));
    };

    const validatePassword = () => {
        setPasswordValid(password.trim().length>6);
    };

    const submitHandler = (event) => {

        event.preventDefault();

        if (isFormValid) {
            console.log(email, password);
            AuthCtx.onLogin(email, password);
        } else {
            alert('please enter valid email and password');
        }

    };

    return(
        <div class="login-content" >
            <form onSubmit={submitHandler}>
                <div class="main-content">

                    <div class="login-email-content" >
                        <div class="login-title-email">
                            <p> E-Mail </p>
                        </div>
                        <div class="login-input-email" >
                            <input type='email' onChange={userEmail} value={email} onBlur={validateEmail}
                            class="input-box" name='userEmail' placeholder='Enter your email' maxLength={20}/>
                        </div>
                    </div>
                    <div class="login-pass-content" >
                    </div>
                        <div class="login-title-pass" >
                            Password
                        </div>
                        <div class="login-input-pass" >
                            <input type='password' onChange={userPassword} value={password} onBlur={validatePassword}
                            class="input-box" name='userPassword' placeholder='Enter your password' maxLength={10} />
                        </div>
                </div>
                <div className={`login-submit-btn`}  >
                    <button type='submit' className={`login-btn ${isFormValid? 'active-btn' : '' }`}> Login </button>
                </div>
            </form>
        </div>
    )
}

export default Login;