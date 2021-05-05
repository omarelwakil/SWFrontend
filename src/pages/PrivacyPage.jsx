import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import UserlessNaviagationBar from '../components/user/UserlessNavigationBar';
import Privacy from '../components/static/Privacy';

function PrivacyPage() {
    return (
        <BrowserRouter>
            <div>
                <title>Help | Flickr</title>
                <UserlessNaviagationBar />
                <Privacy />
                {/*footer*/}
            </div>
        </BrowserRouter>
    );
}

export default PrivacyPage;