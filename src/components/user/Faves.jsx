import React from 'react';
import { useState , useEffect } from 'react';
import axios from 'axios';
import './Faves.css';
import PhotoBox from './Search/PhotoBox';

function Faves(){ 
  const [accessToken] = useState(localStorage.getItem("accessToken"));
  if (accessToken === null) {
      localStorage.clear();
      window.location.href = "/login";
  };
  const userData = JSON.parse(localStorage.getItem("userData")) 
  const userID = userData.user._id
  console.log(userID);
  const [faves,setFaves]=useState([]);
  

  const getAllFaves = ()=>{
      axios.defaults.baseURL = "https://qasaqees.tech/api";
      return (axios.get('/user/fav/'+userID)
      .then((response) => {
          const allFaves = response.data.favorites;
          setFaves(allFaves);
          console.log(allFaves)
         
      })
      .catch((error) => {
         if (error.response.status === 404) {
            console.log(error.response.data.message);
            
        }
    }));
  }
  
      useEffect(() => {getAllFaves();}, []);


  return ( 
    <div id="faves" className="container-fluid"> 
        
        {(faves.length > 0)?(faves.map((fave,index)=>{return(<PhotoBox key={index} id={fave._id} 
                     url = {fave.url} title = {fave.title} userName={fave.creator.firstName +" "+ fave.creator.lastName} 
                     favNum={fave.favouriteCount} comNum={fave.commentsNum}/>);})):<div className="heading">
        <h1>Start picking your faves. Just click on the star.</h1>
        <p> Like something you see? Let the favegrapher know by clicking on the star icon. </p>
        <a href='/explore'><button>Start exploring flicker</button></a>
        <img src="https://combo.staticflickr.com/ap/build/images/emptypages/faves3.jpg" alt="Snow"/>
        </div> }
   {/*                    {<div className="heading">
        <h1>Start picking your faves. Just click on the star.</h1>
        <p> Like something you see? Let the favegrapher know by clicking on the star icon. </p>
        <a href='/explore'><button>Start exploring flicker</button></a>
        <img src="https://combo.staticflickr.com/ap/build/images/emptypages/faves3.jpg" alt="Snow"/>
        </div>} */}
          
          


    </div>
    
    
   



  );


   


}
export default Faves;