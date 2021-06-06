//TO USE: takes 2 props imgUrl & width(optional)
import './UserImage.css'

const UserImage = (props) => {

    const imgUrl = props.imgUrl;

    return (
        <div className="UserImage">
            <img src={imgUrl} className="w-75" alt="" />
        </div>
    );
}

export default UserImage;