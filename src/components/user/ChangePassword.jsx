import React, { useState } from 'react';
import axios from 'axios';

import FloatingInput from './FloatingInput';
import FloatingInputPassoword from './FloatingInputPassword';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import './ChangePassword.css'

function ChangePassword() {
    const [accessToken] = useState(localStorage.getItem("accessToken"));
    if (accessToken === null) {
        localStorage.clear();
        window.location.href = "/login";
    }
    const [password, setPassword] = useState('');
    const [passwordError, setpassWordError] = useState('true');
    const [newPassword, setNewPassword] = useState('');
    const [newError, setNewWordError] = useState('true');

    function handleChangePassword(event) {
        event.preventDefault();
        if (!newError && !passwordError) {
            const data = {
                oldPass: password,
                newPass: newPassword
            }
            axios.defaults.baseURL = "https://c22cc931-091d-4d2e-9b91-df72a4912d31.mock.pstmn.io";
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
            axios.post('/register/logOut', data)
                .then((response) => {
                    console.log(response.data.message);
                    window.location.href = "/";
                })
                .catch((error) => {
                    if (error.response.status === 401) {
                        console.log(error.response.data.message);
                        localStorage.clear();
                        window.location.href = "/login";
                    } else if (error.response.status === 400) {
                        console.log(error.response.data.message);
                    }
                });
        }
    }
    return (
        <div id="change-password-p" className="bg-dark">
            <div className="container-fluid h-100">
                <div className="row h-100">
                    <div className="col-12 d-flex align-items-center">
                        <div id="row-ch-pass" className="border rounded bg-white px-3 pe-4 py-4 m-auto position-relative">
                            <div className="position-absolute">
                                <a href="/account" className="border-0 rounded-circle p-2" id="back-btn">
                                    <ArrowBackIcon id="back-btn-icon" />
                                </a>
                            </div>
                            <div className="w-100 d-flex justify-content-center mt-2 mb-3">
                                <i id="lock-icon" className="fas fa-lock fa-1x"></i>
                            </div>
                            <h5 className="text-center">Set your new Flickr Password</h5>
                            <FloatingInput type="password"
                                name="Current Password"
                                value={password => setPassword(password)}
                                error={passwordError => setpassWordError(passwordError)}
                            />
                            <FloatingInputPassoword type="password"
                                name="New Password"
                                value={newPassword => setNewPassword(newPassword)}
                                error={newError => setNewWordError(newError)}
                            />
                            <input id="submit-change-password" type="submit" className="btn btn-primary fw-bold mt-2" value="Change your Flickr password" onClick={handleChangePassword} />
                            <div className="w-100 d-flex justify-content-center mt-3">
                                <a href="/forget-password" className="text-center fs-7">Forget Password?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default ChangePassword;