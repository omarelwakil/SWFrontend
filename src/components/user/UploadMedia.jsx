import React, { useState } from 'react';
import axios from 'axios';

import AddIcon from '@material-ui/icons/Add';
import './UploadMedia.css';

function UploadMedia() {
    const [accessToken] = useState(localStorage.getItem("accessToken"));
    const [filesToBeUploaded, setFilesToBeUploaded] = useState([]);
    const [selectedFiles, setSelectedFiles] = useState([]);

    if (accessToken === null)
        window.location.href = "/login";

    const TogglePhotoTitle = (e) => {
        if (document.getElementById("photo-title-input").classList.contains("d-none")) {
            document.getElementById("photo-title-input").classList.remove("d-none");
            document.getElementById("photo-title-text").classList.add("d-none");
            document.getElementById("photo-title-input").focus();
        } else {
            document.getElementById("photo-title-input").classList.add("d-none");
            document.getElementById("photo-title-text").classList.remove("d-none");
            document.getElementById("photo-title-text").innerText = document.getElementById("photo-title-input").value;

            if (document.getElementById("photo-title-input").value === "")
                document.getElementById("photo-title-text").innerText = "Add a title";
            else {
                for (let i = 0; i < selectedFiles.length; i++) {
                    for (let j = 0; j < filesToBeUploaded.length; j++) {
                        if (filesToBeUploaded[j].key === selectedFiles[i].key) {
                            filesToBeUploaded[j].photoJson.title = document.getElementById("photo-title-input").value;
                            selectedFiles[i].photo.photoJson.title = document.getElementById("photo-title-input").value;
                            break;
                        }
                    }
                }
                console.log(filesToBeUploaded);
            }
        }
    }

    const TogglePhotoDescription = (e) => {
        if (document.getElementById("photo-description-input").classList.contains("d-none")) {
            document.getElementById("photo-description-input").classList.remove("d-none");
            document.getElementById("photo-description-text").classList.add("d-none");
            document.getElementById("photo-description-input").focus();
        } else {
            document.getElementById("photo-description-input").classList.add("d-none");
            document.getElementById("photo-description-text").classList.remove("d-none");
            document.getElementById("photo-description-text").innerText = document.getElementById("photo-description-input").value;
            if (document.getElementById("photo-description-input").value === "")
                document.getElementById("photo-description-text").innerText = "Add a description";
            else {
                for (let i = 0; i < selectedFiles.length; i++) {
                    for (let j = 0; j < filesToBeUploaded.length; j++) {
                        if (filesToBeUploaded[j].key === selectedFiles[i].key) {
                            filesToBeUploaded[j].photoJson.description = document.getElementById("photo-description-input").value;
                            selectedFiles[i].photo.photoJson.description = document.getElementById("photo-description-input").value;
                            break;
                        }
                    }
                }
                console.log(filesToBeUploaded);
            }
        }
    }

    const TogglePhotoTags = (e) => {
        if (document.getElementById("photo-tags-input").classList.contains("d-none")) {
            document.getElementById("photo-tags-input").classList.remove("d-none");
            document.getElementById("photo-tags-text").classList.add("d-none");
            document.getElementById("photo-tags-input").focus();
        } else {
            document.getElementById("photo-tags-input").classList.add("d-none");
            document.getElementById("photo-tags-text").classList.remove("d-none");
            if (document.getElementById("photo-tags-input").value !== "") {
                for (let i = 0; i < selectedFiles.length; i++) {
                    for (let j = 0; j < filesToBeUploaded.length; j++) {
                        if (filesToBeUploaded[j].key === selectedFiles[i].key) {
                            filesToBeUploaded[j].tags = document.getElementById("photo-tags-input").value.split(' ');
                            selectedFiles[i].photo.tags = document.getElementById("photo-tags-input").value.split(' ');
                            break;
                        }
                    }
                }
                console.log(filesToBeUploaded);
            }
        }
    }

    const TogglePhotoPrivacy = (e) => {
        for (let i = 0; i < selectedFiles.length; i++) {
            for (let j = 0; j < filesToBeUploaded.length; j++) {
                if (filesToBeUploaded[j].key === selectedFiles[i].key) {
                    filesToBeUploaded[j].photoJson.isPublic = (e.currentTarget.value === "true");
                    selectedFiles[i].photo.photoJson.isPublic = (e.currentTarget.value === "true");
                    break;
                }
            }
        }
        console.log(filesToBeUploaded);
    }

    const openUploadFile = (e) => {
        document.getElementById("upload-div-input").click();
    };

    const fileInputOnChange = (e) => {
        if (e.target.files.length > 0) {
            for (let i = 0; i < e.target.files.length; i++) {

                let photoTitle = e.target.files[i].name;
                if (photoTitle.split(".").length > 0)
                    photoTitle = photoTitle.split(".")[0];

                let jsonPhoto = {
                    "photoJson": {
                        "photo": e.target.files[i],
                        "isPublic": true,
                        "title": photoTitle,
                        "allowCommenting": true,
                        "description": ""
                    },
                    "key": photoTitle + i.toString(),
                    "tags": []
                }
                setFilesToBeUploaded(filesToBeUploaded => [
                    ...filesToBeUploaded,
                    jsonPhoto
                ]);
            }
        }
    }

    const toggleSelectedFiles = (e) => {
        let photoKey = e.currentTarget.getAttribute("_id");
        if (e.currentTarget.classList.contains("selected-image")) {
            //Removing image
            e.currentTarget.classList.remove("selected-image");
            setSelectedFiles(selectedFiles.filter(item => !(item.key === photoKey)));
            console.log(selectedFiles);
        } else {
            //adding image
            e.currentTarget.classList.add("selected-image");
            setSelectedFiles(selectedImages => [
                ...selectedImages,
                {
                    "key": photoKey,
                    "photo": filesToBeUploaded.filter(item => item.key === photoKey)[0]
                }
            ]);
            console.log(selectedFiles);
        }
    };

    const uploadAllPhotos = (e) => {
        for (let i = 0; i < filesToBeUploaded.length; i++) {
            debugger
            //filesToBeUploaded[i].photoJson
            var bodyFormData = new FormData();
            bodyFormData.append("file", filesToBeUploaded[i].photoJson.photo);
            bodyFormData.append("isPublic", filesToBeUploaded[i].photoJson.isPublic);
            bodyFormData.append("title", filesToBeUploaded[i].photoJson.title);
            bodyFormData.append("allowCommenting", filesToBeUploaded[i].photoJson.allowCommenting);
            bodyFormData.append("description", filesToBeUploaded[i].photoJson.description);
            let tags = "";
            for (let j = 0; j < filesToBeUploaded[i].tags.length; j++) {
                tags += filesToBeUploaded[i].tags[j] + ",";
            }
            tags = tags.substring(0, tags.length - 1);
            bodyFormData.append("tags", tags);
            axios.defaults.baseURL = "https://qasaqees.tech/api";
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
            axios.post('/photo/upload', bodyFormData, { headers: { "Content-Type": "multipart/form-data" } })
                .then((response) => {
                    window.location.href = "/cameraroll";
                })
                .catch((error) => {
                    debugger;
                    if (error.response.status === 401) {
                        console.log(error.response.data.message);
                        localStorage.clear();
                        window.location.href = "/login";
                    } else if (error.response.status === 400) {
                        console.log(error.response.data.message);
                    }
                });
        }
    }

    return (
        <div id="upload-photos">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 my-3 px-0">
                        <div className="rounded edit-photo-details mx-3 position-relative">
                            <div className="row px-3 my-3">
                                <div className="col-12">
                                    {selectedFiles.length > 0 ?
                                        <h5 className="text-muted mb-0">Editing {selectedFiles.length} photo(s):</h5> :
                                        <h5 className="text-muted mb-0">Select photos to edit...</h5>
                                    }
                                </div>
                            </div>
                            {selectedFiles.length > 0 ?
                                <div>
                                    <hr className="m-0" />
                                    <div className="row px-3 my-3">
                                        <div className="col-12">
                                            <h5 id="photo-title-text" className="text-white fw-bold opacity-4 cursor-pointer" onClick={TogglePhotoTitle}>{selectedFiles[0].photo.photoJson.title}</h5>
                                            <input id="photo-title-input" type="text" className="form-control d-none" defaultValue={selectedFiles[0].photo.photoJson.title} onBlur={TogglePhotoTitle} />
                                            <p id="photo-description-text" className="text-muted fs-7 mb-0 cursor-pointer" onClick={TogglePhotoDescription}>{selectedFiles[0].photo.photoJson.description === "" ? "Add a description" : selectedFiles[0].photo.photoJson.description}</p>
                                            <input id="photo-description-input" type="text" className="form-control d-none fs-7" placeholder="Add a description" onBlur={TogglePhotoDescription} defaultValue={selectedFiles[0].photo.photoJson.description === "" ? null : selectedFiles[0].photo.photoJson.description} />
                                        </div>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="row px-3 my-3">
                                        <div className="col-12">
                                            <h5 id="photo-tags-text" className="text-white fs-6 opacity-4 cursor-pointer mb-0" onClick={TogglePhotoTags}>Add tags</h5>
                                            <input id="photo-tags-input" type="text" className="form-control fs-6 d-none" placeholder="Add tags space separated" onBlur={TogglePhotoTags} />
                                            {selectedFiles[0].photo.tags.length > 0 ?
                                                <div className="mt-2">
                                                    {selectedFiles[0].photo.tags.map(tag => {
                                                        return (<span className="text-light border rounded p-1 mx-1">{tag}</span>)
                                                    })}
                                                </div> : null
                                            }
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row px-3 my-3">
                                        <div className="col-12">
                                            <h5 id="photo-privacy-text" className="text-white fs-6 opacity-4 mb-1">Privacy</h5>
                                            <div className="form-check">
                                                <input className="form-check-input text-muted" type="radio" name="privacy" id="photo-privacy" value="true" defaultChecked onClick={TogglePhotoPrivacy} />
                                                <label className="form-check-label text-muted" htmlFor="photo-privacy">
                                                    Public
                                    </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input text-muted" type="radio" name="privacy" id="photo-privacy" value="false" onClick={TogglePhotoPrivacy} />
                                                <label className="form-check-label text-muted" htmlFor="photo-privacy">
                                                    Private
                                    </label>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="m-0" />
                                </div> : null
                            }
                            <div className="position-absolute w-100 bottom-0">
                                <button type="button" class={"w-100 btn btn-primary" + (filesToBeUploaded.length === 0 ? " disabled" : "")} onClick={uploadAllPhotos}>Upload</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9 my-3 px-0">
                        <div className="mx-3">
                            <div className="upload-image-div d-flex justify-content-center mb-2">
                                <AddIcon id="upload-div-icon" onClick={openUploadFile} />
                                <input id="upload-div-input" className="d-none" type="file" accept="image/*" multiple onChange={fileInputOnChange} />
                            </div>
                            <p className="w-100 text-center text-light mb-3">You can upload multiple of images...</p>
                            <hr id="files-divider" className="m-0" />
                            <div className="row px-3 py-2">
                                {filesToBeUploaded.length > 0 ?
                                    filesToBeUploaded.map((photo, index) => {
                                        const path = URL.createObjectURL(photo.photoJson.photo);
                                        return (
                                            <div className="col-md-3 my-1" key={index} >
                                                <img src={path} alt="" className="image-selector" onClick={toggleSelectedFiles} _id={photo.key} />
                                            </div>
                                        )
                                    }) : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UploadMedia;