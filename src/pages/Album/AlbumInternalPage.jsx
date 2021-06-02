import React from 'react';
import { BrowserRouter, useParams } from 'react-router-dom';
import Footer from '../../components/static/Footer';
import AlbumInternal from '../../components/Album/AlbumInternal';
import UserlessNavigationBar from '../../components/user/UserlessNavigationBar';

function AboutPage() {
    const { userid , albumid } = useParams();
    return (
        <BrowserRouter>
            <div>
                <title>Album Flickr</title>
                <UserlessNavigationBar />
                <AlbumInternal 
                albumId={albumid}
                creatorId={userid}
                />
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default AboutPage;