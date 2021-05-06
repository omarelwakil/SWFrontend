import React from 'react';

import UserlessNavigationBar from '../components/user/UserlessNavigationBar';
import ChangePassword from '../components/user/ChangePassword';
import Footer from '../components/static/Footer';

function ChangePasswordPage() {
    return (
        <div>
            <title>Change Password | Flickr</title>
            <UserlessNavigationBar />
            <ChangePassword />
            <Footer />
        </div>
    );
}

export default ChangePasswordPage;