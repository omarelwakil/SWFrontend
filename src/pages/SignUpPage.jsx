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
                {/*footer*/}
            </div>
        </BrowserRouter>
    );
}

export default SignUpPage;