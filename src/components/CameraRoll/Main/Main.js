import { useState } from 'react';
import PhotoBox from '../PhotoBox/PhotoBox';
import './Main.css';
import axios from 'axios';
/**
 * Component that renders main content of CameraRollPage
 * Internal components:
 *      PhotoBox
 * @component
 * @type Component
 * 
 * @param {Array} userPhotos Array of user photos
 * @param {string} userId The user's id   
 * @param {string} userToken The user's access token
 * @param {string} uploadPhotosPage Url of upload photos page
 * @returns 
 *          <Main 
 *              userPhotos={userPhotos.cameraRoll} 
 *              userId={user._id} 
 *              userToken={userToken} 
 *              uploadPhotosPage={uploadPhotosPage} />
 */
const Main = (props) => {
    /**
     * Redirects to uploadPhoto page
     */
    const uploadPhotosPage = () => window.location.pathname = props.uploadPhotosPage;

    const userToken = props.userToken;
    const [userPhotos, setUserPhotos] = useState(props.userPhotos);
    axios.defaults.baseURL = 'https://api.qasaqees.tech';

    let main = null;

    /**
     * Deletes a photo
     * @param {Event} e event 
     * @param {string} photoId Id of the photo to be deleted 
     * 
     */
    const deleteHandler = (e, photoId) => {
        let photosArr = [...userPhotos];

        let photoIndex = photosArr.findIndex(el => el._id = photoId);

        photosArr.splice(photoIndex, 1);

        

        axios.delete(`/photo/delete/${photoId}`, {photoId: photoId}, {
            headers: {
                "Authorization": 'Bearer ' + userToken,
                'Content-type': 'application/json'
            },
            params: {
                photoId: photoId
            }
        })
        .then(res => console.log(res.data))
        .catch(error => console.log(error));

        setUserPhotos(photosArr);
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