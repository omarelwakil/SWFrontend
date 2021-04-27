import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Guidelines from '../components/static/Guidelines';

function GuidelinesPage() {
    return (
        <BrowserRouter>
            <div>
                <title>Flickr Community Guidelines | Flickr</title>
                {/* We will add when Elwakil finishes Navigation Bar */}
                <Guidelines />
                {/* To Be added Guidelines Component */}
                {/* Will be add when mousa finishes footer component */}
            </div>
        </BrowserRouter>
    );
}

export default GuidelinesPage;