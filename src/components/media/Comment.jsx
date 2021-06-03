import React, { useState } from 'react';

import "./CommentOnMedia.css"

function Comment(probs){//props:{id, img, firstName, lastName, date, text}
    return (
        <div class="d-flex flex-row comment-row">
            <div class="p-2"><span class="round"><img src={probs.img} width="32" height="32" alt="user" /></span></div>
                <div class="comment-text w-100">
                    <h5 className="comment-author"><a className="comment-author">{probs.firstName} {probs.lastName}</a> <span class="comment-date">{probs.date}</span></h5>
                <p class="comment-content">{probs.text}</p>
            </div>
        </div>
      );
}

export default Comment;