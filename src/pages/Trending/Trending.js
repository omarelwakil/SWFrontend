import { BrowserRouter } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './Trending.css';
import Navbar from '../../components/Trending/Navbar/Navbar'
import Main from '../../components/Trending/Main/Main'
import UserlessNavigationBar from '../../components/user/UserlessNavigationBar'
import Footer from '../../components/static/Footer';

import fakeData from '../../assets/FakeData/FakeData'


//Requests Package
import axios from 'axios';

function Trending() {

  //http requests
  useEffect(() => {
    axios.defaults.baseURL = 'https://f6a8e4e3-57ed-4ad8-8204-d6958266d5c5.mock.pstmn.io';
    axios.get('/tag/trending')
      .then(response => {
        console.log(response);
        console.log(response.data);
      });
  }, []);

  console.log(JSON.stringify(fakeData));

  const [trendingNow, setTrendingNowState] = useState(fakeData.trendingNow);

  const [trendingWeek, setTrendingWeekState] = useState(fakeData.trendingWeek);

  const [mostPopular, setMostPopular] = useState(fakeData.mostPopular);

  //Hrefs:
  let [currentUrl, setCurrentUrl] = useState(window.location.pathname);
  const dataToSend = [
    { title: "Explore", path: "/explore", selected: false },
    { title: "Trending", path: "/photos/tags", selected: true }
  ];
  return (
    <BrowserRouter>
      <title>Popular Tags on Flickr | Flickr</title>
      <div className="trending">
        {/* It doesn't render the navbar each render */}
        <UserlessNavigationBar />
        <Navbar items={dataToSend} />
        <Main
          trendingNow={trendingNow}
          trendingWeek={trendingWeek}
          mostPopular={mostPopular}
          url={currentUrl}
          setCurrentUrl={setCurrentUrl} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default Trending;
