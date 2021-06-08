import React from 'react';
import { useState } from 'react';
import './PhotoBox.css';

import axios from 'axios';

/**
 * Component that renders a photo box for each photo in CameraRollPage
 * No internal components
 * @component 
 * @type Component
 * 
 * @param {object} photo Object that holds details of a specific photo 
 * @param {Key} key React special key prop
 * @param {Function} deleteHandler Function that deletes a specific photo 
 * @param {string} userToken The user's access token 
 * @returns <PhotoBox
                    photo={photo}
                    key={photo._id}
                    deleteHandler={(e) => deleteHandler(e, photo._id)}
                    userToken={userToken}
 */
const PhotoBox = (props) => {

    const userToken = props.userToken;

    axios.defaults.baseURL = 'https://api.qasaqees.tech';

    const [photo, setPhoto] = useState(props.photo);
    const [privacy, setPrivacy] = useState(photo.isPublic ? "public" : "private");
    const [allowCommenting, setAllowCommenting] = useState(photo.allowCommenting ? "true" : "false");
    const [Desc, setDesc] = useState(photo.description);
    const [title, setTitle] = useState(photo.title);
    const [tags, setTags] = useState(photo.tags);

    const [showForms, setShowForms] = useState(false);

    const [showEdit, setShowEdit] = useState(false);
    /**
     * Shows an edit button
     */
    const showEditButton = () => setShowEdit(!showEdit);

    let inputTag;
    let edit = null;

    /**
     * Shows a form for photo editing
     */
    const editPhoto = () => setShowForms(!showForms);

    if (showEdit) {
        edit = <button className="button" onClick={editPhoto}>Edit</button>
    }

    /**
     * Sets privacy (isPublic) state with the user's chosen value (event target value)
     * @param {Event} e input field event object
     */
    const handlePrivacy = (e) => {
        setPrivacy(e.target.value);
    }
    /**
     * Sets allowCommenting state with the user's chosen value (event target value)
     * @param {Event} e input field event object
     */
    const handleAllowCommenting = (e) => {
        setAllowCommenting(e.target.value);
    }
    /**
     * Sets title state with the user's chosen value (event target value)
     * @param {Event} e input field event object
     */
    const handleTitle = (e) => {
        setTitle(e.target.value);
    }
    /**
     * Sets description state with the user's chosen value (event target value)
     * @param {Event} e input field event object
     */
    const handleDesc = (e) => {
        setDesc(e.target.value);
    }
    /**
     * Submits a form for editing a photo
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        let tagsArr = [...tags];
        let newTags = inputTag.value;
        newTags = newTags.split(' ');

        // if(newTags!=''){
        //     newTags = newTags.split(' ');
        //     newTags.forEach(tag => {
        //         let tagObj = {
        //             tag: tag
        //         }; 

        //         axios.patch(`/photo/addTags/${photo._id}`,tagObj,{
        //             headers: {
        //               "Authorization": 'Bearer ' + userToken,
        //               'Content-type': 'application/json'
        //             },
        //             params: {
        //                 tag: tag
        //             }
        //         })
        //         .then(res => setTags(res.data))
        //         .catch(error => console.log(error));
        //     });
        // }

        let photoCopy = {
            "isPublic": (privacy === 'public') || (privacy === true) ? true : false,
            "allowCommenting": (allowCommenting === "true") || (allowCommenting === true) ? true : false,
            "description": Desc,
            "title": title,
            "tags": newTags
        }
        axios.patch(`/photo/${photo._id}`, photoCopy, {
            headers: {
                "Authorization": 'Bearer ' + userToken,
                'Content-type': 'application/json'
            },
            params: {
                isPublic: (privacy === 'public') || (privacy === true) ? true : false,
                allowCommenting: (allowCommenting === "true") || (allowCommenting === true) ? true : false,
                description: Desc,
                title: title,
                tags: newTags
            }
        })
            .then(res => window.location.pathname = `/photo/getdetails/${photo._id}`)
            .catch(error => console.log(error));
        editPhoto();
    }

    let forms = null;
    if (showForms) {
        forms = (
            <form id="form" onSubmit={handleSubmit}>
                <label>
                    Title
                    <input required type="text" onChange={handleTitle} value={title} />
                </label>
                <label>
                    Description
                    <input type="text" onChange={handleDesc} value={Desc}></input>
                </label>
                <label>
                    Privacy
                    <select value={privacy} onChange={handlePrivacy}>
                        <option value="public">Public</option>
                        <option value="private">Private</option>
                    </select>
                </label>
                <label>
                    Allow Commenting
                    <select value={allowCommenting} onChange={handleAllowCommenting}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </label>
                <label>
                    Add tags
                    <input type="text" ref={el => inputTag = el} />
                </label>
                <div>
                    <button className="form-btn" onClick={editPhoto}>Cancel</button>
                    <input className="form-btn" type="submit" value="Done" />
                </div>
            </form>
        );
    }
    return (
        <React.Fragment>
            {forms}
            <div className="PhotoBox">
                <img src={photo.url} onClick={showEditButton} alt="" />
                <br></br>
                {edit}
                <input className="delete-button button" type="button" value="Delete" onClick={props.deleteHandler} />

            </div>
        </React.Fragment>
    );
}

export default PhotoBox;