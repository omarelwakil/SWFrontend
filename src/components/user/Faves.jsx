import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Faves.css';
import PhotoBox from './Search/PhotoBox';

function Faves(props) {
    const [accessToken] = useState(localStorage.getItem("accessToken"));
    // if (accessToken === null) {
    //     localStorage.clear();
    //     window.location.href = "/login";
    // };
    const userData = props.userToSend;
    const userID = userData._id

    const [faves, setFaves] = useState([]);
    useEffect(() => {
        axios.defaults.baseURL = "https://qasaqees.tech/api";
        if (accessToken !== null)
            axios.defaults.headers['Authorization'] = "Bearer " + accessToken;
        axios.get('/user/fav/' + userID)
            .then((response) => {
                const allFaves = response.data.favorites;
                setFaves(allFaves);
            })
            .catch((error) => {
                if (error.response.status === 404) {
                    console.log(error.response.data.message);

                }
            })
    }, []);

    return (
        <div id="faves" className="container-fluid">
            <div className="row m-0 p-0">
                {(faves.length > 0) ? (faves.map((fave, index) => {
                    return (
                        <div className="col-4 p-3 m-2" key={index}>
                            <PhotoBox key={index} id={fave._id}
                                url={fave.url} title={fave.title} userName={fave.creator.firstName + " " + fave.creator.lastName}
                                favNum={fave.favouriteCount} comNum={fave.commentsNum} />
                        </div>
                    );
                })) : null
                }
            </div>
            <div className="row px-0 m-0">
                <div className="col-12 p-0 m-0">
                    {userData !== null && faves.length === 0 ?
                        <div className="heading position-relative">
                            {userData.sameUser === true ?
                                <div className="position-absolute centered">
                                    <h1 className="fw-500">Start picking your faves. Just click on the star.</h1>
                                    <p className="fw-500"> Like something you see? Let the favegrapher know by clicking on the star icon. </p>
                                    <a href='/explore'><button>Start exploring flicker</button></a>
                                </div> :
                                <div className="position-absolute centered">
                                    <h1 className="fw-500">{userData.firstName} {userData.lastName} doesn't have any favorites yet.</h1>
                                    <p className="fw-500">Stay tuned.</p>
                                </div>
                            }
                            <div className="w-75 d-flex justify-content-center my-5 m-auto">
                                <img className="w-100" src="https://combo.staticflickr.com/ap/build/images/emptypages/faves3.jpg" alt="Snow" />
                            </div>
                        </div> : null
                    }
                </div>
            </div>
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