import {BrowserRouter} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import './Trending.css';
import Navbar from '../../components/Trending/Navbar/Navbar'
import Main from '../../components/Trending/Main/Main'
import UserlessNavigationBar from '../../components/user/UserlessNavigationBar'
import fakeData from '../../assets/FakeData/FakeData'


//Requests Package
import axios from 'axios';

function Trending() {
  
  //http requests
  useEffect(()=>{
    axios.get('https://8c50b8cb-d4ba-4271-bb60-ebd5f626d072.mock.pstmn.io/tag/trending')
      .then(response => {
        console.log(response.data);
      });
  },[]);

  console.log(JSON.stringify(fakeData));

  const [trendingNow, setTrendingNowState] = useState(fakeData.trendingNow);
    
  const [trendingWeek, setTrendingWeekState] = useState(fakeData.trendingWeek);

  const [mostPopular, setMostPopular] = useState(fakeData.mostPopular);

   //Hrefs:
   let [currentUrl, setCurrentUrl] = useState(window.location.pathname);

  return (
    <BrowserRouter>
      <div className="trending">
        {/* It doesn't render the navbar each render */}
        <UserlessNavigationBar/>
        <Navbar />
        <Main 
          trendingNow={trendingNow} 
          trendingWeek={trendingWeek} 
          mostPopular={mostPopular} 
          url={currentUrl} 
          setCurrentUrl={setCurrentUrl}/>
      </div>
    </BrowserRouter>
  );
}

export default Trending;
