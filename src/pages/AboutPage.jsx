import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import About from '../components/static/About';
import UserlessNavigationBar from '../components/user/UserlessNavigationBar';

function AboutPage() {
    return (
        <BrowserRouter>
            <div>
                <title>About Flickr</title>
                <UserlessNavigationBar />
                <About/>
            </div>
        </BrowserRouter>
    );
}

export default AboutPage;