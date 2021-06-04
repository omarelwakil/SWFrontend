import React, { useState, useEffect } from 'react';

import axios from 'axios';
//import comments from "../../Data/Comments.json"
import Comment from "./Comment";

import "./CommentOnMedia.css"

function CommentOnMedia(probs){//probs:{photoId}
    const [userData] = useState(JSON.parse(localStorage.getItem("userData")));
    const [newComment,setNewComment] = useState("");
    const [comments,setComments] = useState([]);
    
    function LoadComments(event){
        if(event){event.preventDefault();}
        axios.defaults.baseURL = "https://7e738fcf-dd46-4db9-a9b1-26e54c6e3603.mock.pstmn.io";
        const data = {
            photoId : probs.photoId
        }
        axios.post('/photo/getComments', data, { headers: { "Content-Type": "application/json" } })
            .then((response) => {
                console.log(response.data.comments);
                setComments(response.data.comments);
            })
            .catch((error) => {
                if (error.response.status === 404) {
                    console.log(error.response.data.message);
                } 
            });
    }
    console.log("comments:");
    console.log(comments);
    function Submit(event){
        event.preventDefault();
        setNewComment(document.getElementById("commentTextArea").value);
        document.getElementById("commentBtn").style.display = "none";
        const data = {
            photoId : probs.photoId,
            comment : document.getElementById("commentTextArea").value
        }
        console.log("data sent:");
        console.log(data);
        axios.defaults.baseURL = "https://qasaqees.tech/api";
        axios.post('/photo/comment', data, { headers: { "Content-Type": "application/json" } })
            .then((response) => {
                console.log(response.data);
                // add comment to the list or reload
                comments.push(
                    {
                        _id: "60b5df64bc0b9e3c283fa482",
                        user: {
                            profilePhotoUrl: "//combo.staticflickr.com/pw/images/buddyicon11_m.png#192788011@N03",
                            firstName: userData.firstName, 
                            lastName: userData.lastName,
                        },
                        text: newComment,
                        createdAt: (new Date()).getDate()
                    });
                setComments(comments);
            })
            .catch((error) => {
                if (error.response.status === 404) {
                    console.log(error.response.data.message);
                    //for testing
                    comments.push(
                        {
                            _id: "60b5df64bc0b9e3c283fa482",
                            user: {
                                profilePhotoUrl: "//combo.staticflickr.com/pw/images/buddyicon11_m.png#192788011@N03",
                                firstName: userData.firstName, 
                                lastName: userData.lastName,
                            },
                            text: newComment,
                            createdAt: (new Date()).getDate()
                        });
                    setComments(comments);
                } 
            });
    }
    return (
    <div>
    <div class="container justify-content-center">
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <button class="btn btn-primary" onClick={LoadComments}></button>
                <div class="comment-widgets m-b-20">
                {comments.map((comment) => (
                    <Comment
                        key={comment._id}
                        date={comment.createdAt}
                        text={comment.text}
                        firstName={comment && comment.user ? comment.user.firstName : null}
                        lastName={comment && comment.user ? comment.user.lastName : null}
                        img={comment && comment.user ? comment.user.profilePhotoUrl : null}
                    />
                ))}
                <div id="comment-form" class="d-flex flex-row comment-row ">
                    <div class="p-2"><span class="round"><img src="//combo.staticflickr.com/pw/images/buddyicon11_m.png#192788011@N03" width="32" height="32" alt="user" /></span>
                    </div>
                    <div class="comment-form-field">
                    <textarea id="commentTextArea" class="new-comment-text emoji-flipper-set" name="comment" placeholder="Add a comment" rows="4" cols="50" data-notutorial="Add a comment" data-tutorial="press Enter to post and Shift+Enter for newline" data-action="comment"></textarea>
                    </div>
                </div>
                <button type="button" id="commentBtn" class="btn btn-primary comment-btn" onClick={Submit}>Comment</button>
            </div>
                </div>
            </div>
        </div>
    </div>
</div>
      );
}

export default CommentOnMedia;