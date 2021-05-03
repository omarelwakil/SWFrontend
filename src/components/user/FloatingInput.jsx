import React from 'react';

import './FloatingInput.css';

function FloatingInput(){
    return (
        <div id="float-label">
            <input type="email" />
            <label htmlFor="email">
            Email address
            </label>
        </div>
    );
}

export default FloatingInput;