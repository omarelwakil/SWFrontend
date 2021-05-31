import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import UserlessNaviagationBar from '../components/user/UserlessNavigationBar';
import Search from '../components/user/Search/Search';
import Footer from '../components/static/Footer';


function SearchPage() {
    const pathOfCurrent = window.location.pathname;
    const searchWord = pathOfCurrent.substr(8,pathOfCurrent.length-1);
    return (
        <BrowserRouter>
            <div>
                <title>Search:{" "+searchWord} |flicker</title>
                <UserlessNaviagationBar currentSearch={searchWord} />
                <Search />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default SearchPage;