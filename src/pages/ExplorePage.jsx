import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import UserlessNaviagationBar from '../components/user/UserlessNavigationBar';
import Explore from '../components/static/Explore';
import Footer from '../components/static/Footer';
import Navbar from '../components/Trending/Navbar/Navbar'

function ExplorePage() {

    const dataToSend = [
        { title: "Explore", path: "/explore", selected: true },
        { title: "Trending", path: "/photos/tags", selected: false }
    ];
    return (
        <BrowserRouter>
            <div>
                <title>Explore | Flickr</title>
                <UserlessNaviagationBar />
                <Navbar items={dataToSend} />
                <Explore />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default ExplorePage;
