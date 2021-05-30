import React from 'react';
import './ViewFollowers.css';

function ViewFollowers() {
return ( 
<div id="Main" class="" role="main">


  <table width="800" cellspacing="0" id="SubNav">
	  <tbody>
      <tr>
	      <td class="Buddy">
	        <img src="https://combo.staticflickr.com/pw/images/buddyicon04.png#192776628@N07" alt="to your photostream page" width="48" height="48" class="personmenu-trigger"/>	
	      </td>
	        <td class="Section">
	          <h1>People you follow</h1>
	            <p id="contacts-subnav" class="LinksNewP">
	              <span class="LinksNew">
                  <span><a href=" ">Photos from</a></span> <span><a href=" ">Photos of</a></span><span class="Here">List</span><span><a href=" ">Find Friends</a></span>										<a href="/">Send Invites</a></span>	</p>
          </td>       
	    </tr>
    </tbody>
  </table>
    <div class="contact-list-header contact-list-header-rev">
      <form>
        <span><strong>Show: </strong></span>
          <select name="see" onchange="submit(); return false;">
	          <option value="all" selected="selected"> all of your followers </option>
          </select>
              <span> or <a href="/view-following">See people you follow</a></span>                  
      </form>  
                                          

    </div>
	    <div class="ThinCase">
        <br />
	      <h2 align="center" >No-one has listed you as a contact. <b><i>Yet</i></b>.</h2>
      </div>
</div>



);



}
export default ViewFollowers;
                    