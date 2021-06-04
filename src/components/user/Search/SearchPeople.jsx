import React,{useEffect, useState} from "react";
import './SearchPeople.css'
import Navbar from '../../Trending/Navbar/Navbar';
import MemberBox from './MemberBox';
import axios from 'axios';
import { PersonPin } from "@material-ui/icons";

function SearchPeople(){
  const pathOfCurrent = window.location.pathname;
  const searchWord = pathOfCurrent.substr(15,pathOfCurrent.length-1);
  const dataToSend = [
        { title: "Photos", path: "/search/photos/"+searchWord, selected: false },
        { title: "People", path: "/search/people/"+searchWord, selected: true },
  ];
  const position = "position-fixed";
  const [accessToken] = useState(localStorage.getItem("accessToken"));
  const currentUserID = (accessToken === null) ? -1 :JSON.parse(localStorage.getItem("userData")).user._id;
  const [people,setPeople]=useState([]);
  //Get All Photos from the BE
  const getAllPeople = ()=>{
      axios.defaults.baseURL = "https://qasaqees.tech/api";
      if (accessToken === null) {
          localStorage.clear();
      }else
      {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
      }
      return (axios.get('/user/search/'+searchWord)
      .then((response) => {
          const allPeople = response.data.users;
          setPeople(allPeople);
      })
      .catch((error) => {
        if (error.response.status === 404) {
            console.log(error.response.data.message);
        }
    }));
  }
  //to call API only once
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {getAllPeople();}, []);
  const monthNames=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    return(
        <div id= "SearchPagePeople">
            <Navbar items={dataToSend} position={position} />
            <p>Flickr members</p>
            <div className="container-fluid">
                <div className ="row justify-content-start">
                     {(people.length > 0)?(people.map((person,index)=>{return((person._id !== currentUserID)&&<MemberBox key={index} id={person._id} 
                     url = {person.profilePhotoUrl} userName ={person.userName} name = {person.firstName + " "+person.lastName} followersNum={person.numberOfFollowers}
                     photosNum={person.numberOfPhotos} isFollowing={person.isFollowing} 
                     date ={monthNames[new Date(person.createdAt).getMonth()]+" "+ new Date(person.createdAt).getFullYear()} />);})):
                     <div className="push-footer">No people are found</div>}
                </div>
            </div>
        </div>
    );
}



export default SearchPeople;
