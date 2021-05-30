import React,{useEffect, useState} from "react";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import './PhotoBox.css'

function PhotoBox(){
const url = "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg";

    return(
        <div id= "photobox" style={{backgroundImage: `url(${url})` }}>
            <div className="image-data">
                <StarBorderIcon/>
                <ChatBubbleOutlineIcon />
            </div>
            
        </div>
    );
}



export default PhotoBox;
