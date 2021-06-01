import React, { useState , useEffect } from 'react';
import axios from 'axios';
import './ViewFollowers.css';

function ViewFollowers() {
                    
  const [accessToken] = useState(localStorage.getItem("accessToken"));
    if (accessToken === null) {
        localStorage.clear();
        window.location.href = "/login";
    };
  const userData = JSON.parse(localStorage.getItem("userData")) 
  const userID = userData._id
  console.log(userID);
  
  const [followers,setFollowers]=useState([]);
  //Get All Photos from the BE
  const getAllFollowers = ()=>{
      axios.defaults.baseURL = "https://7342f3dd-6bc2-4d9f-b7e4-454d849225e0.mock.pstmn.io";
      return (axios.get('/user/followers/'+userID)
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
  
      useEffect(() => {getAllFollowers();}, []);
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
              <span> or <a href="/view-following">See people you follow</a></span>                  
      </form>  
                                          

    </div>
       {(followers.length > 0) ?followers.map((follower , index) => {
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
      <td>{follower._id}</td>
      <td>{follower.firstName}</td>
      <td>{follower.lastName}</td>
    </tr>
	</tbody>
	</table>



        
          {/*   <p> {follower._id}</p>
            <p> {follower.firstName}</p>
            <p> {follower.lastName}  </p> */}


        </div>)


      }): 	    <div className="ThinCase">
        <br />
	      <h2 align="center" >No-one has listed you as a contact. <b><i>Yet</i></b>.</h2>
                          <div></div>
      </div>} 

</div>



);



}
export default ViewFollowers;
                    