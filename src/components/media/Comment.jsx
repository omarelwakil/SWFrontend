import React, { useState } from 'react';

import "./CommentOnMedia.css"
/**
 * Component for showing each  photo comment.
 *
 * @component
 * @example
 * const creatorId = "asd15451a63s4d4d5s4"
 * const userId = "asd15451a63s4d4d5s4"
 * const commentId = "asd15451a63s4d4d5s4"
 * const img = 'http://flicker.com/image.jpg'
 * const firstName = 'Mousa'
 * const lastName = 'Mohammed'
 * return (
 *   <Comment
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
 * )
 */
function Comment(probs){//props:{id,creatorId img, firstName, lastName, date, text}
    var deleteBtn = false;
    if(probs.creatorId === probs.userId){
        deleteBtn = true;
    }
    var date = new Date(probs.date);
    date  = date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate();
    return (
        <div class="d-flex flex-row comment-row">
            <div class="p-2"><span class="round"><img src={probs.img} width="32" height="32" alt="user" /></span></div>
                <div class="comment-text w-100">
                    <h5 className="comment-author"><a href={`/photos/${probs.creatorId}`} className="comment-author">{probs.firstName} {probs.lastName}</a> <span class="comment-date">{date}</span>
                    {(deleteBtn)&&(<button id="deleteCommentBtn" className="delete-comment-btn" onClick={(e) => probs.handleDelete(e,probs.commentId)}><i class="far fa-trash-alt"></i></button>)}
                    </h5>
                <p class="comment-content">{probs.text}</p>
            </div>
        </div>
      );
}

export default Comment;