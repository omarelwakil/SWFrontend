import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import LandingNavigationBar from '../components/static/LandingNavigationBar';

function LandingPage() {
    return (
        <BrowserRouter>
            <div>
                <title>Find your inspiration. | Flickr</title>
                <LandingNavigationBar />
                {/* 1) Needs to add Landing Page Content
                2) Needs to add a Footer */}
            </div>
        </BrowserRouter>
    );
}

export default LandingPage;