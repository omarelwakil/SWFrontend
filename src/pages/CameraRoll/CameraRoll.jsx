import React, {useState, useEffect} from 'react';
import { BrowserRouter} from 'react-router-dom';
import UserlessNavigationBar from '../../components/user/UserlessNavigationBar';
import UserCover from '../../components/PhotoStream/UserCover/UserCover';
import Footer from '../../components/static/Footer';
import Navbar from '../../components/Trending/Navbar/Navbar';
import Main from '../../components/CameraRoll/Main/Main';
import './CameraRoll.css';

import axios from 'axios';

const CameraRoll = () => {

    const user = JSON.parse(localStorage.getItem['userData']);
    //  {
    //     id: '60b466483892750012b61753',
    //     name: 'ahmed hany',
    //     email: 'ahmed.haanyyy',
    //     followers: 0,
    //     following: 1,
    //     numberOfPhotos: 1,
    //     date: '2021'
    // }

    useEffect(()=>{
        axios.defaults.baseURL = 'https://api.qasaqees.tech';
        axios.get(`/user/cameraRoll/${user._id}`,{
            headers: {
              "Authorization": 'Bearer' + localStorage.getItem['accessToken'],
              'Content-type': 'application/json'
            }})
          .then(response => response.data)
          .then(data => setUserPhotos(data))
          .catch( error => console.log('Couldnot fetch photos CameraRoll.jsx'));
    },[]);

    const [userPhotos, setUserPhotos] = useState(null);

    let main = null;
    if(userPhotos){
        main = <Main userPhotos={userPhotos['cameraRoll']} userId={user._id} />
    }


    const dataToSend = [
        { title: "About", path: "/about", selected: false },
        { title: "Photostream", path: "/user/photostream/" + user._id, selected: false },
        { title: "Albums", path: "" , selected: false },
        { title: "Faves", path: "", selected: false },
        { title: "Galleries", path: "", selected: false },
        { title: "Groups", path: "", selected: false },
        { title: "Stats", path: "", selected: false },
        { title: "Camera Roll", path: "/user/cameraRoll/" + user._id, selected: true },
    ];

    return (
        <BrowserRouter>
            <div className="CameraRoll">
                <UserlessNavigationBar/>
                <UserCover user={user}/>
                <Navbar items={dataToSend} />
                {main}
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default CameraRoll;