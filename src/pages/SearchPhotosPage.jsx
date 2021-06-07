import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import UserlessNaviagationBar from '../components/user/UserlessNavigationBar';
import SearchPhotos from '../components/user/Search/SearchPhotos';
import Footer from '../components/static/Footer';

/**
 * Component for rendering SearchPhotosPage
 * Path => /search/photos/:searchText
 *
 * @component
 * @example
 * return (
 *   <SearchPhotosPage />
 * )
 */
function SearchPhotosPage() {
    const pathOfCurrent = window.location.pathname;
    const searchWord = pathOfCurrent.substr(15,pathOfCurrent.length-1);
    const searchWordWithSpaces = searchWord.replace(/%20/gi," ");
    return (
        <BrowserRouter>
            <div>
                <title>Search:{" "+searchWordWithSpaces} |flicker</title>
                <UserlessNaviagationBar currentSearch={searchWordWithSpaces} />
                <SearchPhotos />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default SearchPhotosPage;