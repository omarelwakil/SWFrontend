import './Comment.css';
import Button from '../../Button/Button';

const Comment = (props) => {
    let commentTools = null;
    
    if(props.showCommentTools){
        commentTools = ['edit', 'delete'].map(tool => <Button key={tool} tool={tool}/>);
    }

    return (
        <div className="comment" onMouseEnter={props.showTools} onMouseLeave={props.showTools}>
            <div className="user-img">
                <img src={props.user.image}/>
            </div>
            <div className="user-comment">
                <a className="user-name"><strong>{props.user.commentUserName}</strong></a>
                <span className="time">{props.user.time}</span>
                <p className="user-comment-text">{props.user.text}</p>
            </div>
            <div className="comment-tools">
                {commentTools}
            </div>
        </div>
    );
}

export default Comment;