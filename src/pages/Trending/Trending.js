import { BrowserRouter } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './Trending.css';
import Navbar from '../../components/Trending/Navbar/Navbar'
import Main from '../../components/Trending/Main/Main'
import UserlessNavigationBar from '../../components/user/UserlessNavigationBar'
import Footer from '../../components/static/Footer';


//Requests Package
import axios from 'axios';

function Trending() {

  //http requests
  useEffect(() => {
    axios.defaults.baseURL = 'https://api.qasaqees.tech';
    axios.get('/tag/trending', {
      headers: {
        "Authorization": 'Bearer ' + localStorage.getItem['accessToken'],
        'Content-type': 'application/json'
      }
    })
      .then(response => response.data)
      .then(data => setTrendingState(data))
      .catch(error => console.log('Couldnot fetch data Trending.js'));
  }, []);

  const [trending, setTrendingState] = useState(null);

  //Hrefs:
  const [currentUrl, setCurrentUrl] = useState(window.location.pathname);

  const dataToSend = [
    { title: "Explore", path: "/explore", selected: false },
    { title: "Trending", path: "/photos/tags", selected: true }
  ];

  let main = null;
  if (trending !== null) {
    main = (
      <Main
        data={trending}
        url={currentUrl}
        setCurrentUrl={setCurrentUrl} />
    );
  }

  return (
    <BrowserRouter>
      <title>Popular Tags on Flickr | Flickr</title>
      <div className="trending">
        {/* It doesn't render the navbar each render */}
        <UserlessNavigationBar />
        <Navbar items={dataToSend} />
        {main}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default Trending;
