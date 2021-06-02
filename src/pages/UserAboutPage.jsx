import React from 'react';
import { BrowserRouter, useParams } from 'react-router-dom';

import UserlessNavigationBar from '../components/user/UserlessNavigationBar';
import UserAbout from '../components/user/UserAbout';
import Footer from '../components/static/Footer';

function SettingsPage() {
    const { id } = useParams();
    return (
        <BrowserRouter>
            <div>
                <title>About | Flickr</title>
                <UserlessNavigationBar />
                <UserAbout userInfo={id} />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default SettingsPage;