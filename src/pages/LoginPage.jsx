import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import UserlessNaviagationBar from '../components/user/UserlessNavigationBar';
import Login from '../components/user/Login';
import Footer from '../components/static/Footer';

function LoginPage() {
    return ( 
    <BrowserRouter>
        <div>
        <title > Flickr Login </title> 
        <UserlessNaviagationBar />
        <Login />
        <Footer />
        </div> 
        </BrowserRouter>
    );
}

export default LoginPage;