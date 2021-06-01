import React, { useState, useEffect } from 'react';
//import Modal from "react-bootstrap/Modal";
//import "bootstrap/dist/css/bootstrap.min.css";

import axios from 'axios';

import './AlbumInternal.css';

import AlbumPhotos from './AlbumPhotos';
import PhotoStream from './PhotoStream';

function AlbumInternal(probs) {//probs {"albumId":"123"}
    const [accessToken] = useState(localStorage.getItem("accessToken"));
    const [userData] = useState(JSON.parse(localStorage.getItem("userData")));
    console.log(userData);
    if (accessToken === null) {
        localStorage.clear();
        window.location.href = "/login";
    }
    var media = [];
    const [photoStream, setPhotoStream] = useState([]);
    const [titleText, setTitleText] = useState("");
    const [descriptionText, setDescriptionText] = useState("");
    //remove later just for testing replace with probs.albumId
    const albumId = "60b64d67c3f8f600120f8b57";
    axios.defaults.baseURL = "https://qasaqees.tech/api";
    // get album details
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
    useEffect(() => {
        axios.patch('/album/'+albumId, { headers: { "Content-Type": "application/json" } })
                .then((response) => {
                    setTitleText(response.data.title);
                    setDescriptionText(response.data.description);
                })
                .catch((error) => {
                    if (error.response.status === 401) {
                        console.log(error.response.data.message);
                    }else if(error.response.status === 404){
                        console.log(error.response.data.message);
                    }
                });
      });
      useEffect(() => {
        axios.get('/album/'+albumId)
                .then((response) => {
                    media = response.data.media;
                    if(media.length > 0){
                        console.log("url");
                        console.log(media[0].url);
                        document.getElementById('album-internal-img').style.backgroundImage =
                            "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url("+media[0].url+")";
                    }
                })
                .catch((error) => {
                    if (error.response.status === 404) {
                        //console.log(error.response.data.message);
                    }
                });
      });
    function Submit(event) {//title and description 
            event.preventDefault();
            //get data 
            console.log(document.getElementById("albumTitle").innerText);
            console.log(document.getElementById("albumDesc").innerText);
            document.getElementById("edit-album-button").style.display = "none";
            
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
            const data ={
                title:document.getElementById("albumTitle").innerText,
                description:document.getElementById("albumDesc").innerText,
            };
            console.log("data sent:");
            console.log(data);
            axios.patch('/album/'+albumId, data, { headers: { "Content-Type": "application/json" } })
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
    function LoadPhotoStream(event){
        event.preventDefault();
        //Album photo stream
        for (let index = 0; index < document.getElementsByClassName("album-photoStream").length; index++) {
            document.getElementsByClassName("album-photoStream")[index].addEventListener("click", ClickOnPhotoSreamImg);
        }
        function ClickOnPhotoSreamImg(event){
            console.log(event.target.id);
            if(!(event.target.classList.contains("photoStreamSelected"))){
                //search for the current selected 
                var alreadySelected = document.getElementsByClassName("photoStreamSelected");
                if(alreadySelected.length > 0){
                    alreadySelected[0].classList.remove("photoStreamSelected");
                }
                event.target.classList.add("photoStreamSelected");
            }
        }
            console.log("data sent:");
            console.log(userData.id);
            axios.get('/user/photostream/'+userData.id)
                .then((response) => {
                    console.log(response.data);
                    setPhotoStream(response.data.photos);
                })
                .catch((error) => {
                    if (error.response.status === 400) {
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
                        <a><i className="fas fa-arrow-left album-back-icon"></i><span>Back to albums list</span></a>
                    </div>
                    <div className="col-3">
                    </div>
                </div>
                <div id="album-internal-img" className="row bg-image album-image">
                    <div className="col album-edit-col">
                    <button type="button" className="btn btn-outline-dark album-edit-btn" onClick={LoadPhotoStream} data-bs-toggle="modal" data-bs-target="#albumModal">
                        <i className="far fa-edit album-edit-icon"></i>
                    </button>
                    </div>
                    <div className="row">
                        <div className="col text-center">
                            <h3 id="albumTitle" className="album-title" contentEditable="true">{titleText}</h3>
                            <p id="albumDesc" className="album-description" contentEditable="true">
				                {descriptionText}</p>
                            <button id="edit-album-button" type="button" className="btn btn-dark" onClick = { Submit }>Done</button>
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
            <div className="modal fade" id="albumModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                    <nav data-testid="navbartest" class="custom-navbar position-static"><div class="custom-container"><ul class="custom-navbar-ul"><li><a id="navbar-item-tag" href="#" class="selected">Photo Stream</a></li></ul></div></nav>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    <div className="row gx-5">
                    { photoStream.map((photo) => (
                    <PhotoStream
                        key={photo._id}
                        id={photo._id}
                        url={photo.photoUrl}
                    />
                    ))}
                    <PhotoStream
                        key="1"
                        id="img1"
                        url="//live.staticflickr.com/65535/51215214338_79a9910831_n.jpg"
                    />
                    <PhotoStream
                        key="2"
                        id="img2"
                        url="//live.staticflickr.com/65535/51215214338_79a9910831_n.jpg"
                    />
                    <PhotoStream
                        key="3"
                        id="img3"
                        url="//live.staticflickr.com/65535/51215214338_79a9910831_n.jpg"
                    />
                    </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-success">Add</button>
                        <button type="button" className="btn btn-danger">Remove</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AlbumInternal;