import React, { useState } from 'react';
import axios from 'axios';

import './AlbumInternal.css';

import AlbumPhotos from './AlbumPhotos';

function AlbumInternal(probs) {//probs albumId
    const [accessToken] = useState(localStorage.getItem("accessToken"));
    const [userData] = useState(JSON.parse(localStorage.getItem("userData")));
    console.log(userData);
    if (accessToken === null) {
        localStorage.clear();
        window.location.href = "/login";
    }
    const [media, setMedia] = useState([]);
    const [numIcons, setNumIcons] = useState(0);
    const [titleText, setTitleText] = useState("");
    const [descriptionText, setDescriptionText] = useState("");
    const albumId = 2;
    axios.defaults.baseURL = "https://qasaqees.tech/api";
            axios.get('/album/'+probs.albumId.toString())
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
    function Submit(event) {
            event.preventDefault();
            //get data 
            setTitleText(document.getElementById("albumTitle").innerText);
            setDescriptionText(document.getElementById("albumDesc").innerText);
            document.getElementById("edit-album-button").style.display = "none";
            
            axios.defaults.baseURL = "https://qasaqees.tech/api";
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
            const data ={
                title:titleText,
                description:descriptionText,
            };
            console.log("data sent:");
            console.log(data);
            axios.patch('/album/'+probs.albumId.toString(), data, { headers: { "Content-Type": "application/json" } })
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error) => {
                    if (error.response.status === 401) {
                        console.log(error.response.data.message);
                    }else if(error.response.status === 404){
                        console.log(error.response.data.message);
                    }
                });
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
                        <i className="far fa-edit album-edit-icon"></i>
                    </div>
                    <div className="row">
                        <div className="col text-center">
                            <h3 id="albumTitle" className="album-title" contentEditable="true">Title</h3>
                            <p id="albumDesc" className="album-description" contentEditable="true">
				                Click here to enter a description for this album</p>
                            <button id="edit-album-button" type="button" class="btn btn-dark" onClick = { Submit }>Done</button>
                            <p id="imgNum" className="album-img-num">{media.length} photos</p>
                            <i className="fas fa-share album-icons album-remove"></i>
                            <i className="fas fa-book-open album-icons album-remove"></i>
                            <i className="fas fa-download album-icons album-remove"></i>
                            <p className="album-description">
				                By:{userData.firstName}</p>
                        </div>
                    </div>
                </div>
                <div className="row gx-5">
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