import React from 'react';
// import ReactDOM from 'react-dom';

import './LandingSlider.css';

function LandingSlider(){
    return (
        // <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        //     <div className="carousel-inner">
        //         <div className="carousel-item active">
        //         <img className="landing-carousel-img" src="https://combo.staticflickr.com/ap/build/images/sohp/2020-top-25/Tree_and_Morning_Mist_Jos_Buurmans.jpg" alt="Tree_and_Morning"/>
        //         </div>
        //         <div className="carousel-item">
        //         <img className="landing-carousel-img" src="https://combo.staticflickr.com/ap/build/images/sohp/2020-top-25/Cool_Power_commended-LPOTY_UK_Steve_Cole.jpg" alt="Cool_Power"/>
        //         </div>
        //         <div className="carousel-item">
        //         <img className="landing-carousel-img" src="https://combo.staticflickr.com/ap/build/images/sohp/2020-top-25/Mists_of_renfrew_Adam_Gibbs.jpg" alt="renfrew"/>
        //         </div>
        //     </div>
        // </div>
        <div className="landing-carousel">
            <img className="landing-carousel-img show" src="https://combo.staticflickr.com/ap/build/images/sohp/2020-top-25/Cool_Power_commended-LPOTY_UK_Steve_Cole.jpg" alt="1-Cool_Power"/>
            <img className="landing-carousel-img hide" src="https://combo.staticflickr.com/ap/build/images/sohp/2020-top-25/Happy_Birthday_Adam_Iwona_Podlasinska.jpg" alt="2-Cool_Power" />
            <img className="landing-carousel-img hide" src="https://combo.staticflickr.com/ap/build/images/sohp/2020-top-25/Tree_and_Morning_Mist_Jos_Buurmans.jpg" alt="3-Tree_and_Morning"/>
            <img className="landing-carousel-img hide" src="https://combo.staticflickr.com/ap/build/images/sohp/2020-top-25/Mists_of_renfrew_Adam_Gibbs.jpg" alt="4-renfrew"/>
            <img className="landing-carousel-img hide" src="https://combo.staticflickr.com/ap/build/images/sohp/2020-top-25/Cool_Power_commended-LPOTY_UK_Steve_Cole.jpg" alt="1-Cool_Power"/>
            <img className="landing-carousel-img hide" src="https://combo.staticflickr.com/ap/build/images/sohp/2020-top-25/Happy_Birthday_Adam_Iwona_Podlasinska.jpg" alt="2-Cool_Power" />
            <img className="landing-carousel-img hide" src="https://combo.staticflickr.com/ap/build/images/sohp/2020-top-25/Tree_and_Morning_Mist_Jos_Buurmans.jpg" alt="3-Tree_and_Morning"/>
            <img className="landing-carousel-img hide" src="https://combo.staticflickr.com/ap/build/images/sohp/2020-top-25/Mists_of_renfrew_Adam_Gibbs.jpg" alt="4-renfrew"/>
            <h1 className="landing-carousel-heading1">Find your inspiration.</h1>
            <h3 className="landing-carousel-heading3">Join the Flickr community, home to tens of billions of photos and 2 million groups.</h3>
            <a href="/sign-up" className="sign-up-free">Start for free</a>
        </div>
    );
}

export default LandingSlider;