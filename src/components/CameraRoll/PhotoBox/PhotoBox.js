import React from 'react';
import { useState } from 'react';
import './PhotoBox.css';

import axios from 'axios';


const PhotoBox = (props) => {

    axios.defaults.baseURL = 'https://api.qasaqees.tech';

    const [photo, setPhoto] = useState(props.photo);

    const [privacy, setPrivacy] = useState('public'); //TODO

    const [Desc, setDesc] = useState(photo.description);
    const [title, setTitle] = useState(photo.title);
    const [tags, setTags] = useState(photo.tags);
    const [showForms, setShowForms] = useState(false);
    
    const [showEdit, setShowEdit] = useState(false);

    const showEditButton = () => setShowEdit(!showEdit);

    let inputTag;
    let edit = null;

    const editPhoto = () => setShowForms(!showForms); 

    if(showEdit){
        edit = <button className="button" onClick={editPhoto}>Edit</button>
    }

    
    const handleChange = (e) => {
        setPrivacy(e.target.value);
    }

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleDesc = (e) => {
        setDesc(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let tagsArr = [...tags];
        let newTags = inputTag.value;
        newTags = newTags.split(' ');
        tagsArr = [...tagsArr,...newTags];
        setTags(tagsArr);
        let photoCopy = {...photo};
        photoCopy['title'] = title;
        photoCopy['description'] = Desc;
        photoCopy['tags'] = tagsArr;
        axios.patch(`/photo/${photo._id}`,photoCopy,{
            headers: {
              "Authorization": 'Bearer' + localStorage.getItem['accessToken'],
              'Content-type': 'application/json'
            }})
        .then(res => console.log(res.data))
        .catch(error => console.log(error));
        editPhoto();
    }

    let forms = null;
    if(showForms){
        forms = (
            <form id="form" onSubmit={handleSubmit}>
                <label>
                    Title 
                    <input type="text" onChange={handleTitle} value={title}/>
                </label>
                <label>
                    Description 
                    <input type="text" onChange={handleDesc} value={Desc}></input>
                </label>
                <label>
                    Privacy 
                    <select value={privacy} onChange={handleChange}>
                        <option value="public">Public</option>
                        <option value="private">Private</option>
                    </select>
                </label>
                <label>
                    Add tags 
                    <input type="text" ref={el => inputTag = el}/>
                </label>
                <input type="submit" value="Done"/>
            </form>
        );
    }
    return (
        <React.Fragment>
            {forms}
            <div className="PhotoBox">
                <img src={props.photo.url} onClick={showEditButton}/>
                <br></br>
                {edit}
                <input className="delete-button button" type="button" value="Delete Photo" onClick={props.deleteHandler}/>
            </div>
        </React.Fragment>
    );
}

export default PhotoBox;