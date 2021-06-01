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

    const user = JSON.parse(localStorage.getItem['userData']);


    useEffect(()=>{
        axios.defaults.baseURL = 'https://api.qasaqees.tech';
        axios.get(`/user/photostream/${user._id}`,{
            headers: {
              "Authorization": 'Bearer' + localStorage.getItem['accessToken'],
              'Content-type': 'application/json'
            }})
          .then(response => response.data)
          .then(data => setUserPhotos(data))
          .catch( error => console.log('Couldnot fetch photos PhotoStream.jsx'));
    },[]);

    const [userPhotos, setUserPhotos] = useState(null);

    let main = null;
    if(userPhotos){
        main = <Main userPhotos={userPhotos['photos']} userId={user._id} />
    }

    const dataToSend = [
        { title: "About", path: "/about", selected: false },
        { title: "Photostream", path: "/user/photostream/" + user._id, selected: true },
        { title: "Albums", path: "" , selected: false },
        { title: "Faves", path: "", selected: false },
        { title: "Galleries", path: "", selected: false },
        { title: "Groups", path: "", selected: false },
        { title: "Stats", path: "", selected: false },
        { title: "Camera Roll", path: "/user/cameraRoll/" + user._id, selected: false },
    ];

    return (
        <BrowserRouter>
            <div className="PhotoStream">
                <UserlessNavigationBar/>
                <UserCover user={user}/>
                <Navbar items={dataToSend} />
                {main}
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default PhotoStream;