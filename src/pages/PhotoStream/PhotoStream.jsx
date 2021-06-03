import React, {useState, useEffect} from 'react';
import { BrowserRouter} from 'react-router-dom';
import UserlessNavigationBar from '../../components/user/UserlessNavigationBar';
import UserCover from '../../components/PhotoStream/UserCover/UserCover'
import Footer from '../../components/static/Footer';
import Navbar from '../../components/Trending/Navbar/Navbar';
import Main from '../../components/PhotoStream/Main/Main';
import './PhotoStream.css'

import axios from 'axios';

const PhotoStream = () => {
    
    let main = null;

    const [userPhotos, setUserPhotos] = useState(null);
    
    const user = JSON.parse(localStorage.getItem('userData')).user;
    const baseUrl = 'https://api.qasaqees.tech';

    const homePage = () => window.location.pathname = '/';

    //MockURl: https://f6a8e4e3-57ed-4ad8-8204-d6958266d5c5.mock.pstmn.io

    useEffect(()=>{
        axios.defaults.baseURL = baseUrl;

        axios.get(`/user/photostream/${user._id}`)
          .then(response => response.data)
          .then(data => setUserPhotos(data))
          .catch( error => console.log('Couldnot fetch photos PhotoStream.jsx'));
    },[]);


    if(userPhotos){
        main = <Main userPhotos={userPhotos['photos']} userId={user._id} />
    } else {
        main=( 
            <div className="error-photos">
                <h1>Error! Sorry, no data was found! </h1>
                <div className=""><button onClick={homePage} className="no-photos-button">Go to HomePage</button></div>
            </div>
        );
    }

  const dataToSend = [
        { title: "About", path: "/people/"+user._id, selected: false },
        { title: "Photostream", path: "/photos/" + user._id, selected: true },
        { title: "Albums", path: "/photos/"+user._id+"/albums", selected: false },
        { title: "Faves", path: "/photos/"+user._id+"/favorites", selected: false },
        { title: "Camera Roll", path: "/cameraroll", selected: false },
    ];

    return (
        <BrowserRouter>
            <div className="PhotoStream">
                <UserlessNavigationBar/>
                <UserCover userData={user}/>
                <Navbar items={dataToSend} />
                {main}
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default PhotoStream;