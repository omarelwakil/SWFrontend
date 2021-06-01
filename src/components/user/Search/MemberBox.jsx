import React,{useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import PhotoSizeSelectActualOutlinedIcon from '@material-ui/icons/PhotoSizeSelectActualOutlined';
import PeopleIcon from '@material-ui/icons/People';
import CheckIcon from '@material-ui/icons/Check';
import './MemberBox.css'
import axios from 'axios';

function MemberBox(props){   
    const photosNum = props.photosNum > 999 ? (props.photosNum/1000)+"K": props.photosNum;
    const followersNum = props.followersNum > 999 ? (props.followersNum/1000)+"K": props.followersNum;
    const userPath = "/photos/" + props.id;
    const [accessToken] = useState(localStorage.getItem("accessToken"));
    const [isFollowing,setIsFollowing] =useState(props.isFollowing);
    const userID = {userId: props.id}
    axios.defaults.baseURL = "https://qasaqees.tech/api";

    function followUser(){
     if (accessToken === null) {
          localStorage.clear();
          window.location.href = "/login";
      }
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
      axios.post('/user/followUser', userID, { headers: { "Content-Type": "application/json" } })
          .then((response) => {
               setIsFollowing(true);
          })
          .catch((error) => {
              if (error.response.status === 401) {
                  console.log(error.response.data.message);
                  localStorage.clear();
                  window.location.href = "/login";
              } else if (error.response.status === 400) {
                  console.log(error.response.data.message);
              }
          });
    }

    function unfollowUser(){
           axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
           axios.post('/user/unfollowUser', userID, { headers: { "Content-Type": "application/json" } })
           .then((response) => {
                setIsFollowing(false);
           })
           .catch((error) => {
               if (error.response.status === 401) {
                   console.log(error.response.data.message);
                   localStorage.clear();
                   window.location.href = "/login";
               } else if (error.response.status === 400) {
                   console.log(error.response.data.message);
               }
           });
    }

    return(<div id="MemberBox-new">
                 <div id= "MemberBox" >
                       <a href={userPath} >
                           <img src={props.url} alt="profile pic" />
                       </a>
                       <a href={userPath} >
                          <div className ="user-data">
                                <span className ="name">{props.name}</span>
                                <span className ="Grey-small user-name">{props.id}</span>
                                <span className ="Grey-small"><PhotoSizeSelectActualOutlinedIcon />  {photosNum} <PeopleIcon /> {followersNum}</span>
                          </div>
                        </a>
                        <div className ="button-joined-data">
                             {isFollowing ?  <button className ="btn-sign" onClick={unfollowUser}> <CheckIcon/> Followed</button> : 
                                 <button className ="btn-sign" onClick={followUser}> <AddIcon viewBox="0 1 24 24"/> Follow</button>
                             }
                             <span className="Grey-small-data">Joined {props.date}</span>
                        </div>
                    </div>
              </div>
    );
}

export default MemberBox;
