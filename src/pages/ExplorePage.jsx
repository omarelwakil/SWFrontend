import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import UserlessNaviagationBar from '../components/user/UserlessNavigationBar';
import Explore from '../components/static/Explore';
import Footer from '../components/static/Footer';

function ExplorePage() {
    return (
        <BrowserRouter>
            <div>
                <title>Explore | Flickr</title>
                <UserlessNaviagationBar />
                {/* We will add Explore Trending Events Nabigation Bar */}
                <Explore />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default ExplorePage;
