import React,{useState} from "react";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import {Animated} from "react-animated-css";
import PropTypes from "prop-types";

import './PhotoBox.css'

/**
 * Component for Showing the Photo in a box with its details in search with hover animation
 *
 * @component
 * @example
 * const id = 123
 * const url = 'https://www.cnet.com/a/img/-qQkzFVyOPEoBRS7K5kKS0GFDvk=/940x0/2020/04/16/7d6d8ed2-e10c-4f91-b2dd-74fae951c6d8/bazaart-edit-app.jpg'
 * const title = 'beach'
 * const userName = 'Ahmed Khalad'
 * const favNum = 100
 * const comNum = 300
 * return(
 *  <PhotoBox id={id} url = {url} title = {title} userName={userName} favNum={favNum} comNum={comNum}/>
 * )
 */

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

PhotoBox.propTypes = {
    /**
     * photo's id
     */
     id : PropTypes.number.isRequired,
    /**
     * photo's url
     */
     url: PropTypes.string.isRequired,
     /**
     * photo's title
     */
     title: PropTypes.string.isRequired,
     /**
     * photo's creator userName 
     */
     userName: PropTypes.string.isRequired,
     /**
     * photo's Number of Favorites 
     */
     favNum: PropTypes.number.isRequired,
      /**
     * photo's Number of Comments
     */
     comNum: PropTypes.number.isRequired,
  }

PhotoBox.defaultProps = { 
  id : 123,
  url : 'https://www.cnet.com/a/img/-qQkzFVyOPEoBRS7K5kKS0GFDvk=/940x0/2020/04/16/7d6d8ed2-e10c-4f91-b2dd-74fae951c6d8/bazaart-edit-app.jpg',
  title : 'beach',
  userName : 'Ahmed Khalad',
  favNum : 100,
  comNum : 300,

}
  
export default PhotoBox;
