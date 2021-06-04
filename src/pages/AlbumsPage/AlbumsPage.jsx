import './AlbumsPage.css';

import React,{useState, useEffect} from 'react';
import { BrowserRouter} from 'react-router-dom';
import UserlessNavigationBar from '../../components/user/UserlessNavigationBar';
import UserCover from '../../components/PhotoStream/UserCover/UserCover';
import Footer from '../../components/static/Footer';
import Navbar from '../../components/Trending/Navbar/Navbar';
import Albums from '../../components/Albums/Albums';
import axios from 'axios';

const AlbumsPage = () => {
    
    const cameraRollUrl = () => window.location.pathname = `/cameraroll`;

    
    const albumCoverPhoto = "https://live.staticflickr.com/65535/51140121587_393ff56218_n.jpg";

    
    //MockURl: https://f6a8e4e3-57ed-4ad8-8204-d6958266d5c5.mock.pstmn.io

    const user = JSON.parse(localStorage.getItem('userData')).user;
    const userToken = localStorage.getItem('accessToken');

    const baseUrl = 'https://api.qasaqees.tech';

    const homePage = () => window.location.pathname = '/';

    let main=null, newAlbum = null, inputTitle, inputDesc;

    useEffect(()=>{
        axios.defaults.baseURL = baseUrl;

        axios.get(`/user/albums/${user._id}`)
        .then(response => response.data)
        .then(data => setUserAlbums(data['albums']))
        .catch(error => console.log('Couldnot fetch album albums.jsx'));
    },[]);

    const [userAlbums, setUserAlbums] = useState(null);
    const [showNewAlbum, setShowNewAlbum] = useState(false);

    const newAlbumHandler = () => setShowNewAlbum(!showNewAlbum);

    //TODO
    const deleteAlbum = (e, albumId) => {
        const albums = [...userAlbums];

        let albumIndex = albums.findIndex(album => album._id === albumId);

        albums.splice(albumIndex, 1);

        setUserAlbums(albums);

        axios.delete(`/album/deleteAlbum/${albumId}`, {
            headers: {
              "Authorization": 'Bearer ' + userToken,
              'Content-type': 'application/json'
            }
        })
        .then(res => console.log(res.data))
        .catch(error => console.log(error));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('/album/createAlbum',{
            headers: {
                'Authorization':'Bearer ' + userToken,
                'Content-type': 'application/json'
            },
            params: {
                albumTitle: inputTitle.value,
                albumDescription: inputDesc.value
            }
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    if(userAlbums){
        main = (
            <Albums 
                userAlbums={userAlbums} 
                albumCover={albumCoverPhoto} 
                deleteAlbum={deleteAlbum} 
                newAlbumHandler={newAlbumHandler} 
                userId={user._id}/>
        )
    } else {
        main = (
            <div className="error-photos">
                <h1>Error! Sorry, no data was found! </h1>
                <div className=""><button onClick={homePage} className="no-photos-button">Go to HomePage</button></div>
            </div>
        )
    }


    if(showNewAlbum){
        newAlbum = (
            <div className="new-album-div">
                <div className="new-album-dialog text-black-50">
                    <div className="new-album-text">
                        <p>Create a new Album</p>
                        <p className="close" onClick={newAlbumHandler}>x</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Album title" className="album-title-input" ref={el => inputTitle = el} required/>
                        <input type="text" placeholder="Description (Album)" className="album-desc-input" ref={el => inputDesc = el} required/>
                        <input type="submit" value="Create" className="album-create"/>     
                        <button onClick={newAlbumHandler} className="album-cancel">Cancel</button>
                    </form>
                </div>
            </div>
        );
    } else {
        newAlbum = null;
    }


    const dataToSend = [
        { title: "About", path: "/people/"+user._id, selected: false },
        { title: "Photostream", path: "/photos/" + user._id, selected: false },
        { title: "Albums", path: "/photos/"+user._id+"/albums", selected: true },
        { title: "Faves", path: "/photos/"+user._id+"/favorites", selected: false },
        { title: "Camera Roll", path: "/cameraroll", selected: false },
    ];



    return(
        <BrowserRouter>
            <div className="AlbumsPage">
                <UserlessNavigationBar/>
                <UserCover userData={user}/>
                <Navbar items={dataToSend} />
                {main}
                {newAlbum}
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default AlbumsPage;