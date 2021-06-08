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
/**
 * Component that renders page of a specific photo 
 * Takes the photo's id as a route parameter
 * Internal components:
 *      UserlessNavigationBar
 *      Navbar
 *      PhotoDiv
 *      PhotoMain
 *      Footer
 * @component 
 * @type Component
 * @returns (
 *      <PhotoPage />
 * )
 */

const PhotoPage = props => {

    const [photo, setPhoto] = useState(null);

    //const user = JSON.parse(localStorage.getItem('userData')).user;
    const userToken = localStorage.getItem('accessToken');
    const baseUrl = 'https://api.qasaqees.tech';

    const photoId = props.match.params.id;

    const [user, setUser] = useState(null);
    //const loggedInUserId = photo.creator._id;

    /**
     * Redirects to homepage
     */
    const homePage = () => window.location.pathname = '/';

    //MockURl: 'https://f6a8e4e3-57ed-4ad8-8204-d6958266d5c5.mock.pstmn.io'
    let main = null;
    
    /**
     * Call back function in useEffect used to get details of a specific photo
     */
    useEffect(() => {
        axios.defaults.baseURL = baseUrl;
        
        let bodyFormData = {
            "photoId":photoId
        }

        axios.post(`/photo/getDetails`, bodyFormData, {
            headers: {
                "Authorization": 'Bearer ' + userToken                
            }
        })
            .then(response => response.data)
            .then(data => {
                console.log(data);
                setPhoto(data);
                setUser(data.creator)
            })
            .catch(error => console.log(error));
    }, [photoId, userToken]);




    if (photo&&user) {
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