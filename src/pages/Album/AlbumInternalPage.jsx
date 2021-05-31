import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../../components/static/Footer';
import AlbumInternal from '../../components/Album/AlbumInternal';
import UserlessNavigationBar from '../../components/user/UserlessNavigationBar';

function AboutPage() {
    return (
        <BrowserRouter>
            <div>
                <title>Album Flickr</title>
                <UserlessNavigationBar />
                <AlbumInternal />
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default AboutPage;