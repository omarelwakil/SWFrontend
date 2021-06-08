import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ViewFollowers.css';

/**
 * Component for User followers
 *
 * @component
 * @example
 * const userData = JSON.parse(localStorage.getItem("userData"))
 * const userID = userData.user._id
 * return (
 *   <ViewFollowers userId={id} /> 
 * )
 */
function ViewFollowers(props) {

  const [accessToken] = useState(localStorage.getItem("accessToken"));
  if (accessToken === null) {
    localStorage.clear();
    window.location.href = "/login";
  }; 


  const userData = JSON.parse(localStorage.getItem("userData"))
  const userID = userData.user._id

  if (props.userId !== userID) {
    window.location.href = "/people/" + props.userId;
  }
  const [followers, setFollowers] = useState([]);

  //Get All Followerss from the Backend
  /**
  * Get the followers data of a user with a certain ID
  * @return {void} 
  */
  const getAllFollowers = () => {
    axios.defaults.baseURL = "https://qasaqees.tech/api";
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
    return (axios.get('/user/followers/' + userID)
      .then((response) => {
        const allFollowers = response.data.followers;
        setFollowers(allFollowers);
        console.log(allFollowers)

      })
      .catch((error) => {
        if (error.response.status === 404) {
          console.log(error.response.data.message);

        }
      }));
  }

  useEffect(() => { getAllFollowers(); }, []);
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
      {(followers.length > 0) ? followers.map((follower, index) => {
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
                <td><img src={follower.profilePhotoUrl} alt="public"
                  width="30"
                  length="40"
                /></td>
                <td>{follower.firstName}</td>
                <td>{follower.lastName}</td>
                <td>{follower.numberOfPhotos}</td>
              </tr>
            </tbody>
          </table>




          {/*   <p> {follower._id}</p>
            <p> {follower.firstName}</p>
            <p> {follower.lastName}  </p> */}


        </div>)


      }) : <div className="ThinCase">
        <br />
        <h2 align="center" >No-one has listed you as a contact. <b><i>Yet</i></b>.</h2>
        <div></div>
      </div>}

    </div>



  );



}
export default ViewFollowers;