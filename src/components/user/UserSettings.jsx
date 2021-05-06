import React from 'react';

import './UserSettings.css';

import userIcon from '../../images/usericon.png'

function UserSettings() {
    return (
        <div id="account-settings">
            <div className="container-fluid">
                <div className="row my-4">
                    <div className="col-lg-6 my-lg-3 my-3">
                        <div className="card">
                            <div className="card-header bg-white p-3">
                                <p className="fs-5-6 fw-500 m-0">Profile</p>
                            </div>
                            <div className="card-body p-3">
                                <div className="row d-flex justify-content-center align-items-center">
                                    <div className="col-md-2 col-3 d-flex justify-content-center">
                                        <img src={userIcon} width="50px" height="50px" alt="user-icon" className="rounded-circle" />
                                    </div>
                                    <div className="col-md-10 col-9">
                                        <p className="m-0 fs-7 fw-bold"><span className="fw-normal">Your real name is</span> {"{user.firstname}"} {"{user.lastname}"}.</p>
                                        <p className="m-0 fs-7 fw-bold"><span className="fw-normal">Your display name is</span> {"{user.username}"}.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer bg-white p-3">
                                <p className="fs-7">Your account has been reviewed as safe by Flickr staff. <a href="/help" className="fs-7">What does this mean?</a></p>
                                <p className="m-0 fs-7 fw-bold">Web addresses</p>
                                <p className="m-0 fs-7"><a href="/" className="fs-7 disabled">Create your own memorable Flickr web address!</a> It's an easy way to share your Flickr profile and your photostream with your friends.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 my-lg-3 my-3">
                        <div className="card">
                            <div className="card-header bg-white p-3">
                                <p className="fs-5-6 fw-500 m-0">Membership status</p>
                            </div>
                            <div className="card-body p-3">
                                <div className="row">
                                    <div className="col-md-2 col-3 d-flex justify-content-center align-items-center">
                                        <div id="member-sub-icon" className="border border-3 rounded-circle d-flex justify-content-center align-items-center">
                                            <p className="text-center m-0">1K</p>
                                        </div>
                                    </div>
                                    <div className="col-md-10 col-9">
                                        <p className="m-0 fs-7 fw-bold">You have a Flickr Free account.</p>
                                        <p className="m-0 fs-7">You get 1,000 of your favorite full-resolution photos and HD videos, shown with ads. <a href="/" className="fs-7 disabled">Upgrade to Flickr Pro</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mt-4">
                            <div className="card-header bg-white p-3">
                                <p className="fs-5-6 fw-500 m-0">Account</p>
                            </div>
                            <div className="card-body p-3">
                                <div className="row">
                                    <div className="col-6">
                                        <p className="m-0 fs-7 fw-bold">Login email</p>
                                        <p className="m-0 fs-7">omartelwakil@gmail.com</p>
                                        <a href="/" className="fs-7 disabled">Request email change</a>
                                    </div>
                                    <div className="col-6">
                                        <p className="m-0 fs-7 fw-bold">Password</p>
                                        <a href="/change-password" className="fs-7">Edit your password</a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer bg-white p-3">
                                <p className="m-0 fs-7">You can also <a href="/help" className="fs-7">get help with your account</a>, or <a href="/" className="fs-7 disabled">delete your Flickr account</a>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserSettings;