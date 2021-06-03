import { BrowserRouter} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './Trending.css';
import Navbar from '../../components/Trending/Navbar/Navbar'
import Main from '../../components/Trending/Main/Main'
import UserlessNavigationBar from '../../components/user/UserlessNavigationBar'
import Footer from '../../components/static/Footer';


//Requests Package
import axios from 'axios';

function Trending() {

  const baseUrl = 'https://api.qasaqees.tech';

  //MockURl: https://f6a8e4e3-57ed-4ad8-8204-d6958266d5c5.mock.pstmn.io

  //http requests
  useEffect(() => {
    axios.defaults.baseURL = baseUrl;
    
    axios.get('/tag/trending')
      .then(response => response.data)
      .then(data => setTrendingState(data['trendingTags']))
      .catch( error => console.log(error));
    },[]);

  const [trending, setTrendingState] = useState(null);
  
  //Hrefs:
  const [currentUrl, setCurrentUrl] = useState(window.location.pathname);

  const dataToSend = [
    { title: "Explore", path: "/explore", selected: false },
    { title: "Trending", path: "/photos/tags", selected: true }
  ];

  const homePage = () => window.location.pathname = '/';

  let main = null; 

  if(trending){
    main = (
      <Main 
        data={trending}
        url={currentUrl} 
        setCurrentUrl={setCurrentUrl}/>
    );

  } else{
    main = (
      <div className="error-photos">
        <h1>Error! Sorry, no data was found! </h1>
        <div className=""><button onClick={homePage} className="no-photos-button">Go to HomePage</button></div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <title>Popular Tags on Flickr | Flickr</title>
      <div className="trending">
        {/* It doesn't render the navbar each render */}
        <UserlessNavigationBar/>
        <Navbar items={dataToSend}/>
        {main}
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default Trending;
