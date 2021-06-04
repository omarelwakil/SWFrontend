//TO USE: it takes one prop {userData}
//if you want to use this component then if userJson is like {"user":{----}}
//This component needs the inner user {-----}

import './UserCover.css';
import UserImage from '../UserImage/UserImage';

const UserCover = (props) => {

    const user = props.userData;


    const coverStyling = {
        background: `linear-gradient(180deg, 
            transparent 0, rgba(0, 0, 0, 0.03) 8%,
            rgba(0, 0, 0, 0.11) 21%, rgba(0, 0, 0, 0.61) 78%, 
            rgba(0, 0, 0, 0.7) 95%, rgba(0, 0, 0, 0.7)), 
            url("${user.coverPhotoUrl}") no-repeat center`
    }


    return (
        <div className="UserCover" style={coverStyling}>
            <div className="container">
                <div className="row">
                    <div className="col-2 user-photo">
                        <UserImage imgUrl={user.profilePhotoUrl} />
                    </div>
                    <div className="col-10 user-data text-white">
                        <div className="row user-name">{user.firstName} {user.lastName}</div>
                        <div className="row">
                            <div className="col-lg-2 p-0">{user.userName}</div>
                            <div className="col-lg-8 row">
                                <div className="col-6">{user.numberOfFollowers} Followers . {user.numberOfFollowings} Following</div>
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