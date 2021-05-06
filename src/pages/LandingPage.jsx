import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import LandingNavigationBar from '../components/static/LandingNavigationBar';
import Footer from '../components/static/Footer';
import LandingSlider from '../components/static/LandingSlider';

function LandingPage() {
    return (
        <BrowserRouter>
            <div>
                <title>Find your inspiration. | Flickr</title>
                <LandingNavigationBar />
                <LandingSlider />
				<Footer />
            </div>
        </BrowserRouter>
    );
}

export default LandingPage;