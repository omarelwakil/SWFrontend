import React, { useState } from 'react';
import axios from 'axios';

import {Animated} from "react-animated-css";
import {CSSTransition} from 'react-transition-group';

import FloatingInput from './FloatingInput';

import "./Login.css"
import './ChangePassword.css'

function ForgotPassword() {
    //if not used there will be a warinng: findDOMNode
    const nodeRef = React.useRef(null);

    const [accessToken] = useState(localStorage.getItem("accessToken"));

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('true');
    //State of Error Animation
    const [errorAnimate, setErrorAnimate] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);
    
    //remove later
    const [password, setPassword] = useState('');
    const [passwordError, setpassWordError] = useState('true');
    const [newPassword, setNewPassword] = useState('');
    const [newError, setNewWordError] = useState('true');
   /*
    if (accessToken === null) {
        localStorage.clear();
        window.location.href = "/login";
    }*/
    

    function handleChangePassword(event) {
        event.preventDefault();
        if (!emailError) {
            const data = {
                email:email,
            }
            axios.defaults.baseURL = "https://qasaqees.tech/api";
            axios.post('/register/forgetPassword', data)
                .then((response) => {
                    console.log(response);
                    window.location.href = "/login";
                })
                .catch((error) => {
                    if (error.response.status === 404) {
                        console.log(error.response.data.message);
                        setErrorMsg((<div class="error-div bg-red-light pa-2 b-rad-1 mb-5">
                        <p class="text-center ma-0 f-size-3 c-black"> User Not Found </p>
                   </div>));
                        setErrorAnimate(true);
                        setTimeout(() => {setErrorAnimate(false);}, 5000);
                        setTimeout(() => {setErrorMsg(null);}, 5500);
                    }
                });
        }
    }
    return (
        <div id="change-password-p" className = "bg-image bg ">
            <div className="container-fluid h-100">
                <div className="row h-100">
                    <div className="col-12 d-flex align-items-center">
                        <div id="row-ch-pass" className="border rounded bg-white px-3 pe-4 py-4 m-auto position-relative">
                            <div className="w-100 d-flex justify-content-center mt-2 mb-3">
                                <i id="lock-icon" className="fas fa-lock fa-1x"></i>
                            </div>
                            <h5 className="text-center">Change your Flickr password</h5>
                            <p class="text-center f-size-3">Please enter your email address below and we'll send you instructions on how to reset your password.</p>
                            <CSSTransition in = {errorAnimate} enter = {errorAnimate} timeout = {1100} unmountOnExit = {errorAnimate} classNames = "slide" nodeRef = {nodeRef}>
                                <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={errorAnimate} animationOutDuration= {1500} >
                                    <div ref = {nodeRef}>
                                    {errorMsg}
                                    </div>
                                </Animated>
                            </CSSTransition>
                            <FloatingInput type = "email"
                            name = "Email address"
                            value = { email => setEmail(email) }
                            error = { emailError => setEmailError(emailError) }
                            /> 
                            <input id="submit-change-password" type="submit" className="btn btn-primary fw-bold mt-2" value="Send email" onClick={handleChangePassword} />
                            <div className="w-100 d-flex justify-content-center mt-3">
                                <a href="/help" className="text-center fs-7">Can't access your email?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
}

export default ForgotPassword;