import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Guidelines from '../components/static/Guidelines';
import UserlessNavigationBar from '../components/user/UserlessNavigationBar';

function GuidelinesPage() {
    return (
        <BrowserRouter>
            <div>
                <title>Flickr Community Guidelines | Flickr</title>
                <UserlessNavigationBar />
                <Guidelines />
                {/* Will be add when mousa finishes footer component */}
            </div>
        </BrowserRouter>
    );
}

export default GuidelinesPage;