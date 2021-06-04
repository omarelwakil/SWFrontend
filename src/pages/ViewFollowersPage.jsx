import React from 'react';
import { BrowserRouter, useParams } from 'react-router-dom';
import UserlessNaviagationBar from '../components/user/UserlessNavigationBar';
import ViewFollowers from '../components/user/ViewFollowers';
import Footer from '../components/static/Footer';

function ViewFollowersPage() {
    const { id } = useParams();
    return (
        <BrowserRouter>
            <div>
                <title>Who calls you a contact?</title>
                <UserlessNaviagationBar />
                <ViewFollowers userId={id} />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default ViewFollowersPage;