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
        <CommentOnMedia photoId={"5349b4ddd2781d08c09890f4"}/>
        <Footer />
        </div> 
        </BrowserRouter>
    );
}

export default MediaProfile;