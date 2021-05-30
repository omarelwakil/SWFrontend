import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import UserlessNaviagationBar from '../components/user/UserlessNavigationBar';
import ViewFollowers from '../components/user/ViewFollowers';

function ViewFollowersPage() {
                    return ( 
                    <BrowserRouter>
                        <div>
                        <title > Who calls you a contact ?</title> 
                        <UserlessNaviagationBar />
                        <ViewFollowers />
                        </div> 
                        </BrowserRouter>
                    );
                }
                
 export default ViewFollowersPage;