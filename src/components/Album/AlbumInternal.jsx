import React, { useState } from 'react';
import axios from 'axios';

import './AlbumInternal.css';

import AlbumPhotos from './AlbumPhotos';

function AlbumInternal(probs) {//probs albumId
    const [isLoggedIn] = useState(localStorage.getItem("accessToken"));
    const [userData] = useState(JSON.parse(localStorage.getItem("userData")));
    console.log(userData);
    if (isLoggedIn === null) {
        localStorage.clear();
        window.location.href = "/login";
    }
    const [media, setMedia] = useState([]);
    const [numIcons, setNumIcons] = useState(0);
    axios.defaults.baseURL = "https://599c770a-2052-400a-a709-295f306bdccc.mock.pstmn.io";
            axios.get('/album/'+probs.albumId)
                .then((response) => {
                    console.log(response.data);
                    setMedia(response.data.media);
                    console.log("url");
                    console.log(media[0].url);
                })
                .catch((error) => {
                    console.log(error.response.data.message);
                });
                console.log(media);
    return (
        <div id="album-internal">
            <div className="container-fluid">
                <div className="row album-toolbar">
                    <div className="col-9">
                        <a><i class="fas fa-arrow-left album-back-icon"></i><span>Back to albums list</span></a>
                    </div>
                    <div className="col-3">
			            <span>icons</span>
                    </div>
                </div>
                <div className="row bg-image bg album-image">
                    <div className="col album-edit-col">
                        <i class="far fa-edit album-edit-icon"></i>
                    </div>
                    <div className="row">
                        <div className="col text-center">
                            <h3 className="album-title" contenteditable="true">Title</h3>
                            <p className="album-description" contenteditable="true">
				                Click here to enter a description for this album</p>
                            <button type="button" class="btn btn-dark edit-album-button">Done</button>
                            <p className="album-img-num">{media.length} photos {numIcons}</p>
                            <i class="fas fa-share album-icons"></i>
                            <i class="fas fa-book-open album-icons"></i>
                            <i class="fas fa-download album-icons"></i>
                            <p className="album-description">
				                By:{userData.firstName}</p>
                        </div>
                    </div>
                </div>
                <div class="row gx-5">
                { media.map((photo) => (
                    <AlbumPhotos
                        key={photo._id}
                        url={photo.url}
                    />
                ))}
                {/*Remove later*/}
                <AlbumPhotos
                        key="12"
                        url="//live.staticflickr.com/65535/51215214338_79a9910831_n.jpg"
                    />
                </div>
            </div>
        </div>
    );
}

export default AlbumInternal;