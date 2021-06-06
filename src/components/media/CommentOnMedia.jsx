import React, { useState, useEffect } from 'react';

import axios from 'axios';
//import comments from "../../Data/Comments.json"
import Comment from "./Comment";

import "./CommentOnMedia.css"

function CommentOnMedia(probs){//probs:{photoId}
    const [accessToken] = useState(localStorage.getItem("accessToken"));
    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("userData")));
    const [comments,setComments] = useState([]);
    if (userData && userData.user) {
        setUserData(userData.user);
    }
    console.log(accessToken);
    console.log(userData);
    
    useEffect(LoadComments,[]);
    function LoadComments(event){
        if(event){event.preventDefault();}
        axios.defaults.baseURL = "https://qasaqees.tech/api";
        const data = {
            photoId : probs.photoId
        }
        console.log("data sent to api:");
        console.log(data);
        axios.post('/photo/getComments', data, { headers: { "Content-Type": "application/json" } })
            .then((response) => {
                console.log("response.data.comments");
                console.log(response.data.comments);
                setComments(response.data.comments);
            })
            .catch((error) => {
                if (error.response.status === 404) {
                    console.log("error.response Get Comments");
                    console.log(error.response.data.message);
                } 
            });
    }
    function Submit(event){
        event.preventDefault();
        document.getElementById("commentBtn").style.display = "none";
        const data = {
            comment : document.getElementById("commentTextArea").value
        }
        console.log("data sent:");
        console.log(data);
        axios.defaults.baseURL = "https://qasaqees.tech/api";
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
        axios.post(`/photo/${probs.photoId}/comment`, data, { headers: { "Content-Type": "application/json" } })
            .then((response) => {
                console.log("Add comment: response.data:");
                console.log(response.data);
                //reload
                LoadComments(event);
            })
            .catch((error) => {
                if (error.response.status === 404) {
                    console.log("Add comment: error.response.data.message:");
                    console.log(error.response.data.message);
                } 
                if (error.response.status === 401) {
                    console.log("Add comment: error.response.data.message:");
                    console.log(error.response.data.message);
                } 
            });
    }
    console.log("comments:");
    console.log(comments);
    //Delete Comment
    function handleDelete(event, commentId){
        console.log("Comment is being Deleted:");
        //Reload if success
        const data = {
            commentId : commentId
        }
        console.log(`data sent to /photo/${probs.photoId}/comment`);
        console.log(data);
        axios.defaults.baseURL = "https://qasaqees.tech/api";
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
        axios.delete(`/photo/${probs.photoId}/comment`, data, { headers: { "Content-Type": "application/json" } })
            .then((response) => {
                console.log("delete comment: response.data:");
                console.log(response.data);
                //reload
                LoadComments(event);
            })
            .catch((error) => {
                if (error.response.status === 400) {
                    console.log("Comment Id is missing");
                } 
                if (error.response.status === 401) {
                    console.log("Delete comment: error.response.data.message:");
                    console.log(error.response.data.message);
                } 
                if (error.response.status === 403) {
                    console.log("Delete comment: error.response.data.message:");
                    console.log(error.response.data.message);
                } 
                if (error.response.status === 404) {
                    console.log("Delete comment: error.response.data.message:");
                    console.log(error.response.data.message);
                } 
            });
    }
    function ShowCommentBtn(event) {
        event.preventDefault();
        console.log("ON Focus!!");
        document.getElementById("commentBtn").style.display = "block";
    }
    return (
    <div>
    <div class="container justify-content-center">
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="comment-widgets m-b-20">
                {comments.map((comment) => (
                    <Comment
                        key={comment._id}
                        commentId={comment._id}
                        handleDelete={handleDelete}
                        userId={userData.id}
                        date={comment.createdAt}
                        text={comment.text}
                        firstName={comment && comment.user ? comment.user.firstName : null}
                        lastName={comment && comment.user ? comment.user.lastName : null}
                        creatorId={comment && comment.user ? comment.user._id : null}
                        img={comment && comment.user ? comment.user.profilePhotoUrl : null}
                    />
                ))}
                <div id="comment-form" class="d-flex flex-row comment-row ">
                    <div class="p-2"><span class="round"><img src="//combo.staticflickr.com/pw/images/buddyicon11_m.png#192788011@N03" width="32" height="32" alt="user" /></span>
                    </div>
                    <div class="comment-form-field">
                    <textarea id="commentTextArea" class="new-comment-text" onFocus={ShowCommentBtn} name="comment" placeholder="Add a comment" rows="4" cols="50" data-notutorial="Add a comment" data-tutorial="press Enter to post and Shift+Enter for newline" data-action="comment"></textarea>
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