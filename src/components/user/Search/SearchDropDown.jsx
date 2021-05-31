import React,{useEffect, useState} from "react";
import './SearchDropDown.css'
import PhotoSizeSelectActualOutlinedIcon from '@material-ui/icons/PhotoSizeSelectActualOutlined';
import PeopleIcon from '@material-ui/icons/People';
//import { Link } from 'react-router-dom';


function SearchDropDown(props){
    //props.search value to search
    const [searchTextWord,setSearchTextWord] = useState('');
    useEffect(()=>{setSearchTextWord(props.search)},[props.search]);

    function searchPhoto(){
        window.location.href="/search/photos/"+searchTextWord; 
    }
    function SearchPeople(){
        window.location.href="/search/people/"+searchTextWord; 
    }

    return(
        <div id= "SearchDropDown" className = "SearchDropDown-list">
             <ul className="list-group">
                <li className="list-group-item" onClick={searchPhoto}> <PhotoSizeSelectActualOutlinedIcon style={{ color: "grey"}} viewBox="0 2 25 25"/> Search photos</li>
                <li className="list-group-item" onClick={SearchPeople} ><PeopleIcon style={{ color: "grey"}} viewBox="0 2 25 25"/> Search people</li>
            </ul>
        </div>
    );
}



export default SearchDropDown;
