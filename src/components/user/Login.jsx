import React, { useState } from 'react';
import FloatingInput from './FloatingInput';
import FloatingInputPassoword from './FloatingInputPassword';
import axios from 'axios';
import FacebookLogin from 'react-facebook-login';


import "./Login.css"

function Login() {
    const [accessToken] = useState(localStorage.getItem("accessToken"));
    //State of each text box and its error
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('true');
    const [password, setPassword] = useState('');
    const [passwordError, setpassWordError] = useState('true');
    const [errorMsg, setErrorMsg] = useState(null);
    
    if (accessToken) {
        window.location.href = "/account";
        return;
    }
    const responseFacebook = (response) => {
        console.log("facbook response: ");
        console.log(response);
        axios.defaults.baseURL = "https://qasaqees.tech/api";
            const data ={
                loginType  : "Facebook",
                accessToken: response.accessToken,
            };
            console.log("data sent: ");
            console.log(data);
            axios.post('/register/loginWithFacebook',data,{headers: {"Content-type": "application/json"}})
                .then((response) => {
                    localStorage.setItem("accessToken",response.data.accessToken);
                    delete response.data.accessToken;
                    console.log(response.data.user);
                    localStorage.setItem("userData",JSON.stringify(response.data.user));
                    //To check of 
                    setTimeout(() => {window.location.href = "/account";}, 1000);
                })
                .catch((error) => {
                    if (error.response.status === 400) {
                        console.log(error.response.data.message);
                        setErrorMsg((<div class="animate__animated animate__fadeInUp error-div bg-red-light pa-2 b-rad-1 mb-3">
                        <p class="text-center ma-0 f-size-3 c-black"> failed connecting to Facebook. </p>
                    </div>));
                        setTimeout(() => {setErrorMsg((<div class="animate__animated animate__fadeOutDown error-div bg-red-light pa-2 b-rad-1 mb-3">
                        <p class="text-center ma-0 f-size-3 c-black"> failed connecting to Facebook. </p>
                    </div>));}, 5000);
                    }
                    if (error.response.status === 404) {
                        console.log(error.response.data.message);
                        setErrorMsg((<div class="animate__animated animate__fadeInUp error-div bg-red-light pa-2 b-rad-1 mb-3">
                        <p class="text-center ma-0 f-size-3 c-black"> Please choose account. </p>
                    </div>));
                        setTimeout(() => {setErrorMsg((<div class="animate__animated animate__fadeOutDown error-div bg-red-light pa-2 b-rad-1 mb-3">
                        <p class="text-center ma-0 f-size-3 c-black"> Please choose account. </p>
                    </div>));}, 5000);
                    }
                });
      }
      const componentClicked = (data) => {
        console.warn(data);
      }
    function Submit(event) {
        event.preventDefault();
        if (!emailError && !passwordError) {
            axios.defaults.baseURL = "https://qasaqees.tech/api";
            const data ={
              email:email,
              password:password,
            };
            console.log("form data: ");
            console.log(data);
            axios.post('/register/logIn',data,{headers: {"Content-type": "application/json"}})
                .then((response) => {
                    localStorage.setItem("accessToken",response.data.accessToken);
                    delete response.data.accessToken;
                    console.log(response.data.user);
                    localStorage.setItem("userData",JSON.stringify(response.data.user));
                    //To check of 
                    setTimeout(() => {window.location.href = "/account";}, 1000);                    
                })
                .catch((error) => {
                    if (error.response.status === 401) {
                        console.log(error.response.data.message);
                        setErrorMsg((<div class="animate__animated animate__fadeInUp error-div bg-red-light pa-2 b-rad-1 mb-3">
                        <p class="text-center ma-0 f-size-3 c-black"> Invalid email or password. </p>
                    </div>));
                        setTimeout(() => {setErrorMsg((<div class="animate__animated animate__fadeOutDown error-div bg-red-light pa-2 b-rad-1 mb-3">
                        <p class="text-center ma-0 f-size-3 c-black"> Invalid email or password. </p>
                    </div>));}, 5000);
                    }
                });
          }
        else{
            console.log("Email or password error!!");
        }
    }
    return ( 
        <div className = "bg-image bg ">
            <div id = "login" className = "container-fluid" >
                <form>
                <div id = "div-logo" className = "col-lg-1 col-md-2 col-3" >
                    <svg viewBox = "0 0 204 45" id = "icon-flickr_logo_dots" >
                        <g fill = "none" fillRule = "evenodd" >
                            <path fill = "#FF0084" d = "M35 33c5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10s-10 4.478-10 10c0 5.523 4.477 10 10 10" >
                            </path> < path fill = "#0063DC" d = "M10 33c5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10S0 17.478 0 23c0 5.523 4.477 10 10 10" >
                            </path> 
                            <path fill = "#FFF" d = "M134.725 13.31c3.121 0 5.896.53 8.264 1.691l-.754 7.67c-1.909-1.16-3.809-1.68-6.294-1.68-4.508 0-7.972 3.14-7.972 8.371 0 4.818 4.041 7.96 8.55 7.96 2.368 0 4.736-.522 6.47-1.452l.23 7.79c-2.598.87-5.718 1.34-8.494 1.34-9.933 0-17.5-5.819-17.5-15.818 0-10.06 7.567-15.872 17.5-15.872zm65.756 0c1.21 0 2.483.172 3.52.352l-.519 8.719c-1.155-.352-2.309-.352-3.523-.352-4.852 0-7.57 3.552-7.57 9.483V44.3h-10.39V14.01h9.471v5.582h.112c1.793-3.841 4.394-6.281 8.899-6.281zM157.947.692v26.05h.112l8.666-12.73h11.377l-10.45 13.898 11.316 16.39H166.38l-8.32-15h-.112v15H147.55V.691h10.398zm-59.498 0V44.3H88.051V.691h10.4zm15.49 13.32v30.288h-10.392V14.01h10.392zM78.807 0c2.254 0 3.988.35 5.314.58l-.637 7.21c-.864-.292-1.73-.47-3.293-.47-2.655 0-3.69 1.861-3.69 4.831v1.858h7.391v7.32H76.5V44.3H66.1V21.33h-6.12v-7.32h6.296v-1.858C66.276 3.142 70.491 0 78.807 0zm35.133 1.39v7.68h-10.392V1.39h10.392z" >
                            </path> 
                        </g> 
                    </svg> 
                </div> 
                <p> Login to Flickr </p> 
                {errorMsg}
                <FloatingInput type = "email"
                name = "Email address"
                value = { email => setEmail(email) }
                error = { emailError => setEmailError(emailError) }
                /> 
                <FloatingInputPassoword 
                type = "password"
                name = "Password"
                value = { password => setPassword(password) }
                error = { passwordError => setpassWordError(passwordError) }
                validation = {false}
                />
                <FacebookLogin
                    appId="322610599248518"
                    autoLoad={false}
                    fields="name,email,picture"
                    onClick={componentClicked}
                    callback={responseFacebook}
                    textButton="Login with Facebook" 
                /> 
                <button className = "btn-login" onClick = { Submit } > Sign in </button> 
                <p className = "login-not-memeber" > < a href = "/forgot-password" > Forgot password ? </a> </p>
                <hr />
                <p className = "login-not-memeber" > Not a Flickr member ? < a href = "/sign-up" > Sign Up here. </a> </p >
                </form> 
            </div> 
        </div>
        );
    }

export default Login;