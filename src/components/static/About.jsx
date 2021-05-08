import React from 'react';
import './About.css';
import AboutIMG from "./AboutIMG";

function About() {
  return (
    <div id="about-comp" className="container-fluid">
      <div id="main" className="row">
        <div id="main-sidebar" className="col-md-auto">
          <ul id="ul">
            <li id="mouse-over"><a href="/">Take the tour</a></li>
            <li id="mouse-over"><a href="/help/guidelines">Community guidelines</a></li>
            <li id="mouse-over"><a href="/jobs">Jobs</a></li>
          </ul>
          <p id="signup-block">
            <a href="/sign-up" ><img src="https://combo.staticflickr.com/pw/images/tour/en-us/create-account-button.png" width="193" height="39" alt="Create Account" /></a>
            <li id="mouse-over"><a href="/login">or Sign In</a> </li>
          </p>
          <h3>Need help?</h3>
          <p id="mouse-over">
            <a href="/help">Visit our FAQ</a><br />
            <a href="/help">Get help by email</a>
          </p>
        </div>
        <div id="main-body" className="col-md-auto">
          <h1 className="pink">About Flickr</h1>
          <h2>Flickr - almost certainly the best online photo management and sharing application in the world - has <i>two main goals</i>:</h2>
          <blockquote>
            <h3><b className="number">1.</b> We want to <b>help people make their photos available to the people who matter to them</b>.</h3>
            <p>Maybe they want to keep a blog of moments captured on their cameraphone, or maybe they want to show off their best pictures or video to the whole world in a bid for web celebrity. Or maybe they want to securely and privately share photos of their kids with their family across the country. Flickr makes all these things possible and more!</p>
            <p>To do this, we want to <b>get photos and video into and out of the system in as many ways as we can</b>: from the web, from mobile devices, from the users' home computers and from whatever software they are using to manage their content. And we want to be able to push them out in as many ways as possible: on the Flickr website, in RSS feeds, by email, by posting to outside blogs or ways we haven't thought of yet. What else are we going to use those smart refrigerators for?</p>
            <h3><b className="number">2.</b> We want to <b>enable new ways of organizing photos and video</b>.</h3>
            <p>Once you make the switch to digital, it is all too easy to get overwhelmed with the sheer numberber of photos you take or videos you shoot with that itchy trigger finger. Albums, the principal way people go about organizing things today, are great -- until you get to 20 or 30 or 50 of them. They worked in the days of getting rolls of film developed, but the "album" metaphor is in desperate need of a Florida condo and full retirement.</p>
            <p>Part of the solution is to make the process of organizing photos or videos collaborative. In Flickr, you can give your friends, family, and other contacts permission to organize your stuff - not just to add comments, but also notes and tags. People like to ooh and ahh, laugh and cry, make wisecracks when sharing photos and videos. Why not give them the ability to do this when they look at them over the internet? And as all this info accretes as metadata, you can find things so much easier later on, since all this info is also searchable.</p>
          </blockquote>
          <p id="mouse-over">Flickr continues to evolve in myriad ways, all of which are designed to make it easier and better. Check out the <a href="/">Flickr Blog</a> to stay apprised of the latest developments. The fact that you've read to the end of this entire document and are hanging out at the bottom of this page with nothing but this silly text to keep you company is proof of a deep and abiding interest on your part. What are you waiting for?
                          <a href="/sign-up"><b>Sign up now!</b></a>
          </p>
          <h2 id="team" className="pink">The Team</h2>
          <AboutIMG />

        </div>
      </div>
    </div>

  );
}

export default About;