import React,{useEffect, useState} from "react";
import './SearchPhotos.css'
import Navbar from '../../Trending/Navbar/Navbar';
import PhotoBox from './PhotoBox';
import axios from 'axios';

function SearchPhotos(){
  const pathOfCurrent = window.location.pathname;
  const searchWord = pathOfCurrent.substr(15,pathOfCurrent.length-1);
  console.log(searchWord);
  const dataToSend = [
        { title: "Photos", path: "/search/photos/"+searchWord, selected: true },
        { title: "People", path: "/search/people/"+searchWord, selected: false },
  ];
  const position = "position-fixed";

  const [photos,setPhotos]=useState([]);
  const [notfound ,setNotFound]=useState(false);
  //Get All Photos from the BE
  const getAllPhotos = ()=>{
      axios.defaults.baseURL = "https://qasaqees.tech/api";
      return (axios.get('/tag/'+searchWord)
      .then((response) => {
          const allPhotos = response.data.media;
          setPhotos(allPhotos);
      })
      .catch((error) => {
        if (error.response.status === 404) {
            setNotFound(true);
            console.log(error.response.data.message);
        }
    }));
  }
  //to call API only once
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {getAllPhotos();}, []);
    return(
        <div id= "SearchPagePhotos">
            <Navbar items={dataToSend} position={position} />
            <p>Everyone's photos</p>
            <div className="container-fluid">
                <div className = "row justify-content-start">
                    {(photos.length > 0)&&(photos.map((photo,index)=>{return((photo.isPublic === true)&&<PhotoBox key={index} id={photo._id} 
                     url = {photo.url} title = {photo.title} userName={photo.creator.firstName +" "+ photo.creator.lastName} 
                     favNum={photo.favouriteCount} comNum={photo.commentsNum}/>);}))}
                      {notfound&&<div className="push-footer">No Photos are found</div>}
                </div>
            </div>
        </div>
    );
}



export default SearchPhotos;
