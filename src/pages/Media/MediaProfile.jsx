import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import UserlessNaviagationBar from '../../components/user/UserlessNavigationBar';
import CommentOnMedia from '../../components/media/CommentOnMedia';
import Footer from '../../components/static/Footer';

function MediaProfile() {
    return ( 
    <BrowserRouter>
        <div>
        <title > photo </title> 
        <UserlessNaviagationBar />
        <CommentOnMedia />
        <Footer />
        </div> 
        </BrowserRouter>
    );
}

export default MediaProfile;