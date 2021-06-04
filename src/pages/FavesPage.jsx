import { React, useState, useEffect } from 'react';
import { BrowserRouter, useParams } from 'react-router-dom';
import axios from 'axios';

import Footer from '../components/static/Footer';
import Faves from '../components/user/Faves';
import UserCover from '../components/PhotoStream/UserCover/UserCover'
import UserlessNavigationBar from '../components/user/UserlessNavigationBar';
import Navbar from '../components/Trending/Navbar/Navbar';

function FavesPage() {
    const user = JSON.parse(localStorage.getItem('userData')).user;
    const { id } = useParams();
    const [userToUse, setUserToUse] = useState(null);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        if (id !== user._id) {
            axios.defaults.baseURL = "https://qasaqees.tech/api";
            axios.get('/user/about/' + id)
                .then((response) => {
                    setUserData({ ...response.data.user, "sameUser": false });
                    setUserToUse(response.data.user._id);
                    console.log(response.data.user._id);
                })
                .catch((error) => {
                    console.log("Error occured while getting photostream...");
                });
        } else {
            setUserData({ ...user, "sameUser": true });
            setUserToUse(user._id);
        }
    }, [id]);


    const dataToSend = [
        { title: "About", path: "/people/" + userToUse, selected: false },
        { title: "Photostream", path: "/photos/" + userToUse, selected: false },
        { title: "Albums", path: "/photos/" + userToUse + "/albums", selected: false },
        { title: "Faves", path: "/photos/" + userToUse + "/favorites", selected: true }
    ];
    const dataToSendSameUser = [
        { title: "About", path: "/people/" + userToUse, selected: false },
        { title: "Photostream", path: "/photos/" + userToUse, selected: false },
        { title: "Albums", path: "/photos/" + userToUse + "/albums", selected: false },
        { title: "Faves", path: "/photos/" + userToUse + "/favorites", selected: true },
        { title: "Camera Roll", path: "/cameraroll", selected: false }
    ];
    const position = "position-static";
    return (
        <BrowserRouter>
            <div>
                <title>Favourites | Flickr</title>
                <UserlessNavigationBar />
                {userData !== null ?
                    <UserCover userData={userData} /> : null
                }
                {userToUse !== null ?
                    <div>
                        {userToUse === true ?
                            <Navbar items={dataToSendSameUser} position={position} />
                            : <Navbar items={dataToSend} position={position} />
                        }
                    </div> : null
                }
                {userData !== null ?
                    <Faves userToSend={userData} /> : null
                }
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default FavesPage;