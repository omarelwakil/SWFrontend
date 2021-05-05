import React from 'react';

import './PasswordMeter.css';
function PasswordMeter(props) {


        
       
    return (
        <div className="progress" style={{height:'4px'}}>
            <div className="progress-bar short " style={{width:props.width,background:props.bg}}>

            </div>
        </div>
    );

}

export default PasswordMeter;