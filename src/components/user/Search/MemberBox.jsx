import React from "react";
import AddIcon from '@material-ui/icons/Add';
import PhotoSizeSelectActualOutlinedIcon from '@material-ui/icons/PhotoSizeSelectActualOutlined';
import PeopleIcon from '@material-ui/icons/People';
import './MemberBox.css'

function MemberBox(props){   
    const photosNum = props.photosNum > 999 ? (props.photosNum/1000)+"K": props.photosNum;
    const followersNum = props.followersNum > 999 ? (props.followersNum/1000)+"K": props.followersNum;
    const userPath = "/photos/" + props.id;
    return(<div id="MemberBox-new">
               <a href={userPath} >
                 <div id= "MemberBox" >
                  <img src={props.url} alt="profile pic" />
                   <div className ="user-data">
                        <span className ="name">{props.name}</span>
                        <span className ="Grey-small user-name">{props.id}</span>
                        <span className ="Grey-small"><PhotoSizeSelectActualOutlinedIcon />  {photosNum} <PeopleIcon /> {followersNum}</span>
                   </div>
                   <div className ="button-joined-data">
                        {props.isFollowing ?  <button className ="btn btn-sign disabled"> Followed</button> : 
                            <button className ="btn-sign"> <AddIcon viewBox="0 1 24 24"/> Follow</button>
                        }
                   </div>
              </div>
             </a>
        </div>
    );
}

export default MemberBox;
