import React, {useState, useEffect} from 'react';
import { BrowserRouter} from 'react-router-dom';
import UserlessNavigationBar from '../../components/user/UserlessNavigationBar';
import UserCover from '../../components/PhotoStream/UserCover/UserCover'
import Footer from '../../components/static/Footer';
import Navbar from '../../components/Trending/Navbar/Navbar';
import Main from '../../components/PhotoStream/Main/Main';
import './PhotoStream.css'

import axios from 'axios';

const PhotoStream = (props) => {
    
    let main = null, userCover = null;

    const [userPhotos, setUserPhotos] = useState(null);
    const baseUrl = 'https://api.qasaqees.tech';


    const userId = props.match.params.id;

    const homePage = () => window.location.pathname = '/';

    //MockURl: 'https://f6a8e4e3-57ed-4ad8-8204-d6958266d5c5.mock.pstmn.io'
    const [user, setUser] = useState(null);

    useEffect(()=>{
        axios.defaults.baseURL = baseUrl;

        axios.get(`/user/photostream/${userId}`)
          .then(response => response.data)
          .then(data => setUserPhotos(data))
          .catch( error => console.log('Couldnot fetch photos PhotoStream.jsx'));

        axios.get(`/user/about/${userId}`)
          .then(response => response.data)
          .then(data => setUser(data['user']))
          .catch(error => console.log('Couldnot fetch user albums.jsx'));
    },[]);


    if(userPhotos){
        main = <Main userPhotos={userPhotos['photos']} userId={userId} />
    } else {
        main=( 
            <div className="error-photos">
                <h1>Error! Sorry, no data was found! </h1>
                <div className=""><button onClick={homePage} className="no-photos-button">Go to HomePage</button></div>
            </div>
        );
    }

  const dataToSend = [
        { title: "About", path: "/people/"+userId, selected: false },
        { title: "Photostream", path: "/photos/" + userId, selected: true },
        { title: "Albums", path: "/photos/"+userId+"/albums", selected: false },
        { title: "Faves", path: "/photos/"+userId+"/favorites", selected: false },
        { title: "Camera Roll", path: "/cameraroll", selected: false },
    ];

    if(user){
        userCover = <UserCover userData={user}/>;
    }


    return (
        <BrowserRouter>
            <div className="PhotoStream">
                <UserlessNavigationBar/>
                {userCover}
                <Navbar items={dataToSend} />
                {main}
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default PhotoStream;