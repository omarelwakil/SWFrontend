import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import UserlessNaviagationBar from '../components/user/UserlessNavigationBar';
import Terms from '../components/static/Terms';
import Footer from '../components/static/Footer';

function TermsPage() {
    return (
        <BrowserRouter>
            <div>
                <title>Help | Flickr</title>
                <UserlessNaviagationBar />
                <Terms />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default TermsPage;