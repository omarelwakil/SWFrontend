import React, { useState } from 'react';

import './AlbumInternal.css';

import userIcon from '../../images/usericon.png'

function AlbumInternal() {
    const [isLoggedIn] = useState(localStorage.getItem("accessToken"));
    const [userData] = useState(JSON.parse(localStorage.getItem("userData")));
    console.log(userData);
    if (isLoggedIn === null) {
        localStorage.clear();
        window.location.href = "/login";
    }
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
                            <p className="album-img-num">5 photos</p>
                            <i class="fas fa-share album-icons"></i>
                            <i class="fas fa-book-open album-icons"></i>
                            <i class="fas fa-download album-icons"></i>
                            <p className="album-description">
				                By:Mousa</p>
                        </div>
                    </div>
                </div>
                <div class="row gx-5">
                    <div class="col-lg-3 col-sm-12">
                        <img class="img-thumbnail" src="//live.staticflickr.com/65535/51215214338_79a9910831_n.jpg"/>
                    </div>
                    <div class="col-lg-3 col-sm-12">
                        <img class="img-thumbnail" src="//live.staticflickr.com/65535/51215214338_79a9910831_n.jpg"/>
                    </div>
                    <div class="col-lg-3 col-sm-12">
                        <img class="img-thumbnail" src="//live.staticflickr.com/65535/51215214338_79a9910831_n.jpg"/>
                    </div>
                    <div class="col-lg-3 col-sm-12">
                        <img class="img-thumbnail" src="//live.staticflickr.com/65535/51215214338_79a9910831_n.jpg"/>
                    </div>
                    <div class="col-lg-3 col-sm-12">
                        <img class="img-thumbnail" src="//live.staticflickr.com/65535/51215214338_79a9910831_n.jpg"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AlbumInternal;