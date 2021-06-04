import React,{useState} from "react";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import {Animated} from "react-animated-css";

import './PhotoBox.css'

function PhotoBox(props){   
    const [showData,setShowData] = useState(false);
    const photoLink = "/photo/getdetails/"+props.id;
    const favoritesNumber = props.favNum > "999" ? "999+": props.favNum;
    const commentNumber = props.comNum > "999" ? "999+": props.comNum;
    return(
        <div id= "photobox" className ="" style={{backgroundImage: `url(${props.url})` }} onMouseEnter={()=>{setShowData(true)}} onMouseLeave={()=>{setShowData(false)}}>
            <a href ={photoLink} style={{textDecoration:"none"}}>
              <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={showData} animationInDuration= {300} animationOutDuration= {250}  animateOnMount={false}>
                  <div className="image-data">
                      <div className = "name">
                          <div className = "title-name">
                              <span>{props.title}</span>
                          </div>
                          <div className ="user-name">
                              <span>By {props.userName}</span>
                          </div>
                      </div>
                      <div className = "icons">
                           <div className = "favorites">
                                  <StarBorderIcon/>
                                  <span>{favoritesNumber}</span>
                           </div>
                           <div className = "comments">
                                  <ChatBubbleOutlineIcon />
                                  <span>{commentNumber}</span>
                           </div>
                      </div>
                  </div>   
              </Animated>
            </a>
        </div>
    );
}

export default PhotoBox;
