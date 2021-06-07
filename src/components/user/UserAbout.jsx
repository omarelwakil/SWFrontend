import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types"
import _ from 'lodash';

import axios from 'axios';

import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';

import Navbar from '../Trending/Navbar/Navbar';
import UserCover from '../PhotoStream/UserCover/UserCover';

import './UserAbout.css';

import emptyShowCase from '../../images/empty-showcase.jpg';

/**
 * Component for User About (description,showcase,user info)
 *
 * @component
 * @example
 * const id = 60b7df35f8941e0012b98eec
 * return (
 *   <User userInfo={id} />
 * )
 */
function UserAbout(props) {
    const [loggedUserData, setLoggedUserData] = useState(JSON.parse(localStorage.getItem("userData")));
    const [queryUser] = useState(props.userInfo);
    const [userDescriptionEdit, setUserDescriptionEdit] = useState(false);
    const [userInfoEdit, setUserInfoEdit] = useState(false);
    const [selectedImages, setSelectedImages] = useState([]);
    const [userToRender, setUserToRender] = useState(null);
    const [userToRenderId, setUserToRenderId] = useState(null);
    const [userPhotostream, setUserPhotostream] = useState({ "photos": [] });

    useEffect(() => {
        if (loggedUserData === null || queryUser !== loggedUserData.user._id) {
            axios.defaults.baseURL = "https://qasaqees.tech/api";
            axios.get('/user/about/' + queryUser)
                .then((response) => {
                    setUserToRender({ ...response.data, "sameUser": false });
                    setUserToRenderId(response.data.user._id);
                })
                .catch((error) => {
                });
        } else {
            setUserToRender({ ...loggedUserData, "sameUser": true });
            setUserToRenderId(loggedUserData.user._id);
        }
    }, [loggedUserData, queryUser]);

    const dataToSend = [
        { title: "About", path: "/people/" + userToRenderId, selected: true },
        { title: "Photostream", path: "/photos/" + userToRenderId, selected: false },
        { title: "Albums", path: "/photos/" + userToRenderId + "/albums", selected: false },
        { title: "Faves", path: "/photos/" + userToRenderId + "/favorites", selected: false }
    ];
    const dataToSendSameUser = [
        { title: "About", path: "/people/" + userToRenderId, selected: true },
        { title: "Photostream", path: "/photos/" + userToRenderId, selected: false },
        { title: "Albums", path: "/photos/" + userToRenderId + "/albums", selected: false },
        { title: "Faves", path: "/photos/" + userToRenderId + "/favorites", selected: false },
        { title: "Camera Roll", path: "/cameraroll", selected: false }
    ];
    const position = "position-static";

    /**
     * Toggles user descriptions from read state to edit state or vice versa
     * @return  {null}
     */
    const ToggleUserDescriptionEdit = () => {
        if (userDescriptionEdit) {
            if (document.getElementById("edit-user-description"))
                document.getElementById("edit-user-description").classList.add("d-none");
            if (document.getElementById("edit-description"))
                document.getElementById("edit-description").classList.remove("d-none");
            if (document.getElementById("about-yourself-text-btn"))
                document.getElementById("about-yourself-text-btn").classList.remove("d-none");
            setUserDescriptionEdit(false);
        } else {
            if (document.getElementById("edit-user-description"))
                document.getElementById("edit-user-description").classList.remove("d-none");
            if (document.getElementById("edit-description"))
                document.getElementById("edit-description").classList.add("d-none");
            if (document.getElementById("about-yourself-text-btn"))
                document.getElementById("about-yourself-text-btn").classList.add("d-none");
            setUserDescriptionEdit(true);
        }
    };

    /**
     * Toggles user info from read state to edit state or vice versa
     * @return  {null}
     */
    const ToggleUserInfo = () => {
        if (userInfoEdit) {
            if (document.getElementById("edit-info"))
                document.getElementById("edit-info").classList.remove("d-none");
            if (document.getElementById("user-info-options"))
                document.getElementById("user-info-options").classList.add("d-none");
            if (document.getElementsByClassName("user-info-text"))
                for (let i = 0; i < document.getElementsByClassName("user-info-text").length; i++) {
                    document.getElementsByClassName("user-info-text")[i].classList.remove("d-none");
                    if (document.getElementsByClassName("user-info-text")[i].parentElement.getAttribute("exist") === "false")
                        document.getElementsByClassName("user-info-text")[i].parentElement.classList.add("d-none");
                }
            if (document.getElementsByClassName("user-info-input"))
                for (let j = 0; j < document.getElementsByClassName("user-info-input").length; j++) {
                    document.getElementsByClassName("user-info-input")[j].classList.add("d-none");
                }
            if (document.getElementsByClassName("user-info-title"))
                for (let i = 0; i < document.getElementsByClassName("user-info-title").length; i++) {
                    if (document.getElementsByClassName("user-info-title")[i].parentElement.getAttribute("exist") === "false")
                        document.getElementsByClassName("user-info-title")[i].parentElement.classList.add("d-none");
                }
            setUserInfoEdit(false);
        } else {
            if (document.getElementById("edit-info"))
                document.getElementById("edit-info").classList.add("d-none");
            if (document.getElementById("user-info-options"))
                document.getElementById("user-info-options").classList.remove("d-none");

            if (document.getElementsByClassName("user-info-text"))
                for (let i = 0; i < document.getElementsByClassName("user-info-text").length; i++) {
                    document.getElementsByClassName("user-info-text")[i].classList.add("d-none");
                    if (document.getElementsByClassName("user-info-text")[i].parentElement.classList.contains("d-none"))
                        document.getElementsByClassName("user-info-text")[i].parentElement.classList.remove("d-none");
                }
            if (document.getElementsByClassName("user-info-input"))
                for (let j = 0; j < document.getElementsByClassName("user-info-input").length; j++) {
                    document.getElementsByClassName("user-info-input")[j].classList.remove("d-none");
                }

            if (document.getElementsByClassName("user-info-title"))
                for (let i = 0; i < document.getElementsByClassName("user-info-title").length; i++) {
                    if (document.getElementsByClassName("user-info-title")[i].parentElement.classList.contains("d-none"))
                        document.getElementsByClassName("user-info-title")[i].parentElement.classList.remove("d-none");
                }
            setUserInfoEdit(true);
        }
    };

    /**
     * Toggles user showcase from read state to edit state or vice versa
     * @return  {null}
     */
    const editUserShowCase = (e) => {
        if (document.getElementById("showcase-edit-text").classList.contains("d-none")) {
            //enable edit
            if (document.getElementById("showcase-edit-text"))
                document.getElementById("showcase-edit-text").classList.remove("d-none");
            if (document.getElementById("showcase-title-text"))
                document.getElementById("showcase-title-text").classList.add("d-none");
            if (document.getElementById("showcase-edit-btn"))
                document.getElementById("showcase-edit-btn").classList.add("d-none");
            if (document.getElementById("secondary-showcase-photo"))
                document.getElementById("secondary-showcase-photo").classList.add("d-none");
        } else {
            if (document.getElementById("showcase-edit-text"))
                document.getElementById("showcase-edit-text").classList.add("d-none");
            if (document.getElementById("showcase-title-text"))
                document.getElementById("showcase-title-text").classList.remove("d-none");
            if (document.getElementById("showcase-edit-btn"))
                document.getElementById("showcase-edit-btn").classList.add("d-none");
            if (document.getElementById("secondary-showcase-photo"))
                document.getElementById("secondary-showcase-photo").classList.remove("d-none");
        }
    };

    /**
     * Adding/Removing user selected images from photostream to user showcase
     * @return  {null}
     */
    const addImageSelected = (e) => {
        let imageId = e.currentTarget.getAttribute("_id");
        if (e.currentTarget.classList.contains("selected-image")) {
            //Removing Image
            e.currentTarget.classList.remove("selected-image");
            setSelectedImages(selectedImages.filter(item => item !== imageId))
        } else {
            //Adding Image
            e.currentTarget.classList.add("selected-image");
            setSelectedImages(selectedImages => [
                ...selectedImages,
                imageId
            ]);
        }
    };

    /**
     * Getting user photostream
     * @return  {null}
     */
    const getPhotoStream = (e) => {
        axios.defaults.baseURL = "https://qasaqees.tech/api";
        axios.get('/user/photostream/' + userToRenderId, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
            }
        })
            .then((response) => {
                for (let i = 0; i < loggedUserData.user.showCase.photos.length; i++) {
                    for (let j = 0; j < response.data.photos.length; j++) {
                        if (response.data.photos[j]._id === loggedUserData.user.showCase.photos[i]._id) {
                            response.data.photos[j].selected = true;
                            setSelectedImages(selectedImages => [
                                ...selectedImages,
                                response.data.photos[j]._id
                            ]);
                        } else {
                            response.data.photos[j].selected = false;
                        }
                    }
                }
                setUserPhotostream(response.data);
            })
            .catch((error) => {
                if (error.response.status === 401)
                    window.location.href = "/login";
            });
    };

    /**
     * Hitting BE and editing user info (Description or showcase title)
     * @return  {null}
     */
    const simpleEditUserAbout = (e) => {
        const userAbout = {
            "description": document.getElementById("user-description-textarea").value,
            "showCase": {
                "title": document.getElementById("showcase-edit-title-input").value
            },
            "occupation": document.getElementById("occupation").value,
            "homeTown": document.getElementById("home-town").value,
            "currentCity": document.getElementById("current-city").value
        }
        if (e.currentTarget.parentElement.id === "edit-user-description") {
            ToggleUserDescriptionEdit();
        } else {
            editUserShowCase();
        }
        axios.defaults.baseURL = "https://qasaqees.tech/api";
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem("accessToken");
        axios.patch("/user/" + loggedUserData.user._id, userAbout, {
            headers: { "Content-Type": "application/json" }
        })
            .then((response) => {
                loggedUserData.user.description = response.data.description;
                loggedUserData.user.showCase.title = response.data.showCase.title;
                localStorage.setItem("userData", JSON.stringify(loggedUserData));
                setLoggedUserData(JSON.parse(localStorage.getItem("userData")));
            }).catch((error) => {
                if (error.response.status === 401)
                    window.location.href = "/login";
            });
    };

    /**
     * Hitting BE and editing user data (Description or showcase title or user info or showcase photos)
     * @return  {null}
     */
    const complexEditUserAbout = (e) => {
        const userAbout = {
            "description": document.getElementById("user-description-textarea").value,
            "showCase": {
                "title": document.getElementById("showcase-edit-title-input").value,
                "photos": selectedImages
            },
            "occupation": document.getElementById("occupation").value,
            "homeTown": document.getElementById("home-town").value,
            "currentCity": document.getElementById("current-city").value
        }
        axios.defaults.baseURL = "https://qasaqees.tech/api";
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem("accessToken");
        axios.patch("/user/" + loggedUserData.user._id, userAbout, {
            headers: { "Content-Type": "application/json" }
        })
            .then((response) => {
                loggedUserData.user.description = response.data.description;
                loggedUserData.user.showCase.title = response.data.showCase.title;
                loggedUserData.user.showCase.photos = response.data.showCase.photos;
                localStorage.setItem("userData", JSON.stringify(loggedUserData));
                setLoggedUserData(JSON.parse(localStorage.getItem("userData")));
            }).catch((error) => {
                if (error.response.status === 401)
                    window.location.href = "/login";
            });
    }

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const gridItems = [];
    window.onload = function () {
        if (document.querySelector("#user-about .grid")) {
            const grid = document.querySelector("#user-about .grid");
            const rowSize = parseInt(getComputedStyle(grid).getPropertyValue("grid-auto-rows"), 10);
            const rowGap = parseInt(getComputedStyle(grid).getPropertyValue("grid-gap"), 10);

            const positionGridItems = () => {
                gridItems.forEach(({ item, content }) => {
                    content.classList.remove("cover");
                    const rowSpan = Math.ceil(
                        (content.offsetHeight + rowGap) / (rowSize + rowGap)
                    );
                    item.style.setProperty("--row-span", rowSpan);
                    content.classList.add("cover");
                });
            };

            window.addEventListener("load", positionGridItems);
            window.addEventListener("resize", _.debounce(positionGridItems, 100));
        }
    };

    /**
     * Redirecting visitor to view this photo onClick
     * @return  {null}
     */
    const redirectToPhoto = (e) => {
        window.location.href = "/photo/getdetails/" + e.currentTarget.getAttribute("_id");
    }

    /**
     * Hitting BE and editing user data (Description or showcase title or user info or showcase photos)
     * @return  {null}
     */
    const semiComplexEditUserAbout = (e) => {
        const userAbout = {
            "description": document.getElementById("user-description-textarea").value,
            "showCase": {
                "title": document.getElementById("showcase-edit-title-input").value
            },
            "occupation": document.getElementById("occupation").value,
            "homeTown": document.getElementById("home-town").value,
            "currentCity": document.getElementById("current-city").value
        }
        ToggleUserInfo();
        axios.defaults.baseURL = "https://qasaqees.tech/api";
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem("accessToken");
        axios.patch("/user/editInfo", userAbout, {
            headers: { "Content-Type": "application/json" }
        })
            .then((response) => {
                loggedUserData.user.occupation = userAbout.occupation;
                loggedUserData.user.homeTown = userAbout.homeTown;
                loggedUserData.user.currentCity = userAbout.currentCity;
                localStorage.setItem("userData", JSON.stringify(loggedUserData));
                setLoggedUserData(JSON.parse(localStorage.getItem("userData")));
            }).catch((error) => {
                if (error.response.status === 401)
                    window.location.href = "/login";
            });
    }

    return (
        <div id="user-about">
            {userToRender != null ?
                <UserCover userData={userToRender.user} /> : null
            }
            <div id="user-about-navbar">
                {userToRenderId != null ?
                    <div>
                        {userToRender.sameUser === true ?
                            <Navbar items={dataToSendSameUser} position={position} />
                            : <Navbar items={dataToSend} position={position} />
                        }
                    </div> : null
                }
            </div>
            {userToRender != null ?
                <div>
                    <div className="container-fluid my-5">
                        <div className="row">
                            <div className="col-12">
                                <div className={"bg-white rounded-top border border-bottom-0 px-md-6 py-md-4 p-3" + ((userToRender.user.description === null || userToRender.user.description === "") && userToRender.sameUser === false ? " d-none" : "")}>
                                    <div className="row">
                                        <div className="col-md-10 order-md-0 order-1">
                                            {(userToRender.user.description === null || userToRender.user.description === "") && userToRender.sameUser === true ?
                                                <button id="about-yourself-text-btn" className="bg-transparent border-0 p-0" onClick={ToggleUserDescriptionEdit}>
                                                    Write a little about yourself
                                                </button> :
                                                <p>{userToRender.user.description}</p>
                                            }
                                        </div>
                                        <div className="col-md-2 order-md-1 order-0">
                                            {userToRender.sameUser === true ?
                                                <EditIcon id="edit-description" className="edit-m-ui-btn float-end d-block" onClick={ToggleUserDescriptionEdit} />
                                                : null
                                            }
                                        </div>
                                    </div>
                                    {userToRender.sameUser === true ?
                                        <div id="edit-user-description" className="mb-5 d-none">
                                            <textarea id="user-description-textarea" className="w-100 border rounded" defaultValue={userToRender.user.description}></textarea>
                                            <button className="btn-cancel fw-bold float-end border-0 rounded" onClick={ToggleUserDescriptionEdit}>Cancel</button>
                                            <button className="btn-save fw-bold float-end me-3 border-0 rounded" onClick={simpleEditUserAbout} >Save</button>
                                        </div> : null
                                    }
                                </div>
                                <div className={"bg-white border border-bottom-0 px-md-6 py-md-4 p-3" + ((userToRender.user.showCase.photos === null || userToRender.user.showCase.photos.length === 0) && userToRender.sameUser === false ? " d-none" : "")}>
                                    <div className="row">
                                        <div className="col-12">
                                            <span id="showcase-title-text" className="bg-transparent border-0 fw-bold">
                                                {userToRender.user.showCase.title}
                                            </span>
                                            {userToRender.sameUser === true ?
                                                <div id="showcase-edit-text" className="row d-none mb-3 d-flex align-items-center">
                                                    <div className="col-md-4">
                                                        <input id="showcase-edit-title-input" type="text" className="form-control user-info-input" defaultValue={userToRender.user.showCase.title} />
                                                    </div>
                                                    <div className="col-md-4 mt-md-0 mt-2">
                                                        <button className="btn-save fw-bold border-0 rounded" onClick={simpleEditUserAbout} >Save</button>
                                                    </div>
                                                    <div className="col-md-4">
                                                        {userToRender.sameUser === true ?
                                                            <button className="bg-transparent border-0 float-end p-0" data-bs-toggle="modal" data-bs-target="#showcase-modal" onClick={getPhotoStream}>
                                                                <AddIcon className="add-m-ui-btn" style={{ fontSize: 32 }} />
                                                            </button> : null
                                                        }
                                                    </div>
                                                </div> : null
                                            }
                                            {userToRender.sameUser === true ?
                                                <EditIcon id="showcase-edit-btn" className="edit-m-ui-btn ms-2" onClick={editUserShowCase} />
                                                : null
                                            }
                                            {userToRender.sameUser === true ?
                                                <button id="secondary-showcase-photo" className="bg-transparent border-0 float-end p-0" data-bs-toggle="modal" data-bs-target="#showcase-modal" onClick={getPhotoStream}>
                                                    <AddIcon className="add-m-ui-btn" style={{ fontSize: 32 }} />
                                                </button> : null
                                            }
                                        </div>
                                        {userToRender.user.showCase.photos.length === 0 ?
                                            <div className="col-12">
                                                <div className="d-flex justify-content-center p-3">
                                                    <div className="position-relative">
                                                        <img src={emptyShowCase} className="w-100" alt="empty-showcase" />
                                                        <div className="position-absolute centered text-center">
                                                            <h5 className="m-0">This is your showcase.</h5>
                                                            <button className="bg-transparent border-0 fs-5 hyperlink-btn p-0" data-bs-toggle="modal" data-bs-target="#showcase-modal" onClick={getPhotoStream} >Get started</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            : null
                                        }
                                        <div className="col-12">
                                            <div className="grid" >
                                                {userToRender.user.showCase.photos.map(photo => {
                                                    return (
                                                        <div className="grid__item position-relative lodash-wrapper" key={photo._id}>
                                                            <img className="image-lodash cursor-pointer" src={photo.url} alt="" _id={photo._id} onClick={redirectToPhoto} />
                                                            <div className="bottom-left">
                                                                <p className="selector-title m-0">{photo.title}</p>
                                                                <p className="selector-creator m-0">by {photo.creator.firstName} {photo.creator.lastName}</p>
                                                            </div>
                                                        </div>
                                                    );
                                                })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white border rounded-bottom px-md-6 py-md-4 p-3">
                                    <div className="row p-md-0 pe-3">
                                        {userToRender.sameUser === true ?
                                            <div className="col-12">
                                                <EditIcon id="edit-info" className="edit-m-ui-btn float-end" onClick={ToggleUserInfo} />
                                            </div> : null
                                        }
                                        <div className="col-md-2 col-4 d-flex align-items-center mb-3" exist={userToRender.user.createdAt === "" ? "false" : "true"}>
                                            <p className="text-muted m-0 text-nowrap user-info-title">Joined</p>
                                        </div>
                                        <div className="col-md-10 col-8 d-flex align-items-center mb-3" exist={userToRender.user.createdAt === "" ? "false" : "true"}>
                                            <p className="text-black user-info-text-static m-0">{monthNames[new Date(userToRender.user.createdAt).getMonth()]} {new Date(userToRender.user.createdAt).getFullYear()}</p>
                                        </div>
                                        <div className={"col-md-2 col-4 d-flex align-items-center mb-3" + (userToRender.user.occupation === "" ? " d-none" : "")} exist={userToRender.user.occupation === "" ? "false" : "true"}>
                                            <p className="text-muted m-0 text-nowrap user-info-title">Occupation</p>
                                        </div>
                                        <div className={"col-md-10 col-8 d-flex align-items-center mb-3" + (userToRender.user.occupation === "" ? " d-none" : "")} exist={userToRender.user.occupation === "" ? "false" : "true"}>
                                            <p className="text-black user-info-text m-0">{userToRender.user.occupation}</p>
                                            <input id="occupation" type="text" className="form-control user-info-input d-none" defaultValue={userToRender.user.occupation} />
                                        </div>
                                        <div className={"col-md-2 col-4 d-flex align-items-center mb-3" + (userToRender.user.homeTown === "" ? " d-none" : "")} exist={userToRender.user.homeTown === "" ? "false" : "true"}>
                                            <p className="text-muted m-0 text-nowrap user-info-title">Hometown</p>
                                        </div>
                                        <div className={"col-md-10 col-8 d-flex align-items-center mb-3" + (userToRender.user.homeTown === "" ? " d-none" : "")} exist={userToRender.user.homeTown === "" ? "false" : "true"}>
                                            <p className="text-black user-info-text m-0">{userToRender.user.homeTown}</p>
                                            <input id="home-town" type="text" className="form-control user-info-input d-none" defaultValue={userToRender.user.homeTown} />
                                        </div>
                                        <div className={"col-md-2 col-4 d-flex align-items-center mb-3" + (userToRender.user.currentCity === "" ? " d-none" : "")} exist={userToRender.user.currentCity === "" ? "false" : "true"}>
                                            <p className="text-muted m-0 text-nowrap user-info-title">Current city</p>
                                        </div>
                                        <div className={"col-md-10 col-8 d-flex align-items-center mb-3" + (userToRender.user.currentCity === "" ? " d-none" : "")} exist={userToRender.user.currentCity === "" ? "false" : "true"}>
                                            <p className="text-black user-info-text m-0">{userToRender.user.currentCity}</p>
                                            <input id="current-city" type="text" className="form-control user-info-input d-none" defaultValue={userToRender.user.currentCity} />
                                        </div>
                                        <div className="col-md-2 col-4 d-flex align-items-center" exist={userToRender.user.email === "" ? "false" : "true"}>
                                            <p className="text-muted m-0 text-nowrap user-info-title">Email</p>
                                        </div>
                                        <div className="col-md-10 col-8 d-flex align-items-center" exist={userToRender.user.email === "" ? "false" : "true"}>
                                            <a href={"mailto:" + userToRender.user.email} className="hyperlink-btn">{userToRender.user.email}</a>
                                        </div>
                                        {userToRender.sameUser === true ?
                                            <div id="user-info-options" className="col-12 mt-2 d-none">
                                                <button className="btn-cancel fw-bold float-end border-0 rounded" onClick={ToggleUserInfo} >Cancel</button>
                                                <button className="btn-save fw-bold float-end me-3 border-0 rounded" onClick={semiComplexEditUserAbout}>Save</button>
                                            </div> : null
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {userToRender.sameUser === true ?
                        <div className="modal fade p-0" id="showcase-modal" tabIndex="-1" aria-labelledby="showcaseModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="m-0">Photostream</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row" data-masonry='{"percentPosition": true }'>
                                            {userPhotostream.photos.map(photo => {
                                                return (
                                                    <div className="col-md-2 d-flex justify-content-center" key={photo._id}>
                                                        <div className="position-relative">
                                                            <img src={photo.url} className={"image-selector" + (photo.selected ? " selected-image" : "")} alt="" _id={photo._id} onClick={addImageSelected} />
                                                            <div className="bottom-left">
                                                                <p className="selector-title m-0">{photo.title}</p>
                                                                <p className="selector-creator m-0">by {photo.creator.firstName} {photo.creator.lastName}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })
                                            }
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#showcase-modal" onClick={complexEditUserAbout}>Select photos</button>
                                    </div>
                                </div>
                            </div>
                        </div> : null
                    }
                </div> : null
            }
        </div >
    );
}

UserAbout.propTypes = {
    /**
     * User's id
     */
    userInfo: PropTypes.string.isRequired
}

UserAbout.defaultProps = {
    userInfo: "60b7df35f8941e0012b98eec"
}

export default UserAbout;