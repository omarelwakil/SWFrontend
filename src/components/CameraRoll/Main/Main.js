import { useState } from 'react';
import PhotoBox from '../PhotoBox/PhotoBox';
import './Main.css';
import axios from 'axios';

const Main = (props) => {

    const [userPhotos, setUserPhotos] = useState(props.userPhotos); 
    axios.defaults.baseURL = 'https://api.qasaqees.tech';
    let main = null;

    const deleteHandler = (e, photoId) => {
        let photosArr = [...userPhotos];

        let photoIndex = photosArr.findIndex(el => el._id = photoId);

        photosArr.splice(photoIndex, 1);
        
        setUserPhotos(photosArr);

        axios.delete(`/photo/${photoId}`,{
            headers: {
              "Authorization": 'Bearer' + localStorage.getItem['accessToken'],
              'Content-type': 'application/json'
            }})
        .then(res => console.log(res.data))
        .catch(error => console.log(error));
    }

    if(userPhotos){
        main = (
            <div className="photos">
                {userPhotos.map(photo => {
                    return <PhotoBox
                        photo={photo}
                        key={photo._id}
                        deleteHandler={(e) => deleteHandler(e,photo._id)}
                    />;
                })}
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