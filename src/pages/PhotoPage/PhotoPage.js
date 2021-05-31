//Sample URL: https://www.flickr.com/photos/192784739@N02/51140121587/in/album-72157719034684909/
//View a Specific photo in a specific album
import React from 'react';
import { BrowserRouter, withRouter} from 'react-router-dom';
import UserlessNavigationBar from '../../components/user/UserlessNavigationBar';
import PhotoDiv from '../../components/Photo/PhotoDiv/PhotoDiv';
import PhotoMain from '../../components/Photo/PhotoMain/PhotoMain';
import Footer from '../../components/static/Footer';
import './PhotoPage.css';

const PhotoPage = props => {
    
    
    
    return(
        <BrowserRouter>
            <div className="PhotoPage">
                <UserlessNavigationBar/>
                <PhotoDiv/>
                <PhotoMain/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default withRouter(PhotoPage);