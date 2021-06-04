//TO USE: it takes one prop {userData}
//if you want to use this component then if userJson is like {"user":{----}}
//This component needs the inner user {-----}

import './UserCover.css';
import UserImage from '../UserImage/UserImage';
import EditIcon from '@material-ui/icons/Edit';
import { useState, useEffect } from 'react';

import axios from 'axios';

const UserCover = (props) => {

    const [selectedImages, setSelectedImages] = useState(null);
    const [userPhotostream, setUserPhotostream] = useState({ "photos": [] });

    const [loggedInUserId, setLoggedInUserId] = useState(null);
    if (JSON.parse(localStorage.getItem('userData')) !== null)
        setLoggedInUserId(JSON.parse(localStorage.getItem('userData')).user._id);


    const user = props.userData;
    const userData = JSON.parse(localStorage.getItem("userData"))
    const userID = userData.user._id

    const userToken = localStorage.getItem('accessToken');

    const [followed, setFollowed] = useState(null);
    useEffect(() => {
        if (userToken !== null) {
            setFollowed(user.isFollowing);
        }
    }, [user.isFollowing, userToken]);

    const coverStyling = {
        background: `linear-gradient(180deg, 
            transparent 0, rgba(0, 0, 0, 0.03) 8%,
            rgba(0, 0, 0, 0.11) 21%, rgba(0, 0, 0, 0.61) 78%, 
            rgba(0, 0, 0, 0.7) 95%, rgba(0, 0, 0, 0.7)), 
            url("${user.coverPhotoUrl}") no-repeat center`,
        "background-size": `cover`
    }

    const getPhotoStream = (e) => {
        if (loggedInUserId === user._id) {
            axios.defaults.baseURL = "https://qasaqees.tech/api";
            axios.get('/user/photostream/' + userData.user._id, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
                }
            })
                .then((response) => {
                    for (let i = 0; i < userData.user.showCase.photos.length; i++) {
                        for (let j = 0; j < response.data.photos.length; j++) {
                            if (response.data.photos[j]._id === userData.user.showCase.photos[i]._id) {
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
                    console.log("Error occured while getting photostream...");
                });
        }
    };

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
                    window.location.reload();
                }).catch(error => {
                    if (error.response.status === 401) {
                        localStorage.clear();
                        window.location.href = "/login";
                    }
                })
        }
    }

    // eslint-disable-next-line no-extend-native
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
        <div id="user-cover">
            <div className="container-fluid position-relative">
                <div id="edit-cover-photo" className="position-absolute end-0 top-0 m-3" data-bs-toggle="modal" data-bs-target="#cover-modal" onClick={getPhotoStream}>
                    <EditIcon id="edit-cover-icon" />
                </div>
            </div>
            <div className="UserCover" style={coverStyling}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2 user-photo d-flex justify-content-center mb-2">
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
                                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cover-modal" onClick={updateCoverPhoto}>Select photos</button>
                                            </div>
                                        </div>
                                    </div>
                                </div> : null
                            }
                            {/* {loggedInUserId === user._id ?
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
                                                                    <img src={photo.url} className={"image-selector" + (photo.selected ? " selected-image" : "")} alt="" _id={photo._id} onClick={addImageSelectedProfile} />
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
                                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#profile-modal" onClick={updateCoverPhoto}>Select photos</button>
                                            </div>
                                        </div>
                                    </div>
                                </div> : null
                            } */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserCover;