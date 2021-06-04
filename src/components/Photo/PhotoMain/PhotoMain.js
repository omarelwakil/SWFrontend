import './PhotoMain.css';
import { useState } from 'react';
import React from 'react';
import CommentOnMedia from '../../media/CommentOnMedia';
//Might need to divide to further components

import axios from 'axios';

const PhotoMain = props => {

    axios.defaults.baseURL = 'https://api.qasaqees.tech';

    const loggedInUser = JSON.parse(localStorage.getItem('userData')).user;

    const userToken = localStorage.getItem('accessToken');

    //TODO: Returned user data from api --> useEffect&axios
    const user = props.user;
    const [photo, setPhoto] = useState(props.photo);

    const [showCommentButton, setShowCommentButton] = useState(false);
    const [showCommentTools, setShowCommentTools] = useState(false);
    const [showDescriptionInputs, setShowDescriptionInputs] = useState(false);
    const [tags, setTags] = useState(photo.tags);


    const changeImageName = (event, photoObj) => {
        const photo = { ...photoObj };

        photo.title = event.target.value;

        setPhoto(photo);
    }

    const changeDescription = (event, photoObj) => {
        const photo = { ...photoObj };

        photo.description = event.target.value;

        setPhoto(photo);

    }

    let button = null, description = null;
    let inputTag;

    const showCommentButtonHandler = () => setShowCommentButton(!showCommentButton);
    if (showCommentButton) {
        button = (<button className="button">Comment</button>);
    }

    const showTools = () => setShowCommentTools(!showCommentTools);


    const showDescription = () => setShowDescriptionInputs(!showDescriptionInputs);
    if (!showDescriptionInputs) {
        let desc = null;

        if (photo.description != null) {
            desc = photo.description;
        } else {
            desc = 'Add description';
        }

        description = (
            <React.Fragment>
                <p><strong>{photo.title}</strong></p>
                <p className="desc">{photo.description}</p>
            </React.Fragment>
        );
    } else if(showDescriptionInputs && loggedInUser._id === user._id) {

        description = (
            <React.Fragment>
                <input className="image-name" onClick={(event) => event.stopPropagation()} type="text" value={photo.title} onChange={(event) => changeImageName(event, photo)} />
                <textarea className="desc-box" onClick={(event) => event.stopPropagation()} value={photo.description} onChange={(event) => changeDescription(event, photo)}></textarea>
                <button className="button" onClick={showDescription}>Done</button>
            </React.Fragment>
        );
    }


    // const handleRemoveTag = (e, tag) => {
    //     e.stopPropagation();

    //     let tagsArr = [...tags];
    //     let tagIndex = tagsArr.findIndex(x => x.name == tag.name);
    //     tagsArr.splice(tagIndex, 1);
    //     setTags(tagsArr);
    //     let photoCopy = { ...photo };
    //     photoCopy['tags'] = tagsArr;
    //     axios.patch(`/photo/${photo._id}`, photoCopy, {
    //         headers: {
    //           "Authorization": 'Bearer ' + userToken,
    //           'Content-type': 'application/json'
    //         }})
    //     .then(res => console.log(res.data))
    //     .catch(error => console.log(error));
    // }

    const addTags = (e,inputTag) => {
        let tagsArr = [...tags];
        let newTags = inputTag.value;
        if(newTags!=''){
            newTags = newTags.split(' ');
            newTags.forEach(tag => {
                let tagObj = {
                    tag: tag
                }; 

                axios.patch(`/photo/addTags/${photo._id}`,tagObj,{
                    headers: {
                      "Authorization": 'Bearer ' + userToken,
                      'Content-type': 'application/json'
                    },
                    params: {
                        tag: tag
                    }
                })
                .then(res => window.location.reload())
                .catch(error => console.log(error));
            });
        }
        
    }
    return (
        <div className="PhotoMain">
            <div className="photo-desc-comments">
                <div className="photo-desc">
                    <div className="profile-photo">
                        <img src={user.profilePhotoUrl} />
                    </div>
                    <div className="profile-name-desc">
                        <h5 className="profile-name"><a href={"/photos/" + user._id}>{user.firstName+' '+user.lastName}</a></h5>
                        <div className="profile-desc" onClick={showDescription} >
                            {description}
                        </div>
                        <div className="line"></div>
                    </div>
                </div>
                <div className="photo-comments">
                    {/* <CommentOnMedia photoId={photo._id}/> */}
                    <div className="add-comment">
                        <div className="user-img">
                            <img src={loggedInUser.profilePhotoUrl} />
                        </div>
                        <textarea id="commentTextbox" placeholder="Add a comment" onFocus={showCommentButtonHandler} onBlur={showCommentButtonHandler}></textarea>
                    </div>
                    {button}
                </div>
            </div>
            <div className="line hidden"></div>
            <div className="photo-details">
                <div className="details">
                    <div className="details-reach">
                        <div>
                            <span>{photo.views}</span>
                            <p>views</p>
                        </div>
                        <div>
                            <span>{photo.favouriteCount}</span>
                            <p>faves</p>
                        </div>
                        <div>
                            <span>{photo.commentsNum}</span>
                            <p>comments</p>
                        </div>
                    </div>
                    <div className="details-date">
                        <p>Taken on {photo.createdAt.substring(0,10)}</p>
                    </div>
                </div>
                <div className="line"></div>
                <div className="albums-tags-people">
                    <div>
                        <div>
                            <p>This photo is in 1 album</p>
                        </div>
                        <div>
                            <a href="">Add to album</a>
                        </div>
                    </div>
                    <div>
                        <div className="photo-tags">
                            <div><a href="">Tags</a></div>
                            <div><a className="" onClick={(e) => addTags(e, inputTag)}>Add tags</a></div>
                        </div>

                    </div>
                    <div className="tags">
                        <input type="text" placeholder="add a tag" ref={el => inputTag = el} />
                        {
                            tags.map(tag => <a href={"/photos/tags/"+tag.name} className="tag">{tag.name}</a>)
                        }
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default PhotoMain;