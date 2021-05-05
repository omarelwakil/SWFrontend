import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import UserlessNaviagationBar from '../components/user/UserlessNavigationBar';
import Terms from '../components/static/Terms';

function TermsPage() {
    return (
        <BrowserRouter>
            <div>
                <title>Help | Flickr</title>
                <UserlessNaviagationBar />
                <Terms />
                {/*footer*/}
            </div>
        </BrowserRouter>
    );
}

export default TermsPage;