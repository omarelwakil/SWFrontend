import React, { useState , useEffect } from 'react';
import axios from 'axios';
import './ViewFollowers.css';

function ViewFollowing() {
                    
  const [accessToken] = useState(localStorage.getItem("accessToken"));
    if (accessToken === null) {
        localStorage.clear();
        window.location.href = "/login";
    };
  const userData = JSON.parse(localStorage.getItem("userData")) 
  const userID = userData._id
  console.log(userID);
  
  const [following,setFollowing]=useState([]);
  //Get All Photos from the BE
  const getAllFollowing = ()=>{
      axios.defaults.baseURL = "https://7342f3dd-6bc2-4d9f-b7e4-454d849225e0.mock.pstmn.io";
      return (axios.get('/user/followings/'+userID)
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
  
      useEffect(() => {getAllFollowing();}, []);
return ( 
<div id="fBody" className="container-fluid">
  <table width="800" cellSpacing="0" id="SubNav">
	  <tbody>
      <tr>
	      <td className="Buddy">
	        <img src="https://combo.staticflickr.com/pw/images/buddyicon04.png#192776628@N07" alt="to your photostream page" width="48" height="48" className="personmenu-trigger"/>	
	      </td>
	        <td className="Section">
	          <h1>People you follow</h1>
	            <p id="contacts-subnav" className="LinksNewP">
	              <span className="LinksNew">
                  <span><a href=" ">Photos from</a></span> <span><a href=" ">Photos of</a></span><span className="Here">List</span><span><a href=" ">Find Friends</a></span>										<a href="/">Send Invites</a></span>	</p>
          </td>       
	    </tr>
    </tbody>
  </table>
    <div className="contact-list-header contact-list-header-rev">
      <form>
        <span><strong>Show: </strong></span>
          <select name="see">
	          <option> all of your followers </option>
          </select>
              <span> or <a href="/view-followers">See people you follow</a></span>                  
      </form>  
    </div>
{/*     <div className="ThinCase">
			<h4><b>You haven't hooked up with any friends yet.</b></h4>
			<p>Flickr is all about sharing photos and videos with your friends and family. Sure, you can look at images from strangers, but wouldn't it be nicer to see things from people you know? Perhaps you'd like to <a href=" ">invite people</a> or <a href=" ">find your friends on Flickr</a>?</p>
			<p>You could also just <a href=" "><b>try a search</b></a>.</p>
		 </div> */}
     {(following.length > 0) ?following.map((followings , index) => {
        return (<div key={index}>
          <table className="table">
  <thead>
    <tr>
		<th>ID</th>
		<th>First Name</th>
		<th>Last Name</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{followings._id}</td>
      <td>{followings.firstName}</td>
      <td>{followings.lastName}</td>
    </tr>
	</tbody>
	</table>
        </div>)


      }):     <div className="ThinCase">
			<h4><b>You haven't hooked up with any friends yet.</b></h4>
			<p>Flickr is all about sharing photos and videos with your friends and family. Sure, you can look at images from strangers, but wouldn't it be nicer to see things from people you know? Perhaps you'd like to <a href=" ">invite people</a> or <a href=" ">find your friends on Flickr</a>?</p>
			<p>You could also just <a href=" "><b>try a search</b></a>.</p>
		 </div> } 


</div>



);



}
export default ViewFollowing;
                    