import './AlbumsPage.css';

import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import UserlessNavigationBar from '../../components/user/UserlessNavigationBar';
import UserCover from '../../components/PhotoStream/UserCover/UserCover';
import Footer from '../../components/static/Footer';
import Navbar from '../../components/Trending/Navbar/Navbar';
import Albums from '../../components/Albums/Albums';
import axios from 'axios';
/**
 * Component that renders page of Albums for a specific user
 * Takes a variable userId as a route paramter
 * Internal components:
 *      UserlessNavigationBar
 *      PhotoStream/UserCover
 *      Trending/Navbar
 *      Albums
 *      Footer
 * @component 
 * @type Component
 * @returns (
 *      <AlbumsPage />
 * )
 */
const AlbumsPage = (props) => {

    const baseUrl = 'https://api.qasaqees.tech';
    /**
     * Redirects to homepage
     */
    const homePage = () => window.location.pathname = '/';



    const albumCoverPhoto = "https://live.staticflickr.com/65535/51140121587_393ff56218_n.jpg";


    //MockURl: 'https://f6a8e4e3-57ed-4ad8-8204-d6958266d5c5.mock.pstmn.io'

    var loggedInUser = null;
    if (JSON.parse(localStorage.getItem('userData')) !== null)
        loggedInUser = JSON.parse(localStorage.getItem('userData')).user;

    var loggedInUserId = null;
    if (loggedInUser !== null)
        loggedInUserId = loggedInUser._id;
    const userToken = localStorage.getItem('accessToken');

    const userId = props.match.params.id;

    const [user, setUser] = useState(null);

    let main = null, newAlbum = null, inputTitle, inputDesc, userCover = null, cameraRoll = null;

    useEffect(() => {
        axios.defaults.baseURL = baseUrl;

        axios.get(`/user/albums/${userId}`)
            .then(response => response.data)
            .then(data => setUserAlbums(data['albums']))
            .catch(error => console.log('Couldnot fetch album albums.jsx'));

        axios.get(`/user/about/${userId}`)
            .then(response => response.data)
            .then(data => setUser(data['user']))
            .catch(error => console.log('Couldnot fetch user albums.jsx'));

        axios.get(`/user/photostream/${userId}`)
            .then(response => response.data)
            .then(data => { setAlbumCoverPhotoUrl(data['photos'][0].url); console.log(data); })
            .catch(error => console.log('Couldnot fetch photos PhotoStream.jsx'));
    }, [userId]);

    const [userAlbums, setUserAlbums] = useState(null);
    const [showNewAlbum, setShowNewAlbum] = useState(false);
    const [albumCoverPhotoUrl, setAlbumCoverPhotoUrl] = useState(null);
    /**
     * Shows a button to create a new album
     */
    const newAlbumHandler = () => setShowNewAlbum(!showNewAlbum);
    /**
     * Deletes a specific album
     * @param {Event} e Delete album click event 
     * @param {String} albumId Id of the album to be deleted 
     */
    const deleteAlbum = (e, albumId) => {
        e.preventDefault();
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

        e.stopPropagation();
    }
    /**
     * Creates a new album
     * @param {Event} e New album click event 
     */
    const handleSubmit = (e) => {
        e.preventDefault();

        const newAlbumJson = {
            "title": inputTitle.value,
            "description": inputDesc.value
        }

        axios.post('/album/createAlbum', newAlbumJson, {
            headers: {
                'Authorization': 'Bearer ' + userToken,
                'Content-type': 'application/json'
            },
            params: {
                title: inputTitle.value,
                description: inputDesc.value
            }
        })
            .then(res => window.location.reload())
            .catch(err => console.log(err));

        newAlbumHandler();

    }

    if (userAlbums) {

        if(albumCoverPhotoUrl===null){
            setAlbumCoverPhotoUrl('');
        }
        
        main = (
            <Albums
                userAlbums={userAlbums}
                albumCover={albumCoverPhotoUrl}
                deleteAlbum={deleteAlbum}
                newAlbumHandler={newAlbumHandler}
                userId={userId}
                loggedInUserId={loggedInUserId} />
        )
    } else {
        main = (
            <div className="error-photos">
                <h1>Error! Sorry, no data was found! </h1>
                <div className=""><button onClick={homePage} className="no-photos-button">Go to HomePage</button></div>
            </div>
        )
    }


    if (showNewAlbum && loggedInUserId === userId) {
        newAlbum = (
            <div className="new-album-div">
                <div className="new-album-dialog text-black-50">
                    <div className="new-album-text">
                        <p>Create a new Album</p>
                        <p className="close" onClick={newAlbumHandler}>x</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Album title" className="album-title-input" ref={el => inputTitle = el} required />
                        <input type="text" placeholder="Description (Album)" className="album-desc-input" ref={el => inputDesc = el} required />
                        <input type="submit" value="Create" className="album-create" />
                        <button onClick={newAlbumHandler} className="album-cancel">Cancel</button>
                    </form>
                </div>
            </div>
        );
    } else {
        newAlbum = null;
    }

    let dataToSend;

    if (loggedInUserId === userId) {
        dataToSend = [
            { title: "About", path: "/people/" + userId, selected: false },
            { title: "Photostream", path: "/photos/" + userId, selected: false },
            { title: "Albums", path: "/photos/" + userId + "/albums", selected: true },
            { title: "Faves", path: "/photos/" + userId + "/favorites", selected: false },
            { title: "Camera Roll", path: "/cameraroll", selected: false },
        ];
    } else {
        dataToSend = [
            { title: "About", path: "/people/" + userId, selected: false },
            { title: "Photostream", path: "/photos/" + userId, selected: false },
            { title: "Albums", path: "/photos/" + userId + "/albums", selected: true },
            { title: "Faves", path: "/photos/" + userId + "/favorites", selected: false },
        ];
    }



    if (user) {
        userCover = <UserCover userData={user} />;
    }


    return (
        <BrowserRouter>
            <div className="AlbumsPage">
                <UserlessNavigationBar />
                {userCover}
                <Navbar items={dataToSend} />
                {main}
                {newAlbum}
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default AlbumsPage;