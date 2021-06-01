import React, { useState } from 'react';

import axios from 'axios';
import comments from "../../Data/Comments.json"
import Comment from "./Comment";

import "./CommentOnMedia.css"

function CommentOnMedia(probs){//probs:{photo_id}
    const [newComment,setNewComment] = useState("");
    console.log(comments);
    function Submit(event){
        event.preventDefault();
        setNewComment(document.getElementById("commentTextArea").value);
        document.getElementById("commentBtn").style.display = "none";
        const data = {
            photoId : probs.photoId,
            comment : newComment
        }
        console.log("data sent:");
        console.log(data);
        axios.defaults.baseURL = "https://qasaqees.tech/api";
        axios.post('/photo/comment', data, { headers: { "Content-Type": "application/json" } })
            .then((response) => {
                console.log(response.data);
                // add comment to the list or reload
                comments.push({id: "5", author: "KOKO", img: "//combo.staticflickr.com/pw/images/buddyicon11_m.png#192788011@N03", date: "1h", content: newComment});
            })
            .catch((error) => {
                if (error.response.status === 404) {
                    console.log(error.response.data.message);
                    //for testing
                    comments.push({id: "5", author: "KOKO", img: "//combo.staticflickr.com/pw/images/buddyicon11_m.png#192788011@N03", date: "1h", content: newComment});
                } 
            });
    }
    return (
        <div>
          <div class="container d-flex justify-content-center mt-100 mb-100">
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="comment-widgets m-b-20">
                {comments.map((comment) => (
                    <Comment
                        key={comment.id}
                        img={comment.img}
                        author={comment.author}
                        date={comment.date}
                        content={comment.content}
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