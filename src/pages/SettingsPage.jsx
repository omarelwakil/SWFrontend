import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import UserlessNavigationBar from '../components/user/UserlessNavigationBar';
import UserSettings from '../components/user/UserSettings';
import Footer from '../components/static/Footer';

function SettingsPage() {
    return (
        <BrowserRouter>
            <div>
                <title>Account settings | Flickr</title>
                <UserlessNavigationBar />
                <UserSettings />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default SettingsPage;