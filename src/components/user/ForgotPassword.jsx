import React, { useState } from 'react';
import axios from 'axios';

import {Animated} from "react-animated-css";
import {CSSTransition} from 'react-transition-group';

import FloatingInput from './SignUp/FloatingInput';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import "./Login.css"
import './ChangePassword.css'
/**
 * Component for requesting password change.
 *
 * @component
 * @example
 * return (
 *   <ForgotPassword />
 * )
 */
function ForgotPassword() {
    //if not used there will be a warinng: findDOMNode
    const nodeRef = React.useRef(null);

    const [accessToken] = useState(localStorage.getItem("accessToken"));

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('true');
    //State of Error Animation
    const [errorAnimate, setErrorAnimate] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);
    //
    const [successfullSend, setsuccessfullSend] = useState(false);
    
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
    
/**
 * Sends entered email to BE  
 * @return  {void}        
 */
    function handleChangePassword(event) {
        event.preventDefault();
        if (!emailError) {
            const data = {
                email:email,
            }
            console.log('data sent:');
            console.log(data);
            axios.defaults.baseURL = "https://qasaqees.tech/api";
            axios.post('/register/forgetPassword', data)
                .then((response) => {
                    console.log(response);
                    setsuccessfullSend(true);
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
    /**
     * go back to enter email again at previos panal   
     * @return  {void}        
     */
    function handleArrowBack(event) {
        event.preventDefault();
        setsuccessfullSend(false);
    }
    return (
        <div id="change-password-p" className = "bg-image bg ">
            <div className="container-fluid h-100">
                <div className="row h-100">
                    <div className="col-12 d-flex align-items-center">
                        <div id="row-ch-pass" className="border rounded bg-white px-3 pe-4 py-4 m-auto position-relative">
                            {(successfullSend)&&(<div className="position-absolute">
                                <a onClick={handleArrowBack} className="border-0 rounded-circle p-2" id="back-btn">
                                    <ArrowBackIcon id="back-btn-icon" />
                                </a>
                            </div>)}
                            <div className="w-100 d-flex justify-content-center mt-2 mb-3">
                                <i id="lock-icon" className="fas fa-lock fa-1x"></i>
                            </div>
                            {(!successfullSend) && (<div><h5 className="text-center">Change your Flickr password</h5>
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
                            </div>)}
                            {(successfullSend) && (<div><h5 className="text-center">Check your inbox</h5>
                            <p class="text-center f-size-3">We sent a verification link to <strong> {email}</strong>. Please check your email to reset your password.</p>
                            <input id="submit-change-password" type="submit" className="btn btn-primary fw-bold mt-2" value="Resend email" onClick={handleChangePassword} />
                            <div className="w-100 d-flex justify-content-center mt-3">
                                <a href="/help" className="text-center fs-7">Can't access your email?</a>
                            </div>
                            </div>)}
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
}

export default ForgotPassword;