import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../components/static/Footer';
import Faves from '../components/user/Faves';
import UserCover from '../components/PhotoStream/UserCover/UserCover'
import UserlessNavigationBar from '../components/user/UserlessNavigationBar';
//import UserCover from '../components/PhotoStream/UserCover/UserCover'

function FavesPage() {
    const user = JSON.parse(localStorage.getItem('userData')).user;
    return (
        <BrowserRouter>
            <div>
                <title>Favourites | Flickr</title>
                <UserlessNavigationBar />
                <UserCover userData={user}/>
                {/* <UserCover /> */}
                <Faves/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default FavesPage;