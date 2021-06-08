import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './InnerTrend.css';
import PhotoBox from '../user/Search/PhotoBox';

/**
 * Component for Inner trending page
 *
 * @component
 * @example
 * const pathOfCurrent = window.location.pathname;
 * const tagWord = pathOfCurrent.substr(13,pathOfCurrent.length-1);
 * return (
 *   <InnerTrend /> 
 * ) 
 */

function InnerTrend(){
  const pathOfCurrent = window.location.pathname;
  const tagWord = pathOfCurrent.substr(13,pathOfCurrent.length-1);
  console.log(tagWord);

  const [Tags,setTags]=useState([]);
  
  //Get All related tags from the Backend
  /**
  * Get All photos from the Backend with a similar tag
  * @return {void}
  */
  
  const getAllTags = ()=>{
      axios.defaults.baseURL = "https://qasaqees.tech/api";
      return (axios.get('/tags/'+tagWord)
      .then((response) => {
          const allTags = response.data.media;
          setTags(allTags); 
      })
      .catch((error) => {
        if (error.response.status === 404) {
            console.log(error.response.data.message);
        }
    }));
  }

  useEffect(() => {getAllTags();}, []);

          return(
          <div id="inner-tag" className="container-fluid">
                <div className="tag-word">
                <h1>
		                <a href="/photos/tags">Tags</a>
				            <a href={"/photos/tags/" + tagWord }> {tagWord} </a>
	              </h1>
                  <h1>Recently tagged - {tagWord}</h1>
                </div>
                  <div className="tag-images">
                  {(Tags.length > 0) ? (Tags.map((tags, index) => {
                    return (
                        <div key={index}>
                            <PhotoBox key={index} id={tags._id}
                                url={tags.url} title={tags.title} userName={tags.creator}
                                favNum={tags.favouriteCount} comNum={tags.commentsNum} />
                        </div>
                    );
                })) : null //<h1>No Tags are found !</h1>
                }
                  </div>
              
            </div>
            )
}


export default InnerTrend;