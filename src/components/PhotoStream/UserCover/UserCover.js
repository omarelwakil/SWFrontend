import './UserCover.css';
import UserImage from '../UserImage/UserImage';

const UserCover = (props) => {
    
    const user = props.user;

    return (
        <div className="UserCover">
            <div className="container">
                <div className="row">
                    <div className="col-2 user-photo">
                        <UserImage/>
                    </div>
                    <div className="col-10 user-data text-white">
                        <div className="row user-name">{user.name}</div>
                        <div className="row">
                            <div className="col-lg-2 p-0">{user.email}</div>
                            <div className="col-lg-8 row">
                                <div className="col-6">{user.followers} Followers . {user.following} Following</div>
                                <div className="col-6 text-end hidden">{user.numberOfPhotos} photo</div>
                            </div>
                            <div className="col-2 hidden">Joined {user.date}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserCover;