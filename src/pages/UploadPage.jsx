import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import UserlessNavigationBar from '../components/user/UserlessNavigationBar';
import UploadMedia from '../components/user/UploadMedia';
import Footer from '../components/static/Footer';

function UploadPage() {
    return (
        <BrowserRouter>
            <div>
                <title>Ready to upload | Flickr</title>
                <UserlessNavigationBar />
                <UploadMedia />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default UploadPage;