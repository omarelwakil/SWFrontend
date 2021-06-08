import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import UserlessNaviagationBar from '../components/user/UserlessNavigationBar';
import Privacy from '../components/static/Privacy';
import Footer from '../components/static/Footer';

/**
 * Component for rendering flickr Privacy page
 * Path => /help/privacy
 * @component
 * @example
 * return (
 *   <PrivacyPage />
 * )
 */
function PrivacyPage() {
    return (
        <BrowserRouter>
            <div>
                <title>Help | Flickr</title>
                <UserlessNaviagationBar />
                <Privacy />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default PrivacyPage;