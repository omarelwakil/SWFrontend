import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import UserlessNaviagationBar from '../components/user/UserlessNavigationBar';
import SignUp from '../components/user/SignUp/SignUp';
import Footer from '../components/static/Footer';

/**
 * Component for rendering Sign Up Page
 * Path => /sign-up
 * @component
 * @example
 * return (
 *   <SignUpPage />
 * )
 */
function SignUpPage() {
    return (
        <BrowserRouter>
            <div>
                <title>Flickr Sign-Up</title>
                <UserlessNaviagationBar />
                <SignUp />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default SignUpPage;