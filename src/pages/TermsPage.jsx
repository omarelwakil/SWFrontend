import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import UserlessNaviagationBar from '../components/user/UserlessNavigationBar';
import Terms from '../components/static/Terms';
import Footer from '../components/static/Footer';


/**
 * Component for flickr TermsPage.
 * Path => /help/terms
 * @component
 * @example
 * return (
 *   <TermsPage />
 * )
 */


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