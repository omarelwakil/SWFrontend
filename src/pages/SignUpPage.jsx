import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import UserlessNaviagationBar from '../components/user/UserlessNavigationBar';
import SignUp from '../components/user/SignUp';

function SignUpPage() {
    return (
        <BrowserRouter>
            <div>
                <title>Flickr Sign-Up</title>
                <UserlessNaviagationBar />
                <SignUp />
                {/* 1) Needs to add Landing Page Content
                2) Needs to add a Footer */}
            </div>
        </BrowserRouter>
    );
}

export default SignUpPage;