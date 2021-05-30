import React from 'react';
import './ViewFollowers.css';

function ViewFollowing() {

return ( 
<div id="Main" class="" role="main">


<table width="800" cellspacing="0" id="SubNav">
	<tbody>
  <tr>
	  <td class="Buddy">
	    <img src="https://combo.staticflickr.com/pw/images/buddyicon04.png#192776628@N07" alt="to your photostream page" width="48" height="48" class="personmenu-trigger"/>	
	  </td>
	  <td class="Section">
	    <h1> People you follow </h1>
	    <p id="contacts-subnav" class="LinksNewP">
	    <span class="LinksNew">
	    <span><a href=" ">Photos from</a></span> <span><a href=" ">Photos of</a></span><span class="Here">List</span><span><a href=" ">Find Friends</a></span>										<a href="/">Send Invites</a></span>
	    </p>
    </td>
      <td class="Extras">
	    </td>
		
	</tr>
</tbody></table>
<div class="contact-list-header contact-list-header-rev">
    <form>
      <span><strong>Show: </strong></span>
      <select name="see" onchange="submit(); return false;">
	      <option> everyone </option>
      </select>
        <span> or <a href="/view-followers"> Who is following you </a></span>             
    </form>  
                                          

</div>
     <div class="ThinCase">
			<h4><b>You haven't hooked up with any friends yet.</b></h4>
			<p>Flickr is all about sharing photos and videos with your friends and family. Sure, you can look at images from strangers, but wouldn't it be nicer to see things from people you know? Perhaps you'd like to <a href=" ">invite people</a> or <a href=" ">find your friends on Flickr</a>?</p>
			<p>You could also just <a href=" "><b>try a search</b></a>.</p>
		 </div>
</div>



);



}
export default ViewFollowing;
                    