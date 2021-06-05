import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../components/static/Footer';
import InnerTrend from '../components/static/InnerTrend';
import UserlessNavigationBar from '../components/user/UserlessNavigationBar';

function InnerTrendPage() {
    return (
        <BrowserRouter>
            <div>
                <title>Photos on flicker | Flickr </title>
                <UserlessNavigationBar />
                <InnerTrend/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default InnerTrendPage;