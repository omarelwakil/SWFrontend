import './Albums.css';

import React from 'react';
import Album from './Album/Album';
import Button from '../Photo/Button/Button';

/**
 * The main content of AlbumsPage
 * Internal components:
 *      Album
 * @component 
 * @type Component
 * 
 * @param {Array} UserAlbums Array of user albums
 * @param {string} albumCover Cover photo url   
 * @param {Function} deleteAlbum function to handle delete albums
 * @param {Function} newAlbumHandler function to show new album form
 * @param {string} userId the id of the user
 * @param {string} loggedInUserId the id of the logged-in user
 * @returns 
 *         <Albums 
 *               userAlbums={userAlbums} 
 *               albumCover={albumCoverPhoto} 
 *               deleteAlbum={deleteAlbum} 
 *               newAlbumHandler={newAlbumHandler} 
 *               userId={userId}
 *               loggedInUserId={loggedInUserId}/>
 */

const Albums = (props) => {
    
    let main = null;
    const userAlbums = props.userAlbums;
    const userId = props.userId;
    const loggedInUserId = props.loggedInUserId;

    const cameraRoll = () => window.location.pathname = `/cameraRoll`;

    if(userAlbums.length!==0&&loggedInUserId === userId){
        main = ( 
            <React.Fragment>
                <div className="new-album"><a onClick={props.newAlbumHandler}><Button tool="create"/>New Album</a></div>
                <div className="albums">
                    {userAlbums.map(album => {
                        return <Album 
                                userId={props.userId}
                                key={album._id} 
                                album={album} 
                                albumCover={props.albumCover} 
                                deleteAlbum={props.deleteAlbum}/>;
                    })}
                </div>
            </React.Fragment>
        );
    } else if (userAlbums.length===0&&loggedInUserId === userId) {
        main = (
            <div className="no-photos row text-center">
                <div className="fs-4 mb-3 mt-3">Let's make an album.</div>
                <div className="fs-6 mb-2">Easily organize all your photos into beautiful albums to share with friends, family, or even other</div>
                <p>Flickr members.</p>
                <div className="new-album"><a onClick={props.newAlbumHandler}><Button tool="create"/>New Album</a></div>
                {/* <div className=""><button onClick={cameraRoll} className="no-photos-button">Go to Camera Roll</button></div> */}
            </div>
        );
    } else {
        main=(
        <div className="no-photos row text-center">
            <div className="fs-4 mb-3 mt-3">The user has no albums.</div>
        </div>);
    }


    return(
        <div className="Albums text-black-50">
            {main}
        </div>
    );
}

export default Albums;