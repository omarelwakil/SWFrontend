import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import UserlessNaviagationBar from '../components/user/UserlessNavigationBar';
import Cookies from '../components/static/Cookies';
import Footer from '../components/static/Footer';

function CookiesPage() {
    return (
        <BrowserRouter>
            <div>
                <title>Help | Flickr</title>
                <UserlessNaviagationBar />
                <Cookies />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default CookiesPage;