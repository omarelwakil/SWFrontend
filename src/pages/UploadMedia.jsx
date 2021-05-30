import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import UserlessNaviagationBar from '../components/user/UserlessNavigationBar';
import UploadMedia from '../components/user/UploadMedia';

function UploadPage() {
                    return ( 
                    <BrowserRouter>
                        <div>
                        <title > Flicker:Upload photos and videos </title> 
                        <UserlessNaviagationBar />
                        <UploadMedia />
                        </div> 
                        </BrowserRouter>
                    );
                }
                
 export default UploadPage;