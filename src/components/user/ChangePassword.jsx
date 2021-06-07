import React, { useState } from 'react';
import axios from 'axios';

import toastr from "toastr";
import 'toastr/build/toastr.min.css'

import FloatingInput from './SignUp/FloatingInput';
import FloatingInputPassoword from './SignUp/FloatingInputPassword';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import './ChangePassword.css'

/**
 * Component for changing user password
 *
 * @component
 * @example
 * return (
 *   <ChangePassword />
 * )
 */
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

    /**
     * Hitting change password api to change password onUserClick on button
     * @return  {null}
     */
    function handleChangePassword(event) {
        event.preventDefault();
        if (!newError && !passwordError) {
            const data = {
                oldPass: password,
                newPass: newPassword
            }
            axios.defaults.baseURL = "https://qasaqees.tech/api";
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
            axios.post('/register/changePassword', data, { headers: { "Content-Type": "application/json" } })
                .then((response) => {
                    setTimeout(() => {
                        toastr.options = {
                            "closeButton": true,
                            "debug": false,
                            "newestOnTop": true,
                            "progressBar": true,
                            "positionClass": "toast-top-center",
                            "preventDuplicates": false,
                            "onclick": null,
                            "showDuration": "300",
                            "hideDuration": "1000",
                            "timeOut": "5000",
                            "extendedTimeOut": "1000",
                            "showEasing": "swing",
                            "hideEasing": "linear",
                            "showMethod": "fadeIn",
                            "hideMethod": "fadeOut"
                        };
                        toastr.success("Please log in again", "Password changed successfully");
                    }, 1000);
                    localStorage.clear();
                    window.location.href = "/login";

                })
                .catch((error) => {
                    if (error.response.status === 401) {
                        console.log(error.response.data.message);
                        localStorage.clear();
                        window.location.href = "/login";
                    } else if (error.response.status === 400) {
                        toastr.options = {
                            "closeButton": true,
                            "debug": false,
                            "newestOnTop": true,
                            "progressBar": true,
                            "positionClass": "toast-top-center",
                            "preventDuplicates": false,
                            "onclick": null,
                            "showDuration": "300",
                            "hideDuration": "1000",
                            "timeOut": "5000",
                            "extendedTimeOut": "1000",
                            "showEasing": "swing",
                            "hideEasing": "linear",
                            "showMethod": "fadeIn",
                            "hideMethod": "fadeOut"
                        };
                        toastr.error(error.response.data.message);
                    }
                });
        }
    }
    return (
        <div id="change-password-p">
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
                                validation={false}
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