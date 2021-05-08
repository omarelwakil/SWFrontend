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
    axios.defaults.baseURL = 'https://f6a8e4e3-57ed-4ad8-8204-d6958266d5c5.mock.pstmn.io';
    axios.get('/tag/trending')
      .then(response => response.data)
      .then(data => setTrendingState(data))
      .catch( error => console.log('Couldnot fetch data Trending.js'));
    },[]);

  const [trending, setTrendingState] = useState(null);

  //Hrefs:
  const [currentUrl, setCurrentUrl] = useState(window.location.pathname);

  let main = null; 
  if(trending !== null){
    main = (
      <Main 
        data={trending}
        url={currentUrl} 
        setCurrentUrl={setCurrentUrl}/>
    );
  }

  return (
    <BrowserRouter>
      <title>Popular Tags on Flickr | Flickr</title>
      <div className="trending">
        {/* It doesn't render the navbar each render */}
        <UserlessNavigationBar/>
        <Navbar />
        {main}
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default Trending;
