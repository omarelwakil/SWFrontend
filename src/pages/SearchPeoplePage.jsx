import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import UserlessNaviagationBar from '../components/user/UserlessNavigationBar';
import Footer from '../components/static/Footer';
import SearchPeople from '../components/user/Search/SearchPeople';


function SearchPeoplePage() {
    const pathOfCurrent = window.location.pathname;
    const searchWord = pathOfCurrent.substr(15,pathOfCurrent.length-1);
    const searchWordWithSpaces = searchWord.replace(/%20/gi," ");
    return (
        <BrowserRouter>
            <div>
                <title>Search:{" "+searchWordWithSpaces} |flicker</title>
                <UserlessNaviagationBar currentSearch={searchWordWithSpaces} />
                <SearchPeople />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default SearchPeoplePage;