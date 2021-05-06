import React, { useState } from 'react';

import FloatingInputPassoword from './FloatingInputPassword';

import './ChangePassword.css'

function ChangePassword() {
    const [password, setPassword] = useState('');
    const [passwordError, setpassWordError] = useState('true');
    const [newPassword, setNewPassword] = useState('');
    const [newError, setNewWordError] = useState('true');
    return (
        <div id="change-password-p" className="">
            <div className="container-fluid">
                <div className="row">
                    <div id="row-ch-pass" className="col-12">
                        <h5 className="text-center">Set your new Flickr Password</h5>
                        <div className="mx-0 my-2">
                            <FloatingInputPassoword type="password"
                                name="Current Password"
                                value={password => setPassword(password)}
                                error={passwordError => setpassWordError(passwordError)}
                            />
                        </div>
                        <div className="mx-0 my-2">
                            <FloatingInputPassoword type="password"
                                name="New Password"
                                value={newPassword => setNewPassword(newPassword)}
                                error={newError => setNewWordError(newError)}
                            />
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default ChangePassword;