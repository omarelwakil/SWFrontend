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
        <CommentOnMedia photoId={"60b9bfcab4298c001249955b"}/>
        </div> 
        </BrowserRouter>
    );
}

export default MediaProfile;