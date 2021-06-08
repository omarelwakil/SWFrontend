import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import UserlessNavigationBar from '../../components/user/UserlessNavigationBar';
import UserCover from '../../components/PhotoStream/UserCover/UserCover';
import Footer from '../../components/static/Footer';
import Navbar from '../../components/Trending/Navbar/Navbar';
import Main from '../../components/CameraRoll/Main/Main';
import './CameraRoll.css';

import axios from 'axios';
/**
 * Component that renders page of CameraRoll for a specific user
 * Takes no parameters
 * Internal components:
 *      UserlessNavigationBar
 *      PhotoStream/UserCover
 *      Navbar
 *      Main --> content of camera roll (edit or upload photos)
 *      Footer
 * @component 
 * @type Component
 * 
 * @returns (
 *      <CameraRoll />
 * )
 */
const CameraRoll = () => {

    let main = null;

    const [userPhotos, setUserPhotos] = useState(null);
    /**
     * Redirects to upload photos page
     */
    const uploadPhotosPage = '/photos/upload';

    /**
     * Redirects to homepage
     */
    const homePage = () => window.location.pathname = '/';

    const user = JSON.parse(localStorage.getItem('userData')).user;
    const userToken = localStorage.getItem('accessToken');

    const baseUrl = 'https://api.qasaqees.tech';

    //MockURl: 'https://f6a8e4e3-57ed-4ad8-8204-d6958266d5c5.mock.pstmn.io'

    useEffect(() => {
        axios.defaults.baseURL = baseUrl;
        axios.get(`/user/cameraRoll`, {
            headers: {
                "Authorization": 'Bearer ' + userToken,
                'Content-type': 'application/json'
            }
        })
            .then(response => response.data)
            .then(data => { setUserPhotos(data); console.log(data)})
            .catch(error => console.log('Couldnot fetch photos CameraRoll.jsx'));
    }, [userToken]);



    if (userPhotos) {
        main = <Main userPhotos={userPhotos['cameraRoll']} userId={user._id} userToken={userToken} uploadPhotosPage={uploadPhotosPage} />
    } else {
        main = (
            <div className="error-photos">
                <h1>Error! Sorry, no data was found! </h1>
                <div className=""><button onClick={homePage} className="no-photos-button">Go to HomePage</button></div>
            </div>
        );
    }


    const dataToSend = [
        { title: "About", path: "/people/" + user._id, selected: false },
        { title: "Photostream", path: "/photos/" + user._id, selected: false },
        { title: "Albums", path: "/photos/"+user._id+"/albums", selected: false },
        { title: "Faves", path: "/photos/"+user._id+"/favorites", selected: false },
        { title: "Camera Roll", path: "/cameraroll", selected: true },
    ];

    return (
        <BrowserRouter>
            <div className="CameraRoll">
                <UserlessNavigationBar />
                <UserCover userData={user} />
                <Navbar items={dataToSend} />
                {main}
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default CameraRoll;