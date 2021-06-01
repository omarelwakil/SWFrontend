import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import UserlessNaviagationBar from '../components/user/UserlessNavigationBar';
import ForgotPassword from '../components/user/ForgotPassword';
import Footer from '../components/static/Footer';

function ForgotPasswordPage() {
    return ( 
    <BrowserRouter>
        <div>
        <title > Forgot Password </title> 
        <UserlessNaviagationBar />
        <ForgotPassword />
        <Footer />
        </div> 
        </BrowserRouter>
    );
}

export default ForgotPasswordPage;