import React, { useState } from 'react';

import axios from 'axios';
import comments from "../../Data/Comments.json"
import Comment from "./Comment";

import "./CommentOnMedia.css"

function CommentOnMedia(probs){//props:{photo_id}
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
                <button type="button" id="commentBtn" class="btn btn-primary comment-btn">Comment</button>
            </div>
                </div>
            </div>
        </div>
    </div>
</div>
      );
}

export default CommentOnMedia;