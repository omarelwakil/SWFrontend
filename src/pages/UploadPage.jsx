import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import UserlessNavigationBar from '../components/user/UserlessNavigationBar';
import UploadMedia from '../components/user/UploadMedia';

/**
 * Component for rendering UserAboutPage
 * Path => /photos/upload
 *
 * @component
 * @example
 * return (
 *   <UploadPage />
 * )
 */
function UploadPage() {
    return (
        <BrowserRouter>
            <div>
                <title>Ready to upload | Flickr</title>
                <UserlessNavigationBar />
                <UploadMedia />
            </div>
        </BrowserRouter>
    );
}

export default UploadPage;