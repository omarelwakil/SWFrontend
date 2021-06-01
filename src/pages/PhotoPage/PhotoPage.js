//Sample URL: https://www.flickr.com/photos/192784739@N02/51140121587/in/album-72157719034684909/
//View a Specific photo in a specific album
import React, {useState, useEffect} from 'react';
import { BrowserRouter, withRouter} from 'react-router-dom';
import UserlessNavigationBar from '../../components/user/UserlessNavigationBar';
import PhotoDiv from '../../components/Photo/PhotoDiv/PhotoDiv';
import PhotoMain from '../../components/Photo/PhotoMain/PhotoMain';
import Footer from '../../components/static/Footer';
import './PhotoPage.css';

import axios from 'axios';

const PhotoPage = props => {

    const user = JSON.parse(localStorage.getItem['userData']);
    // const user = {
    //     id: '60b466483892750012b61753',
    //     name: 'ahmed hany',
    //     photoUrl: 'https://combo.staticflickr.com/pw/images/buddyicon03_l.png#192784739@N02',
    //     email: 'ahmed.haanyyy',
    //     followers: 0,
    //     following: 1,
    //     numberOfPhotos: 1,
    //     date: '2021'
    // }

    const photoId = props.match.params.id;
    //'5349b4ddd2781d08c09890f4';


    useEffect(()=>{
        axios.defaults.baseURL = 'https://api.qasaqees.tech';
        axios.get(`/photo/getDetails/${photoId}`,{
            headers: {
              "Authorization": 'Bearer' + localStorage.getItem['accessToken'],
              'Content-type': 'application/json'
            }})
          .then(response => response.data)
          .then(data => setPhoto(data))
          .catch( error => console.log('Couldnot fetch photos PhotoStream.jsx'));
    },[]);

    const [photo, setPhoto] = useState(null);

    let main = null;
    if(photo){
        main = (
            <React.Fragment>
                <PhotoDiv url={photo.url} photoId={photoId} userId={user._id}/>
                <PhotoMain photo={photo} user={user}/>
            </React.Fragment>
        );
    }

    
    return(
        <BrowserRouter>
            <div className="PhotoPage">
                <UserlessNavigationBar/>
                {main}
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default withRouter(PhotoPage);