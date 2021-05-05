import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import UserlessNaviagationBar from '../components/user/UserlessNavigationBar';
import Cookies from '../components/static/Cookies';

function CookiesPage() {
    return (
        <BrowserRouter>
            <div>
                <title>Help | Flickr</title>
                <UserlessNaviagationBar />
                <Cookies />
                {/*footer*/}
            </div>
        </BrowserRouter>
    );
}

export default CookiesPage;