//TO USE: takes 2 props imgUrl & width(optional)
import './UserImage.css'

/**
 * Component that renders a profile image for a user
 * No internal components
 * @component 
 * @type Component
 * 
 * @param {string} imgUrl Url of profile photo for a specific user
 * @returns <UserImage 
 *                    imgUrl={user.profilePhotoUrl} />
 */

const UserImage = (props) => {

    const imgUrl = props.imgUrl;

    return (
        <div className="UserImage">
            <img src={imgUrl} className="w-75" alt="" />
        </div>
    );
}

export default UserImage;