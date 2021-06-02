//TO USE: takes 2 props imgUrl & width(optional)
import './UserImage.css'

const UserImage = (props) => {

    const imgUrl = props.imgUrl;

    return (
        <div className="UserImage">
            <img src={imgUrl} style={{width: props.width}}/>
        </div>
    );
}

export default UserImage;