import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import UserlessNaviagationBar from '../components/user/UserlessNavigationBar';
import Search from '../components/user/Search/Search';
import Footer from '../components/static/Footer';


function SearchPage() {
    return (
        <BrowserRouter>
            <div>
                <title>Search: |flicker</title>
                <UserlessNaviagationBar />
                <Search />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default SearchPage;