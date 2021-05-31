import React,{useEffect, useState} from "react";
import './Search.css'
import Navbar from '../../Trending/Navbar/Navbar';
import PhotoBox from './PhotoBox';
import axios from 'axios';

function Search(props){

    const dataToSend = [
        { title: "Photos", path: "/search", selected: true },
        { title: "People", path: "/search", selected: false },
  ];
  const position = "position-fixed";
  const pathOfCurrent = window.location.pathname;
  const searchWord = pathOfCurrent.substr(8,pathOfCurrent.length-1);

  const [photos,setPhotos]=useState([]);
  //Get All Photos from the BE
  const getAllPhotos = ()=>{
      axios.defaults.baseURL = "https://50e48386-d0d0-4857-a11a-07b37edb0347.mock.pstmn.io";
      return (axios.get('/photo/searchPhotos/'+searchWord)
      .then((response) => {
          const allPhotos = response.data.media;
          setPhotos(allPhotos);
      })
      .catch((error) => {
        if (error.response.status === 404) {
            console.log(error.response.data.message);
        }
    }));
  }
  //to call API only once
  useEffect(() => {getAllPhotos();}, []);
  
  const url = "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg";
  const firstName ="Ahmed";
  const lastName ="sadsadsdsadsadsadsadasdasdas";
  const userName = firstName + " "+lastName;
  const title = "heeeeseey";
  console.log(photos)
    return(
        <div id= "SearchPagePhotos">
            <Navbar items={dataToSend} position={position} />
            <p>Everyone's photos</p>
            <div className="container-fluid">
                <div className = "row justify-content-start">
                    {(photos.length > 0)&&(photos.map((photo,index)=>{return(<PhotoBox key={index} id={photo._id} 
                     url = {photo.url} title = {photo.title} userName={photo.creator.firstName +" "+ photo.creator.lastName} 
                     favNum={photo.favouriteCount} comNum={photo.commentsNum}/>);}))}
                </div>
            </div>
        </div>
    );
}



export default Search;
