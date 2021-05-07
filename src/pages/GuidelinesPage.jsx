import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Guidelines from '../components/static/Guidelines';
import UserlessNavigationBar from '../components/user/UserlessNavigationBar';
import Footer from '../components/static/Footer';

function GuidelinesPage() {
    return (
        <BrowserRouter>
            <div>
                <title>Flickr Community Guidelines | Flickr</title>
                <UserlessNavigationBar />
                <Guidelines />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default GuidelinesPage;