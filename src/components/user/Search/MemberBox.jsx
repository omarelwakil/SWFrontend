import React,{useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import PhotoSizeSelectActualOutlinedIcon from '@material-ui/icons/PhotoSizeSelectActualOutlined';
import PeopleIcon from '@material-ui/icons/People';
import CheckIcon from '@material-ui/icons/Check';
import './MemberBox.css';
import axios from 'axios';
import PropTypes from "prop-types";

/**
 * Component for Showing the People in a box with its details in search with Follow Button
 *
 * @component
 * @example
 * const id = 123
 * const url = 'https://www.cnet.com/a/img/-qQkzFVyOPEoBRS7K5kKS0GFDvk=/940x0/2020/04/16/7d6d8ed2-e10c-4f91-b2dd-74fae951c6d8/bazaart-edit-app.jpg'
 * const userName = 'AK2020'
 * const name = 'Ahmed Khalad'
 * const followersNum = 100
 * const photosNum = 300
 * const isFollowing = false
 * const date = '2021-06-01T08:46:28.064Z'
 * return(
 *   <MemberBox id={id} url = {url} userName ={userName} name = {name} followersNum={followersNum} 
 *         photosNum={photosNum} isFollowing={isFollowing} date ={date} />
 * )
 */

function MemberBox(props){   
    const photosNum = props.photosNum > 999 ? (props.photosNum/1000)+"K": props.photosNum;
    const followersNum = props.followersNum > 999 ? (props.followersNum/1000)+"K": props.followersNum;
    const userPath = "/photos/" + props.id;
    const [accessToken] = useState(localStorage.getItem("accessToken"));
    const [isFollowing,setIsFollowing] =useState(props.isFollowing);
    const userID = {userId: props.id}
    axios.defaults.baseURL = "https://qasaqees.tech/api";
    /**
     * make the logged in user follow this user
     * @return {void}
     */
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
    /**
     * make the logged in user unfollow this user
     * @return {void}
     */
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
                                <span className ="Grey-small user-name">{props.userName}</span>
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

MemberBox.propTypes = {
    /**
     * Member's id
     */
     id : PropTypes.number.isRequired,
    /**
     * Member's url
     */
     url: PropTypes.string.isRequired,
     /**
     * Member's userName 
     */
     userName: PropTypes.string.isRequired,
     /**
     * Member's name
     */
     name: PropTypes.string.isRequired,
     /**
     * Member's Number of Followers 
     */
     followersNum: PropTypes.number.isRequired,
     /**
     * Member's Number of Photos
     */
     photosNum: PropTypes.number.isRequired,
    /**
     * if current User is following this Member
     */
     isFollowing: PropTypes.bool.isRequired,
     /**
     * Member's joined at this date
     */
     date: PropTypes.string.isRequired,
  }

MemberBox.defaultProps = { 
  id : 123,
  url : 'https://www.cnet.com/a/img/-qQkzFVyOPEoBRS7K5kKS0GFDvk=/940x0/2020/04/16/7d6d8ed2-e10c-4f91-b2dd-74fae951c6d8/bazaart-edit-app.jpg',
  userName : 'AK2020',
  name : 'Ahmed Khalad',
  followersNum : 100,
  photosNum : 300,
  isFollowing : false,
  date : '2021-06-01T08:46:28.064Z',
}

export default MemberBox;
