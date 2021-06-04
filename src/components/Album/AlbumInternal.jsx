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
    var addPhotos = [];
    var removePhotos = [];
    const [media, setMedia] = useState([]);
    const [photoStream, setPhotoStream] = useState([]);
    const [titleText, setTitleText] = useState("");
    const [descriptionText, setDescriptionText] = useState("");
    //remove later just for testing replace with probs.albumId
    const albumId = probs.albumId;
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
      function LoadAlbumMedia(event) {
        document.getElementById("loadAlbumBtn").style.display = "none";    
            axios.get('/album/'+albumId)
            .then((response) => {
                console.log("response.data.media");
                console.log(response.data.media);
                setMedia(response.data.media);
                if(media.length > 0){
                    document.getElementById('album-internal-img').style.backgroundImage =
                    "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url("+media[0].url+")";
            }
            })
            .catch((error) => {
                if (error.response.status === 404) {
                    //console.log(error.response.data.message);
                }
            });
        }
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
            console.log("data sent in /user/photostream/:");
            console.log(userData.id);
            axios.get('/user/photostream/'+userData.id)
                .then((response) => {
                    console.log(response.data);
                    setPhotoStream(response.data.photos);
                    configureElementsCreated();
                })
                .catch((error) => {
                    if (error.response.status === 400) {
                        //console.log(error.response.data.message);
                    }else if(error.response.status === 404){
                        //console.log(error.response.data.message);
                    }
                });
        function configureElementsCreated() {
            //find common images between album media and photo stream
            for (let index = 0; index < media.length; index++) {
                console.log("Media[index]._id");
                console.log(media[index]._id);
                console.log("photoStream[0]._id");
                console.log(photoStream[0]._id);
                if(photoStream.some(photo => photo._id === media[index]._id)){
                    console.log("True");
                    //add class selected
                    document.getElementById(media[index]._id).classList.add("photoStreamSelected");
                }
            }
            //Album photo stream eventListeners
            for (let index = 0; index < document.getElementsByClassName("album-photoStream").length; index++) {
                document.getElementsByClassName("album-photoStream")[index].addEventListener("click", ClickOnPhotoSreamImg);
            }
          }
        function ClickOnPhotoSreamImg(event){
            if(event.target.classList.contains("photoStreamSelected")){
                //then deselect it and add it to remove list
                event.target.classList.remove("photoStreamSelected");
                removePhotos.push({
                    photoId:event.target.id,
                    albumId:probs.albumId 
                });
                // remove it from add list if exists
                addPhotos = addPhotos.filter(function( photo ) {
                    return photo._id !== event.target.id;
                });
                console.log(removePhotos);
            }else{
                //then select it and add it to add list
                event.target.classList.add("photoStreamSelected");
                addPhotos.push({
                    photoId:event.target.id,
                    albumId:probs.albumId 
                });
                // remove it from remove list if exists
                removePhotos = removePhotos.filter(function( photo ) {
                    return photo._id !== event.target.id;
                });
                console.log(addPhotos);
            }
        }
    }
    function AddPhotosToAlbum(event) {
        event.preventDefault();
        if(addPhotos.length > 0){
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
            axios.post('/album/addPhoto', addPhotos,{ headers: { "Content-Type": "application/json" } })
                    .then((response) => {
                        console.log(response.data.message);
                    })
                    .catch((error) => {
                        if (error.response.status === 401) {
                            console.log(error.response.data.message);
                        }else if(error.response.status === 404){
                            console.log(error.response.data.message);
                        }
                    });
        }
        //Remove section
        if(removePhotos.length > 0){
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
            axios.post('/album/removePhoto', removePhotos,{ headers: { "Content-Type": "application/json" } })
                    .then((response) => {
                        console.log(response.data.message);
                    })
                    .catch((error) => {
                        if (error.response.status === 401) {
                            console.log(error.response.data.message);
                        }else if(error.response.status === 404){
                            console.log(error.response.data.message);
                        }
                    });
        }
    }
    return (
        <div id="album-internal">
            <div className="container-fluid">
                <div className="row album-toolbar">
                    <div className="col-9">
                        <a href= {`/photos/${probs.creatorId}/albums`} className="album-back-link"><i className="fas fa-arrow-left album-back-icon"></i><span>Back to albums list</span></a>
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
                <button id="loadAlbumBtn" type="button" class="btn btn-outline-primary btn-block" onClick={LoadAlbumMedia}>Load Album Media</button>    
                { media.map((photo) => (
                    <AlbumPhotos
                        key={photo._id}
                        url={photo.url}
                        photoId={photo._id}
                        albumId={probs.albumId}
                        userId={userData.id}
                    />
                ))}
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
                    </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-success" onClick={AddPhotosToAlbum}>Submit</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AlbumInternal;