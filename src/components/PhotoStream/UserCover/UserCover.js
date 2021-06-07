//TO USE: it takes one prop {userData}
//if you want to use this component then if userJson is like {"user":{----}}
//This component needs the inner user {-----}

import './UserCover.css';
import UserImage from '../UserImage/UserImage';
import EditIcon from '@material-ui/icons/Edit';
import { useState, useEffect } from 'react';
import PropTypes from "prop-types"

import axios from 'axios';

/**
 * Component for showing details of the user.
 *
 * @component
 * @example
 * const userData = JSON.parse(localStorage.getItem("userData"))
 * return (
 *   <UserCover userData={userData.user} />
 * )
 */
const UserCover = (props) => {

    const [selectedImages, setSelectedImages] = useState(props.userData.coverPhotoUrl);
    const [selectedImagesProfile, setSelectedImagesProfile] = useState(props.userData.profilePhotoUrl);
    const [userPhotostream, setUserPhotostream] = useState({ "photos": [] });
    const [loggedInUserId, setLoggedInUserId] = useState(null);

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('userData')) !== null)
            setLoggedInUserId(JSON.parse(localStorage.getItem('userData')).user._id);
    }, [])


    const user = props.userData;
    const userData = JSON.parse(localStorage.getItem("userData"))
    const userID = loggedInUserId;

    const userToken = localStorage.getItem('accessToken');

    const [followed, setFollowed] = useState(null);
    useEffect(() => {
        if (userToken !== null) {
            setFollowed(user.isFollowing);
        }
    }, [user, userToken]);

    const coverStyling = {
        background: `linear-gradient(180deg, 
            transparent 0, rgba(0, 0, 0, 0.03) 8%,
            rgba(0, 0, 0, 0.11) 21%, rgba(0, 0, 0, 0.61) 78%, 
            rgba(0, 0, 0, 0.7) 95%, rgba(0, 0, 0, 0.7)), 
            url("${user.coverPhotoUrl}") no-repeat center`,
        backgroundSize: `cover`
    }

    /**
     * Getting User photostream
     * @return  {null}
     */
    const getPhotoStream = (e) => {
        if (loggedInUserId === user._id) {
            debugger;
            axios.defaults.baseURL = "https://qasaqees.tech/api";
            axios.get('/user/photostream/' + userData.user._id, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
                }
            })
                .then((response) => {
                    setUserPhotostream(response.data);
                    for (let i = 0; i < response.data.photos.length; i++) {
                        if (response.data.photos[i].url === selectedImages)
                            setSelectedImages(response.data.photos[i]._id);
                        if (response.data.photos[i].url === selectedImagesProfile)
                            setSelectedImagesProfile(response.data.photo[i]._id);
                    }
                })
                .catch((error) => {
                    debugger;
                    console.log("Error occured while getting photostream...");
                });
        }
    };

    /**
     * Adding/Removing user selected image from photostream to user cover photo
     * @return  {null}
     */
    const addImageSelected = (e) => {
        let imageId = e.currentTarget.getAttribute("_id");
        if (e.currentTarget.classList.contains("selected-image")) {
            e.currentTarget.classList.remove("selected-image");
            setSelectedImages(null);
        } else {
            for (let i = 0; i < document.getElementsByClassName("image-selector").length; i++) {
                if (document.getElementsByClassName("image-selector")[i].classList.contains("selected-image"))
                    document.getElementsByClassName("image-selector")[i].classList.remove("selected-image");
            }
            e.currentTarget.classList.add("selected-image");
            setSelectedImages(imageId);
        }
    };

    /**
         * Adding/Removing user selected image from photostream to user profile photo
         * @return  {null}
         */
    const addImageSelectedProfile = (e) => {
        let imageId = e.currentTarget.getAttribute("_id");
        if (e.currentTarget.classList.contains("selected-image")) {
            e.currentTarget.classList.remove("selected-image");
            setSelectedImagesProfile(null);
        } else {
            for (let i = 0; i < document.getElementsByClassName("image-selector").length; i++) {
                if (document.getElementsByClassName("image-selector")[i].classList.contains("selected-image"))
                    document.getElementsByClassName("image-selector")[i].classList.remove("selected-image");
            }
            e.currentTarget.classList.add("selected-image");
            setSelectedImagesProfile(imageId);
        }
    };

    /**
     * Hitting on BE api and changing user cover photo
     * @return  {null}
     */
    const updateCoverPhoto = (e) => {
        if (selectedImages !== null && userToken !== null) {
            axios.defaults.baseURL = "https://qasaqees.tech/api";
            axios.defaults.headers["Authorization"] = "Bearer " + userToken;
            let dataToSend = {
                "photoId": selectedImages
            }
            debugger;
            axios.patch("/user/editCoverPhoto", dataToSend,
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(response => {
                    let userDataLocal = JSON.parse(localStorage.getItem("userData"));
                    userDataLocal.user.coverPhotoUrl = userPhotostream.photos.filter(photo => photo._id === selectedImages)[0].url;
                    localStorage.setItem("userData", JSON.stringify(userDataLocal));
                    window.location.reload();
                }).catch(error => {
                    if (error.response.status === 401) {
                        localStorage.clear();
                        window.location.href = "/login";
                    }
                })
        }
    }

    /**
     * Hitting on BE api and changing user profile photo
     * @return  {null}
     */
    const updateProfilePhoto = (e) => {
        if (selectedImagesProfile !== null && userToken !== null) {
            axios.defaults.baseURL = "https://qasaqees.tech/api";
            axios.defaults.headers["Authorization"] = "Bearer " + userToken;
            let dataToSend = {
                "photoId": selectedImagesProfile
            }
            debugger;
            axios.patch("/user/editProfilePhoto", dataToSend,
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(response => {
                    let userDataLocal = JSON.parse(localStorage.getItem("userData"));
                    userDataLocal.user.profilePhotoUrl = userPhotostream.photos.filter(photo => photo._id === selectedImagesProfile)[0].url;
                    localStorage.setItem("userData", JSON.stringify(userDataLocal));
                    window.location.reload();
                }).catch(error => {
                    if (error.response.status === 401) {
                        localStorage.clear();
                        window.location.href = "/login";
                    }
                })
        }
    }

    /**
     * Capitalize first character of string
     * @this {string}
     * @example
     * const name = 'omar tarek'
     * name.capitalize();
     * return 'Omar Tarek'
     * @return  {string}
     */
    String.prototype.capitalize = function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }

    const followUser = () => {

        let userJson = {
            "userId": user._id
        }

        axios.post('/user/followUser', userJson, {
            headers: {
                'Authorization': 'Bearer ' + userToken,
                'Content-type': 'application/json'
            },
            params: {
                userId: user._id
            }
        })
            .then(res => setFollowed(true))
            .catch(err => console.log(err));


    }

    const unFollowUser = () => {
        let userJson = {
            "userId": user._id
        }

        axios.post('/user/unfollowUser', userJson, {
            headers: {
                'Authorization': 'Bearer ' + userToken,
                'Content-type': 'application/json'
            },
            params: {
                userId: user._id
            }
        })
            .then(res => setFollowed(false))
            .catch(err => console.log(err));

    }

    let followButton = null;
    if (loggedInUserId !== user._id && !followed) {
        followButton = <button onClick={followUser} className="ms-4 btn follow-button fw-500 px-4 py-1">Follow</button>
    } else if (loggedInUserId !== user._id && followed) {
        followButton = <button onClick={unFollowUser} className="ms-4 btn follow-button fw-500 px-4 py-1">Unfollow</button>
    }


    return (
        <div>
            {user !== null ?
                <div id="user-cover">
                    <div className="container-fluid position-relative">
                        <div id="edit-cover-photo" className="position-absolute end-0 top-0 m-3" data-bs-toggle="modal" data-bs-target="#cover-modal" onClick={getPhotoStream}>
                            <EditIcon id="edit-cover-icon" />
                        </div>
                    </div>
                    <div className="UserCover" style={coverStyling}>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-2 user-photo d-flex justify-content-center mb-2 cursor-pointer" data-bs-toggle="modal" data-bs-target="#profile-modal" onClick={getPhotoStream}>
                                    <UserImage imgUrl={user.profilePhotoUrl} />
                                </div>
                                <div className="col-md-10 user-data text-white p-0 ps-3 d-flex align-items-center">
                                    <div className="w-100 mb-3">
                                        <div className="row user-name ps-3">
                                            <span className="d-flex align-items-center p-0">
                                                {user.firstName.capitalize()} {user.lastName.capitalize()} {followButton}
                                            </span>
                                        </div>
                                        <div className="position-relative">
                                            <ul className="list-group list-group-horizontal">
                                                <li className="list-group-item border-0 bg-transparent px-2 py-0 text-white">{user.userName}</li>
                                                <li className="list-group-item border-0 bg-transparent px-2 py-0 text-white"><a href={"/people/" + userID + "/contact/rev"} className={loggedInUserId !== user._id ? "disabled" : ""}>{user.numberOfFollowers} Followers</a> <span className="fw-bolder">.</span> <a href={"/people/" + userID + "/contact/"}>{user.numberOfFollowings} Following</a></li>
                                            </ul>
                                            <ul className="list-group list-group-horizontal position-absolute top-0 end-0 float-end">
                                                <li className="list-group-item border-0 bg-transparent px-2 py-0 text-white">{user.numberOfPhotos} {"photo" + (user.numberOfPhotos > 1 ? "s" : "")}</li>
                                                <li className="list-group-item border-0 bg-transparent px-2 py-0 text-white">Joined {user.createdAt.slice(0, 4)}</li>
                                            </ul>
                                        </div>
                                    </div>
                                    {loggedInUserId === user._id ?
                                        <div className="modal fade p-0" id="cover-modal" tabIndex="-1" aria-labelledby="coverModalLabel" aria-hidden="true">
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
                                                                            <img src={photo.url} className={"image-selector " + ((photo.url === user.coverPhotoUrl) ? " selected-image" : "")} alt="" _id={photo._id} onClick={addImageSelected} />
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
                                                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cover-modal" onClick={updateCoverPhoto}>Select photos</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> : null
                                    }
                                    {loggedInUserId === user._id ?
                                        <div className="modal fade p-0" id="profile-modal" tabIndex="-1" aria-labelledby="profileModalLabel" aria-hidden="true">
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
                                                                            <img src={photo.url} className={"image-selector" + ((photo.url === user.profilePhotoUrl) ? " selected-image" : "")} alt="" _id={photo._id} onClick={addImageSelectedProfile} />
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
                                                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#profile-modal" onClick={updateProfilePhoto}>Select photos</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : null
            }
        </div>
    );
}

UserCover.propTypes = {
    /**
     * User's Data
     */
    userData: PropTypes.object.isRequired
}

UserCover.defaultProps = {
    userData: {
        age: 23,
        coverPhotoUrl: "https://api.qasaqees.tech/public/images/60b7df35f8941e0012b98eec/60b9d824e204b10012339f7a.jpg",
        createdAt: "2021-06-02T19:42:45.388Z",
        currentCity: "",
        description: "Hi I'm a Developer...",
        email: "hakar@flickr.com",
        firstName: "omar",
        homeTown: "",
        id: "60b7df35f8941e0012b98eec",
        isFollowing: false,
        lastName: "elwakil",
        numberOfFollowers: 1,
        numberOfFollowings: 1,
        numberOfPhotos: 10,
        occupation: "",
        profilePhotoUrl: "https://api.qasaqees.tech/public/images/default/8.jpeg",
        showCase: { title: "Showcase", photos: [] },
        updatedAt: "2021-06-04T20:47:03.614Z",
        userName: "hakar",
        __v: 1,
        _id: "60b7df35f8941e0012b98eec"
    }
}

export default UserCover;