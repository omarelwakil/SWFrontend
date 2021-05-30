import React,{useEffect, useState} from "react";
import './Search.css'
import Navbar from '../../Trending/Navbar/Navbar';
import PhotoBox from './PhotoBox';
import ImageBox from '../../Trending/ImageBox/ImageBox';

function Search(){

    const dataToSend = [
        { title: "Photos", path: "/search", selected: true },
        { title: "People", path: "/search", selected: false },
  ];

  const position = "position-fixed";

    return(
        <div id= "SearchPagePhotos">
            <Navbar items={dataToSend} position={position} />
            <p>Everyone's photos</p>
            <div className="container-fluid">
                <PhotoBox />
                <PhotoBox />

               
                
            </div>
        </div>
    );
}



export default Search;
