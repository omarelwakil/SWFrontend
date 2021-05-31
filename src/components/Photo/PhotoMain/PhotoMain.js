import './PhotoMain.css';
import {useState} from 'react';
import React from 'react';
import Comment from './Comment/Comment'
//Might need to divide to further components

const PhotoMain = props => {

    //TODO: Returned user data from api --> useEffect&axios
    const user = {
        image: 'https://combo.staticflickr.com/pw/images/buddyicon03_l.png#192784739@N02',
        imageName: 'InkedWhatsApp Image 2021-04-25 at 18.23.00_LI',
        name: 'ahmed hany',
        comments: [
            {
                commentUserName: 'ahmed hany',
                text: 'Hello there!',
                time: '7d',
            }
        ],
        description: 'my description'
    }

    const [userData, setUserData] = useState(user);

    const [showCommentButton, setShowCommentButton] = useState(false);
    const [showCommentTools, setShowCommentTools] = useState(false);
    const [showDescriptionInputs, setShowDescriptionInputs] = useState(false);

    const changeImageName = (event, userData) => {
        const user = {...userData};
        
        user.imageName = event.target.value;

        setUserData(user);
    }

    const changeDescription = (event, userData) => {
        const user = {...userData};

        user.description = event.target.value;

        setUserData(user);
        
    }

    let button = null,  description=null;

    const showCommentButtonHandler = () => setShowCommentButton(!showCommentButton);
    if(showCommentButton){
        button = (<button className="button">Comment</button>);
    }

    const showTools = () => setShowCommentTools(!showCommentTools);


    const showDescription = () => setShowDescriptionInputs(!showDescriptionInputs);
    if(!showDescriptionInputs){
        let userDesc = null;

        if(userData.description!=null){
            userDesc = userData.description;
        } else{
            userDesc = 'Add description';
        }

        description = (
            <React.Fragment>
                <p><strong>{userData.imageName}</strong></p>
                <p className="desc">{userData.description}</p>
            </React.Fragment>
        );
    }else{

        description = (
            <React.Fragment>
                <input className="image-name" onClick={(event) => event.stopPropagation()} type="text" value={userData.imageName} onChange={(event)=>changeImageName(event, userData)}/>
                <textarea className="desc-box" onClick={(event) => event.stopPropagation()} value={userData.description} onChange={(event) => changeDescription(event, userData)}></textarea>
                <button className="button" onClick={showDescription}>Done</button>
            </React.Fragment>
        );
    }
    return(
        <div className="PhotoMain">
            <div className="photo-desc-comments">
                <div className="photo-desc">
                    <div className="profile-photo">
                        <img src={user.image}/>
                    </div>
                    <div className="profile-name-desc">
                        <h5 className="profile-name"><a href="">{user.name}</a></h5>
                        <div className="profile-desc" onClick={showDescription} >
                            {/* TODO: Edit description */}
                            {description}
                        </div>
                        <div className="line"></div>
                    </div>
                </div>
                <div className="photo-comments">
                    {/* TODO: comments */}
                    {/* {
                        userData.comments.map(comment => <Comment user={userData} showTools={showTools} showCommentTools={showCommentTools}/>)
                    } */}
                    <div className="add-comment">
                        <div className="user-img">
                            <img src={user.image}/>
                        </div>
                        <textarea id="commentTextbox" placeholder="Add a comment" onFocus={showCommentButtonHandler} onBlur={showCommentButtonHandler}></textarea>
                    </div>
                    {button}
                </div>
            </div>
            <div className="photo-details">
                <div className="details">
                    <div className="details-reach">
                        <div>
                            <span>0</span>
                            <p>views</p>
                        </div>
                        <div>
                            <span>0</span>
                            <p>faves</p>
                        </div>
                        <div>
                            <span>0</span>
                            <p>comments</p>
                        </div>
                    </div>
                    <div className="details-date">
                        <p>Taken on April 25, 2021</p>
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
                            <div><a href="">Add tags</a></div>
                        </div>
                        <div className="photo-people">
                            <div><a href="">People in photo</a></div>
                            <div><a href="">Add people</a></div>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default PhotoMain;