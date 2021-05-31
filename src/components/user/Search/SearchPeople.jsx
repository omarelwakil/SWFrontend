import React,{useEffect, useState} from "react";
import './SearchPeople.css'
import Navbar from '../../Trending/Navbar/Navbar';
import MemberBox from './MemberBox';
import axios from 'axios';

function SearchPeople(){
  const pathOfCurrent = window.location.pathname;
  const searchWord = pathOfCurrent.substr(15,pathOfCurrent.length-1);
  const dataToSend = [
        { title: "Photos", path: "/search/photos/"+searchWord, selected: false },
        { title: "People", path: "/search/people/"+searchWord, selected: true },
  ];
  const position = "position-fixed";
  const Picurl = "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
  const name = "Ahmed Khalad";
  const id = "Ahemd_momp";
    return(
        <div id= "SearchPagePeople">
            <Navbar items={dataToSend} position={position} />
            <p>Flickr members</p>
            <div className="container-fluid">
                <div className ="row justify-content-start">
                     <MemberBox url={Picurl} name={name} id={id} photosNum={10000} followersNum={100} isFollowing={false} />
                     <MemberBox url={Picurl} name={name} id={id} photosNum={10000} followersNum={100} isFollowing={true}/>
                     <MemberBox url={Picurl} name={name} id={id} photosNum={10000} followersNum={100} isFollowing={true} />
                </div>
            </div>
        </div>
    );
}



export default SearchPeople;
