import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import '../static/LandingNavigationBar.css';
import './UserlessNavigationBar.css';

function UserlessNavigationBar() {

    const [isHamburger, setIcon] = useState(true);
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
        } else {
            setIcon(true);
            document.getElementById("div-side-nav").style.width = "0";
            document.getElementById("white-overlay").style.opacity = "0";
        }
    }

    return (
        <div id="sec-nav-userless" className="position-fixed w-100">
            <div className="container-fluid d-flex align-items-center">
                <div id="div-side-nav-btn" className="me-4">
                    {isHamburger === true ?
                        <MenuIcon className="text-white" onClick={ToggleSideNavigationBar} /> :
                        <CloseIcon className="text-white" onClick={ToggleSideNavigationBar} />
                    }
                </div>
                <div id="div-logo-user-less">
                    <Link to="/">
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
                    </Link>
                </div>
                <div id="div-nav-items">
                    <nav className="nav ps-3">
                        <Link className="nav-link text-white mx-1 fw-500" to="/explore">Explore</Link>
                        <Link className="nav-link text-white mx-1 fw-500" to="/photos/tags">Trending</Link>
                    </nav>
                </div>
                <div id="div-user-less-search" className="position-relative">
                    <input type="button" className="position-absolute bg-transparent border-0 rounded-15"
                        id="search-icon" value="" />
                    <input type="text" className="w-100 rounded-15 border-0" placeholder="Photos, people, or groups"
                        id="search-box" />
                    <input type="button" className="position-absolute bg-transparent border-0 rounded-15 d-none"
                        id="close-search-icon" value="" />
                    <input type="button" className="bg-transparent border-0 rounded-15"
                        id="search-icon-sm" value="" />
                </div>
                <div id="div-upload" className="d-flex justify-content-center">
                    <input type="button" id="upload-icon" className="bg-transparent border-0 ms-4" value="" />
                </div>
                <Link to="/login"
                    className="d-flex justify-content-center align-items-center text-decoration-none text-white ms-4 fw-500"
                    id="log-in">
                    Log In
                </Link>
                <Link to="/sign-up"
                    className="d-flex justify-content-center text-decoration-none btn ms-4 rounded sign-out"
                    id="sign-up-btn">
                    Sign Up
                </Link>
            </div>
            <div id="div-side-nav" className="h-100 position-fixed pt-2">
                <Link className="d-block text-decoration-none text-white side-bar-items" to="/log-in">Log In</Link>
                <hr className="text-white" />
                <Link className="d-block text-decoration-none text-white side-bar-items" to="/photos">Explore</Link>
                <br className="m-hr" />
                <Link className="d-block text-decoration-none text-white side-bar-items" to="/photos/tags">Trending</Link>
                <hr className="text-white" />
                <div className="row mb-2">
                    <div className="col-12">
                        <Link to="/help/guidelines" className="d-block text-decoration-none text-white-50 side-bar-items fs-8">Guidelines</Link>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-4">
                        <Link to="/about" className="d-block text-decoration-none text-white-50 side-bar-items fs-8">About</Link>
                    </div>
                    <div className="col-4">
                        <Link to="/jobs" className="d-block text-decoration-none text-white-50 side-bar-items fs-8">Jobs</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <Link to="/help/privacy" className="d-block text-decoration-none text-white-50 side-bar-items fs-8">Privacy</Link>
                    </div>
                    <div className="col-4">
                        <Link to="/help/terms" className="d-block text-decoration-none text-white-50 side-bar-items fs-8">Terms</Link>
                    </div>
                    <div className="col-4">
                        <Link to="/help/cookies" className="d-block text-decoration-none text-white-50 side-bar-items fs-8">Cookies</Link>
                    </div>
                </div>
            </div>
            <div id="white-overlay" className="position-fixed w-100 h-100"></div>
        </div>
    );
}

export default UserlessNavigationBar;