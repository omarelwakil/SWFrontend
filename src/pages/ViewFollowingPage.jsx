import React from 'react';
import { BrowserRouter, useParams } from 'react-router-dom';
import Footer from '../components/static/Footer';
import UserlessNaviagationBar from '../components/user/UserlessNavigationBar';
import ViewFollowing from '../components/user/ViewFollowing';

function ViewFollowingPage() {
    const { id } = useParams();
    return (
        <BrowserRouter>
            <div>
                <title>People you follow</title>
                <UserlessNaviagationBar />
                <ViewFollowing userId={id} />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default ViewFollowingPage;