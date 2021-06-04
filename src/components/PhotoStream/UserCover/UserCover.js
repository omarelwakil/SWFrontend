//TO USE: it takes one prop {userData}
//if you want to use this component then if userJson is like {"user":{----}}
//This component needs the inner user {-----}

import './UserCover.css';
import UserImage from '../UserImage/UserImage';
import {useState} from 'react';

import axios from 'axios';

const UserCover = (props) => {

    const user = props.userData;
    const userData = JSON.parse(localStorage.getItem("userData")) 
    const userID = userData.user._id

    const loggedInUserId = JSON.parse(localStorage.getItem('userData')).user._id;
    const userToken = localStorage.getItem('accessToken');

    const [followed, setFollowed] = useState(false);

    const coverStyling = {
        background: `linear-gradient(180deg, 
            transparent 0, rgba(0, 0, 0, 0.03) 8%,
            rgba(0, 0, 0, 0.11) 21%, rgba(0, 0, 0, 0.61) 78%, 
            rgba(0, 0, 0, 0.7) 95%, rgba(0, 0, 0, 0.7)), 
            url("${user.coverPhotoUrl}") no-repeat center`
    }

    const followUser = () => {

        let userJson = {
            "userId": user._id
        }

        axios.post('/user/followUser',userJson,{
            headers: {
                'Authorization':'Bearer ' + userToken,
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

        axios.post('/user/unfollowUser',userJson,{
            headers: {
                'Authorization':'Bearer ' + userToken,
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
    if(loggedInUserId!==user._id&&!followed){
        followButton = <button onClick={followUser} className="follow-button">Follow</button>
    }else if(loggedInUserId!==user._id&&followed){
        followButton = <button onClick={unFollowUser} className="follow-button">Unfollow</button>
    }


    return (
        <div className="UserCover" style={coverStyling}>
            <div className="container">
                <div className="row">
                    <div className="col-2 user-photo">
                        <UserImage imgUrl={user.profilePhotoUrl} />
                    </div>
                    <div className="col-10 user-data text-white">
                        <div className="row user-name">
                            <span>{user.firstName} {user.lastName} {followButton}</span>
                            
                        </div>
                        <div className="row">
                            <div className="col-lg-2 p-0">{user.userName}</div>
                            <div className="col-lg-8 row">
                                <div className="col-6"><a href={"/people/"+userID+"/contact/rev"}>{user.numberOfFollowers} Followers</a> . <a href={"/people/"+userID+"/contact/"}>{user.numberOfFollowings} Following</a></div>
                                <div className="col-6 text-end hidden">{user.numberOfPhotos} photo</div>
                            </div>
                            <div className="col-2 hidden">Joined {user.createdAt.slice(0, 4)}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserCover;