import React,{useEffect, useState} from "react";
import './SearchDropDown.css'
import PhotoSizeSelectActualOutlinedIcon from '@material-ui/icons/PhotoSizeSelectActualOutlined';
import PeopleIcon from '@material-ui/icons/People';

function SearchDropDown(props){
    //props.search value to search
    const [searchText,setSearchText] = useState('');
    useEffect(()=>{setSearchText(props.search)},[props.search]);
    console.log(searchText);
    return(
        <div id= "SearchDropDown" className = "SearchDropDown-list">
             <ul className="list-group">
                <li className="list-group-item"> <PhotoSizeSelectActualOutlinedIcon style={{ color: "grey"}} viewBox="0 2 25 25"/> Search photos</li>
                <li className="list-group-item"><PeopleIcon style={{ color: "grey"}} viewBox="0 2 25 25"/> Search people</li>
            </ul>
        </div>
    );
}



export default SearchDropDown;
