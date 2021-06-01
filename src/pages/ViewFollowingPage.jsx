import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../components/static/Footer';
import UserlessNaviagationBar from '../components/user/UserlessNavigationBar';
import ViewFollowing from '../components/user/ViewFollowing';

function ViewFollowingPage() {
                    return ( 
                    <BrowserRouter>
                        <div>
                        <title > People you follow </title> 
                        <UserlessNaviagationBar />
                        <ViewFollowing />
                        <Footer />
                        </div> 
                        </BrowserRouter>
                    );
                }

 export default ViewFollowingPage;