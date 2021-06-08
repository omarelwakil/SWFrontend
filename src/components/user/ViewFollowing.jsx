import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import './ViewFollowers.css';

/**  
 * Component for User following
 *
 * @component
 * @example 
 * const userData = JSON.parse(localStorage.getItem("userData"))
 * const userID = userData.user._id
 * return (
 *   <ViewFollowing userId={id} /> 
 * )
 */ 
 
function ViewFollowing(props) {
  const [accessToken] = useState(localStorage.getItem("accessToken"));

  const userData = JSON.parse(localStorage.getItem("userData"))
  const userID = props.userId;

  const [following, setFollowing] = useState([]);
  //Get All Followings from the Backend
  /**
  * Get the followings data of a user with a certain ID
  * @return {void}
  */
  const getAllFollowing = () => {
    axios.defaults.baseURL = "https://qasaqees.tech/api";
    if (userData !== null && userData.user._id === userID)
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
    return (axios.get('/user/followings/' + userID)
      .then((response) => {
        const allFollowing = response.data.following;
        setFollowing(allFollowing);
        console.log(response.data);
      })
      .catch((error) => {
        if (error.response.status === 404) {
          console.log(error.response.data.message);

        }
      }));
  }

  useEffect(() => { getAllFollowing(); }, []);
  return (
    <div id="fBody" className="container-fluid">
      <table width="800" cellSpacing="0" id="SubNav">
        <tbody>
          <tr>
            <td className="Buddy">
              <img src="https://combo.staticflickr.com/pw/images/buddyicon04.png#192776628@N07" alt="to your photostream page" width="48" height="48" className="personmenu-trigger" />
            </td>
            <td className="Section">
              <h1>People you follow</h1>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="contact-list-header contact-list-header-rev">
        <form>
          <span><strong>Show: </strong></span>
          <select name="see">
            <option> everyone </option>
          </select>
          <span> or <a href={"/people/" + userID + "/contact/rev"}>Who is following you?</a></span>
        </form>
      </div>
      {/*     <div className="ThinCase">
			<h4><b>You haven't hooked up with any friends yet.</b></h4>
			<p>Flickr is all about sharing photos and videos with your friends and family. Sure, you can look at images from strangers, but wouldn't it be nicer to see things from people you know? Perhaps you'd like to <a href=" ">invite people</a> or <a href=" ">find your friends on Flickr</a>?</p>
			<p>You could also just <a href=" "><b>try a search</b></a>.</p>
		 </div> */}
      {(following.length > 0) ? following.map((followings, index) => {
        return (<div key={index}>
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Public Photos</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img src={followings.profilePhotoUrl} alt="public"
                  width="30"
                  length="40" /></td>
                <td>{followings.firstName}</td>
                <td>{followings.lastName}</td>
                <td>{followings.numberOfPhotos}  </td>
              </tr>
            </tbody>
          </table>
        </div>)


      }) : <div className="ThinCase">
        <h4><b>You haven't hooked up with any friends yet.</b></h4>
        <p>Flickr is all about sharing photos and videos with your friends and family. Sure, you can look at images from strangers, but wouldn't it be nicer to see things from people you know? Perhaps you'd like to <a href=" ">invite people</a> or <a href=" ">find your friends on Flickr</a>?</p>
        <p>You could also just <a href=" "><b>try a search</b></a>.</p>
      </div>}


    </div>



  );



}
export default ViewFollowing;