import { useState } from 'react';
import PhotoBox from '../PhotoBox/PhotoBox';
import './Main.css';
import axios from 'axios';

const Main = (props) => {

    const uploadPhotosPage = () => window.location.pathname = props.uploadPhotosPage;

    const userToken = props.userToken;
    const [userPhotos, setUserPhotos] = useState(props.userPhotos);
    axios.defaults.baseURL = 'https://api.qasaqees.tech';

    let main = null;

    const deleteHandler = (e, photoId) => {
        let photosArr = [...userPhotos];

        let photoIndex = photosArr.findIndex(el => el._id = photoId);

        photosArr.splice(photoIndex, 1);

        setUserPhotos(photosArr);

        axios.delete(`/photo/${photoId}`, {
            headers: {
                "Authorization": 'Bearer ' + userToken,
                'Content-type': 'application/json'
            }
        })
            .then(res => console.log(res.data))
            .catch(error => console.log(error));
    }

    if (userPhotos.length !== 0) {
        main = (
            <div className="photos">
                {userPhotos.map(photo => {
                    return <PhotoBox
                        photo={photo}
                        key={photo._id}
                        deleteHandler={(e) => deleteHandler(e, photo._id)}
                        userToken={userToken}
                    />;
                })}
            </div>
        );
    } else {
        main = (
            <div className="error-photos row text-center">
                <div className="fs-4 mb-3 mt-3">Got a lot of photos? We've got a lot of space.</div>
                <div className="fs-6 mb-2">You can drag and drop photos anywhere on this page</div>
                <p>or</p>
                <div className=""><button onClick={uploadPhotosPage} className="no-photos-button">Select files to upload</button></div>
            </div>
        );
    }

    return (
        <div className="Main">
            {main}
        </div>
    );
}

export default Main;