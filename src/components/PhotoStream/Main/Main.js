import './Main.css'
import { Link} from 'react-router-dom';
import Button from '../../Photo/Button/Button';
import PhotoBox from '../PhotoBox/PhotoBox';
import { useState } from 'react';

const Main = (props) => {


    const userPhotos = props.userPhotos;

    const goToCameraRoll = () => window.location.pathname = `/user/cameraRoll/${props.userId}`

    let main = null;

    if(userPhotos){
        main = (
            <div className="photos">
                {userPhotos.map(photo => {
                    return <PhotoBox  
                    key={photo._id}
                    photo={photo} 
                    height="320px" 
                    width="240px"/>;
                })}
            </div>
        );
    } else {
        main = (
            <div className="row text-center">
                <div className="fs-4 mb-3 mt-3">You have no public photos</div>
                <div className="fs-6 mb-2">Your photostream is your public-facing portfolio. Set your photos to public using the Camera Roll to populate your photostream.</div>
                <div className=""><button onClick={goToCameraRoll} className="button">Go to Camera Roll</button></div>
            </div>
        );
    }

    return (
        <div className="Main container">
            {main}
        </div>
    );
}

export default Main;