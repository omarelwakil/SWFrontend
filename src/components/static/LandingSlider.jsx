import React from 'react';
// import ReactDOM from 'react-dom';

import './LandingSlider.css';
/**
 * Component for showing the slider at the landing page.
 *
 * @component
 * @example
 * return (
 *   <LandingSlider />
 * )
 */
function LandingSlider(){
    return (
        <div className="landing-carousel">
            <div id="LandingImg" className="bg-image bg landing-carousel-img"></div>
            <h1 className="landing-carousel-heading1">Find your inspiration.</h1>
            <h3 className="landing-carousel-heading3">Join the Flickr community, home to tens of billions of photos and 2 million groups.</h3>
            <a href="/sign-up" className="sign-up-free">Start for free</a>
        </div>
    );
}

export default LandingSlider;