import React, { useEffect, useState } from 'react';
import SearchDropDown from '../user/Search/SearchDropDown';
import axios from 'axios';

import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import NotificationsIcon from '@material-ui/icons/Notifications';

import '../static/LandingNavigationBar.css';
import './UserlessNavigationBar.css';

import UserImage from '../../images/usericon.png';

function UserlessNavigationBar(props) {
    const [isHamburger, setIcon] = useState(true);
    const [isLoggedIn] = useState(localStorage.getItem("accessToken"));
    const [userData] = useState(JSON.parse(localStorage.getItem("userData")));

    //console.log(isLoggedIn);

    function ToggleSideNavigationBar() {
        const widthSize = document.getElementById("div-side-nav").style.width;
        if (widthSize === "0px" || widthSize === "") {
            setIcon(false);
            if (window.outerWidth < "540") {
                document.getElementById("div-side-nav").style.width = "100%";
            } else if (window.outerWidth < "768") {
                document.getElementById("div-side-nav").style.width = "60%";
            } else {
                document.getElementById("div-side-nav").style.width = "40%";
            }
            document.getElementById("white-overlay").style.opacity = "1";
            document.getElementById("white-overlay").classList.add("w-100");
        } else {
            setIcon(true);
            document.getElementById("div-side-nav").style.width = "0";
            document.getElementById("white-overlay").style.opacity = "0";
            document.getElementById("white-overlay").classList.remove("w-100");
        }
    }

    const UserLogOut = () => {
        const accessToken = localStorage.getItem("accessToken");
        axios.defaults.baseURL = "https://qasaqees.tech/api";
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
        axios.post('/register/logOut')
            .then((response) => {
                // debugger
                localStorage.clear();
                window.location.href = "/";
            })
            .catch((error) => {
                // debugger
                if (error.response.status === 401) {
                    console.log(error.response.data.message);
                    localStorage.clear();
                    window.location.href = "/login";
                }
            });
    }
    ////Drop box for search
    const [showDropList, setShowDropList] = useState(false);
    const [text, setText] = useState(props.currentSearch || "");
    const [isFocused, setIsFocused] = useState(false);
    useEffect(() => { setShowDropList(isFocused && (text !== "")) }, [isFocused, text])

    function handleTextChange(event) {
        const { value } = event.target;
        setText(value);
    }

    return (
        <div id="global-nav">
            <div id="sec-nav-userless" className="position-fixed w-100">
                <div className="container-fluid d-flex align-items-center">
                    <div id="div-side-nav-btn" className="me-4">
                        {isHamburger === true ?
                            <MenuIcon className="text-white" onClick={ToggleSideNavigationBar} /> :
                            <CloseIcon className="text-white" onClick={ToggleSideNavigationBar} />
                        }
                    </div>
                    <div id="div-logo-user-less">
                        <a href="/">
                            <svg viewBox="0 0 204 45" id="icon-flickr_logo_dots">
                                <g fill="none" fillRule="evenodd">
                                    <path fill="#FF0084"
                                        d="M35 33c5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10s-10 4.478-10 10c0 5.523 4.477 10 10 10">
                                    </path>
                                    <path fill="#0063DC"
                                        d="M10 33c5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10S0 17.478 0 23c0 5.523 4.477 10 10 10">
                                    </path>
                                    <path fill="#FFF"
                                        d="M134.725 13.31c3.121 0 5.896.53 8.264 1.691l-.754 7.67c-1.909-1.16-3.809-1.68-6.294-1.68-4.508 0-7.972 3.14-7.972 8.371 0 4.818 4.041 7.96 8.55 7.96 2.368 0 4.736-.522 6.47-1.452l.23 7.79c-2.598.87-5.718 1.34-8.494 1.34-9.933 0-17.5-5.819-17.5-15.818 0-10.06 7.567-15.872 17.5-15.872zm65.756 0c1.21 0 2.483.172 3.52.352l-.519 8.719c-1.155-.352-2.309-.352-3.523-.352-4.852 0-7.57 3.552-7.57 9.483V44.3h-10.39V14.01h9.471v5.582h.112c1.793-3.841 4.394-6.281 8.899-6.281zM157.947.692v26.05h.112l8.666-12.73h11.377l-10.45 13.898 11.316 16.39H166.38l-8.32-15h-.112v15H147.55V.691h10.398zm-59.498 0V44.3H88.051V.691h10.4zm15.49 13.32v30.288h-10.392V14.01h10.392zM78.807 0c2.254 0 3.988.35 5.314.58l-.637 7.21c-.864-.292-1.73-.47-3.293-.47-2.655 0-3.69 1.861-3.69 4.831v1.858h7.391v7.32H76.5V44.3H66.1V21.33h-6.12v-7.32h6.296v-1.858C66.276 3.142 70.491 0 78.807 0zm35.133 1.39v7.68h-10.392V1.39h10.392z">
                                    </path>
                                </g>
                            </svg>
                        </a>
                    </div>
                    <div id="div-nav-items">
                        <nav className="nav ps-3">
                            {isLoggedIn === null || userData === null ? null :
                                <div className="dropdown">
                                    <a className="nav-link text-white mx-1 fw-500 on-hover-opacity" href="/photos/id" data-bs-toggle="dropdown" aria-expanded="false">You</a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item text-black fs-7" href={"/people/" + userData.user._id}>About</a></li>
                                        <li><a className="dropdown-item text-black fs-7" href={"/photos/" + userData.user._id}>Photostream</a></li>
                                        <li><a className="dropdown-item text-black fs-7" href={"/photos/" + userData.user._id + "/albums"}>Albums</a></li>
                                        <li><a className="dropdown-item text-black fs-7" href={"/photos/" + userData.user._id + "/favorites"}>Faves</a></li>
                                        <li><a className="dropdown-item text-black fs-7" href={"/photos/" + userData.user._id + "/galleries"}>Galleries</a></li>
                                        <li><a className="dropdown-item text-black fs-7" href="/groups">Groups</a></li>
                                        <li><a className="dropdown-item text-black fs-7" href="/cameraroll">Camera Roll</a></li>
                                    </ul>
                                </div>
                            }
                            <a className="nav-link text-white mx-1 fw-500 on-hover-opacity" href="/explore">Explore</a>
                            <a className="nav-link text-white mx-1 fw-500 on-hover-opacity" href="/photos/tags">Trending</a>
                        </nav>
                    </div>
                    <div id="div-user-less-search" className="position-relative">
                        <input type="button" className="position-absolute bg-transparent border-0 rounded-15"
                            id="search-icon" value="" />
                        <input type="text" className="w-100 rounded-15 border-0" placeholder="Photos, people, or groups"
                            id="search-box" autoComplete="off" onFocus={() => { setIsFocused(true) }} onBlur={() => { setTimeout(() => { setIsFocused(false) }, 120) }} value={text} onChange={handleTextChange} />
                        {showDropList && <SearchDropDown search={text} />}
                        <input type="button" className="position-absolute bg-transparent border-0 rounded-15 d-none"
                            id="close-search-icon" value="" />
                        <input type="button" className="bg-transparent border-0 rounded-15"
                            id="search-icon-sm" value="" />
                    </div>
                    {isLoggedIn !== null && userData !== null ?
                        <div id="div-upload" className="d-flex justify-content-center">
                            <a href="/photos/upload" id="upload-icon" className="bg-transparent border-0 ms-md-2 ms-4 on-hover-opacity"> </a>
                        </div> : null
                    }
                    {isLoggedIn === null || userData === null ?
                        <a href="/login"
                            className="d-flex justify-content-center align-items-center text-decoration-none text-white ms-4 fw-500"
                            id="log-in">
                            Log In
                        </a> :
                        <div className="dropdown">
                            <button id="notification-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false" className="d-flex justify-content-center align-items-center text-decoration-none bg-transparent border-0 on-hover-opacity ms-md-0 ms-2">
                                <NotificationsIcon className="text-white" style={{ fontSize: 30 }} />
                            </button>
                            <div id="user-notify-popup" className="dropdown-menu dropdown-menu-end" aria-labelledby="notification-btn">
                                <span className="notification-text fw-500">Notifications</span>
                                <div className="dropdown-divider"></div>
                                <div id="no-recent-notify" className="d-flex justify-content-center align-items-center">
                                    <h4 className="text-muted text-center px-5">When you have new notifications, they’ll appear here.</h4>
                                </div>
                            </div>
                        </div>
                    }
                    {isLoggedIn === null || userData === null ?
                        <a href="/sign-up"
                            className="d-flex justify-content-center text-decoration-none btn ms-4 rounded sign-out"
                            id="sign-up-btn">
                            Sign Up
                        </a> :
                        <div id="user-settings" className="dropdown ms-2">
                            <img id="settings-btn" className="rounded-circle" src={UserImage} alt="user-icon" width="32px" role="button" data-bs-toggle="dropdown" aria-expanded="false" />
                            <div id="user-settings-popup" className="dropdown-menu dropdown-menu-end" aria-labelledby="settings-btn">
                                <span id="username" className="notification-text fs-5 fw-500 pb-0">Hei, {userData.user.userName}!</span>
                                <span className="notification-text text-muted fs-7 pt-0">Now you know how to greet people in English</span>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item text-black fs-7" href="/account">Settings</a>
                                <a className="dropdown-item text-black fs-7" href="/help">Help</a>
                                <button className="dropdown-item text-black fs-7" onClick={UserLogOut}>Log out</button>
                            </div>
                        </div>
                    }
                </div>
                <div id="div-side-nav" className="h-100 position-fixed pt-2">
                    {isLoggedIn === null || userData === null ?
                        <a className="d-block text-decoration-none text-white side-bar-items" href="/log-in">Log In</a> :
                        <div>
                            <a className="d-block text-decoration-none text-white side-bar-items" href={"/photos/" + userData.user._id}>Photostream</a>
                            <div className="my-2"></div>
                            <a className="d-block text-decoration-none text-white side-bar-items" href={"/photos/" + userData.user._id + "/albums"}>Albums</a>
                            <div className="my-2"></div>
                            <a className="d-block text-decoration-none text-white side-bar-items" href={"/photos/" + userData.user._id + "/favorites"}>Favorites</a>
                            <div className="my-2"></div>
                            <a className="d-block text-decoration-none text-white side-bar-items" href={"/people/" + userData.user._id}>About</a>
                        </div>
                    }
                    <hr className="text-white" />
                    <a className="d-block text-decoration-none text-white side-bar-items" href="/photos">Explore</a>
                    <div className="my-2"></div>
                    <a className="d-block text-decoration-none text-white side-bar-items" href="/photos/tags">Trending</a>
                    <hr className="text-white" />
                    <div className="row mb-2">
                        <div className="col-12">
                            <a href="/help/guidelines" className="d-block text-decoration-none text-white-50 side-bar-items fs-8">Guidelines</a>
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-4">
                            <a href="/about" className="d-block text-decoration-none text-white-50 side-bar-items fs-8">About</a>
                        </div>
                        <div className="col-4">
                            <a href="/jobs" className="d-block text-decoration-none text-white-50 side-bar-items fs-8">Jobs</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <a href="/help/privacy" className="d-block text-decoration-none text-white-50 side-bar-items fs-8">Privacy</a>
                        </div>
                        <div className="col-4">
                            <a href="/help/terms" className="d-block text-decoration-none text-white-50 side-bar-items fs-8">Terms</a>
                        </div>
                        <div className="col-4">
                            <a href="/help/cookies" className="d-block text-decoration-none text-white-50 side-bar-items fs-8">Cookies</a>
                        </div>
                    </div>
                </div>
                <div id="white-overlay" className="position-fixed h-100">
                </div>
            </div>
            <div className="fixed-height"></div>
        </div >
    );
}

export default UserlessNavigationBar;