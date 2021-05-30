import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import UserlessNaviagationBar from '../components/user/UserlessNavigationBar';
import ViewFollowing from '../components/user/ViewFollowing';

function ViewFollowingPage() {
                    return ( 
                    <BrowserRouter>
                        <div>
                        <title > People you follow </title> 
                        <UserlessNaviagationBar />
                        <ViewFollowing />
                        </div> 
                        </BrowserRouter>
                    );
                }

 export default ViewFollowingPage;