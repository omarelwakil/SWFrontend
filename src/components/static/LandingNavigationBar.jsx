import React, { useState, useEffect } from 'react';
import SearchDropDown from '../user/Search/SearchDropDown';
import './LandingNavigationBar.css';

/**
 * Component for Landing navigation bar
 *
 * @component
 * @example
 * return (
 *   <LandingNavigationBar />
 * )
 */
function LandingNavigationBar() {
    const [showDropList, setShowDropList] = useState(false);
    const [text, setText] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    useEffect(() => { setShowDropList(isFocused && (text !== "")) }, [isFocused, text])
    function handleTextChange(event) {
        const { value } = event.target;
        setText(value);
    }

    return (
        <div id="sec-nav" className="position-fixed w-100">
            <div className="container-fluid">
                <div className="row position-relative">
                    <div id="div-logo" className="col-lg-1 col-md-2 col-3">
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
                    <div id="div-search" className="col-lg-9 col-md-6 col-7 pe-md-0 pe-2">
                        <div className="position-relative inner-div-search">

                            <input type="button" className="position-absolute bg-transparent border-0 rounded-15"
                                id="search-icon" value="" />
                            <input type="text" className="w-100 rounded-15 border-0" placeholder="Photos, people, or groups"
                                id="search-box" autoComplete="off" onFocus={() => { setIsFocused(true) }} onBlur={() => { setTimeout(() => { setIsFocused(false) }, 220) }} value={text} onChange={handleTextChange} />
                            {showDropList && <SearchDropDown search={text} />}
                            <input type="button" className="position-absolute bg-transparent border-0 rounded-15 d-none"
                                id="close-search-icon" value="" />
                            <input type="button" className="bg-transparent border-0 rounded-15"
                                id="search-icon-sm" value="" />
                        </div>
                    </div>
                    <div id="div-login" className="col-lg-1 col-md-2 col-2 p-0 ps-lg-4">
                        <a href="/login"
                            className="w-100 d-flex justify-content-center align-items-center text-decoration-none text-white"
                            id="log-in">
                            Log In
                        </a>
                    </div>
                    <div id="div-signup" className="col-lg-1 col-md-2 ps-0 d-none d-md-block">
                        <a href="/sign-up"
                            className="bg-white rounded hyperlink-setup w-100 text-decoration-none text-black d-inline-block text-center d-flex align-items-center justify-content-center"
                            id="sign-up">
                            Sign Up
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingNavigationBar;