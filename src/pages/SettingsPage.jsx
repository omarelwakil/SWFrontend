import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import UserlessNavigationBar from '../components/user/UserlessNavigationBar';
import UserSettings from '../components/user/UserSettings';
import Footer from '../components/static/Footer';
import Navbar from '../components/Trending/Navbar/Navbar';

function SettingsPage() {
    const dataToSend = [
        { title: "Personal Information", path: "/help/terms", selected: true }
    ];
    const position = "position-static";
    return (
        <BrowserRouter>
            <div>
                <title>Account settings | Flickr</title>
                <UserlessNavigationBar />
                <div className="bg-white ps-5">
                    <h1 className="header-title mb-0">Policies &amp; Guidelines</h1>
                </div>
                <Navbar items={dataToSend} position={position} />
                <UserSettings />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default SettingsPage;