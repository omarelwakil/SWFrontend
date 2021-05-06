import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Explore from '../components/static/Explore';

function ExplorePage() {
    return (
        <BrowserRouter>
            <div>
                <title>Explore | Flickr</title>
                {/* We will add when Elwakil finishes Navigation Bar */}
                {/* We will add Explore Trending Events Nabigation Bar */}
                <Explore />
                {/* To Be added Explore Component */}
                {/* Will be add when mousa finishes footer component */}
            </div>
        </BrowserRouter>
    );
}

export default ExplorePage;
