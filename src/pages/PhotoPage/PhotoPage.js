//Sample URL: https://www.flickr.com/photos/192784739@N02/51140121587/in/album-72157719034684909/
//View a Specific photo in a specific album
import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import UserlessNavigationBar from '../../components/user/UserlessNavigationBar';
import PhotoDiv from '../../components/Photo/PhotoDiv/PhotoDiv';
import PhotoMain from '../../components/Photo/PhotoMain/PhotoMain';
import Footer from '../../components/static/Footer';
import './PhotoPage.css';

import axios from 'axios';

const PhotoPage = props => {

    const [photo, setPhoto] = useState(null);

    const user = JSON.parse(localStorage.getItem('userData')).user;
    const userToken = localStorage.getItem('accessToken');
    const baseUrl = 'https://api.qasaqees.tech';

    const homePage = () => window.location.pathname = '/';

    //MockURl: https://f6a8e4e3-57ed-4ad8-8204-d6958266d5c5.mock.pstmn.io
    const photoId = props.match.params.id;
    let main = null;

    useEffect(() => {
        axios.defaults.baseURL = baseUrl;
        axios.get(`/photo/getDetails`, {
            headers: {
                "Authorization": 'Bearer ' + userToken,
                'Content-type': 'application/json'
            },
            params: {
                photoId: photoId
            }
        })
            .then(response => response.data)
            .then(data => setPhoto(data))
            .catch(error => console.log(error));
    }, []);




    if (photo) {
        main = (
            <React.Fragment>
                <PhotoDiv url={photo.url} photoId={photoId} userId={user._id} />
                <PhotoMain photo={photo} user={user} />
            </React.Fragment>
        );
    } else {
        main = (
            <div className="error-photos">
                <h1>Error! Sorry, no data was found! </h1>
                <div><button onClick={homePage} className="no-photos-button">Go to HomePage</button></div>
            </div>
        );
    }


    return (
        <BrowserRouter>
            <div className="PhotoPage">
                <UserlessNavigationBar />
                {main}
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default PhotoPage;