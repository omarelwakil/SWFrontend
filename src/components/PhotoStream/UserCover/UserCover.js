//TO USE: it takes one prop {userData}
//if you want to use this component then if userJson is like {"user":{----}}
//This component needs the inner user {-----}

import './UserCover.css';
import UserImage from '../UserImage/UserImage';
import { useState, useEffect } from 'react';

import axios from 'axios';

const UserCover = (props) => {

    const user = props.userData;
    const userData = JSON.parse(localStorage.getItem("userData"))
    const userID = userData.user._id

    const loggedInUserId = JSON.parse(localStorage.getItem('userData')).user._id;
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
            url("${user.coverPhotoUrl}") no-repeat center`
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

                        {/* <div className="row">
                            <div className="col-lg-2 p-0">
                                {user.userName}
                            </div>
                            <div className="col-lg-8 row">
                                <div className="col-6"><a href={"/people/" + userID + "/contact/rev"}>{user.numberOfFollowers} Followers</a> <span className="fw-bolder">.</span> <a href={"/people/" + userID + "/contact/"}>{user.numberOfFollowings} Following</a></div>
                                <div className="col-6 text-end hidden">{user.numberOfPhotos} photo</div>
                            </div>
                            <div className="col-2 hidden">Joined {user.createdAt.slice(0, 4)}</div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserCover;