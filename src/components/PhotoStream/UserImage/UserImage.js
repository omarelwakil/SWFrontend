import './UserImage.css'

const UserImage = (props) => {

    const imgSource = "https://combo.staticflickr.com/pw/images/buddyicon03_l.png#192784739@N02";

    return (
        <div className="UserImage">
            <img src={imgSource} style={{width: props.width}}/>
        </div>
    );
}

export default UserImage;