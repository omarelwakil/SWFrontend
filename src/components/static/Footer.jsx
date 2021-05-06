import React from 'react';
// import ReactDOM from 'react-dom';

import './Footer.css';

function Footer() {
    return ( 
    <footer id="footer" >
        <div className = "container-fluid footer" > { /* <!-- Desktop Design --> */ } 
        <div id = "Desktop-footer" className = "container-fluid footer desktop" >
        <div className = "upper-row" >
        <ul className = "upper-list" >
        <li className = "list-inline-item" >< a className = "footer-upper-list-item" href = "/about" > About </a></li >
        <li className = "list-inline-item" >< a className = "footer-upper-list-item" href = "/jobs" > Jobs </a></li >
        <li className = "list-inline-item" >< a className = "footer-upper-list-item" href = "/blog" > Blog </a></li >
        <li className = "list-inline-item" >< a className = "footer-upper-list-item" href = "/services/developer" > Developers </a></li >
        <li className = "list-inline-item" >< a className = "footer-upper-list-item" href = "/help/guidelines" > Guidelines </a></li >
        <li className = "list-inline-item" >< a className = "footer-upper-list-item" href = "//help.flickr.com" > Help </a></li >
        <li className = "list-inline-item" >< a className = "footer-upper-list-item" href = "/abuse" > Report abuse </a></li >
        <li className = "list-inline-item" >< a className = "footer-upper-list-item" href = "/help/forum" > Help forum </a></li >
        <li className = "list-inline-item" >
        <div className = "dropdown" >
        <a className = "footer-upper-list-item" href = "#" >
        English 
        </a> {
            /* <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <li><a className="dropdown-item" href="#">Tiếng Việt</a></li>
                                                <li><a className="dropdown-item" href="#">Português</a></li>
                                                <li><a className="dropdown-item" href="#">Italiano</a></li>
                                            </ul> */
        } 
        </div> 
        </li> 
        </ul> 
        </div> { /* <!-- Lower part  --> */ } 
        <hr className = "footer-separator" />
        <div className = "row footer-lower-row" >
        <div className = "col-3 text-start" >
        <ul className = "list-unstyled list-inline" >
        <li className = "list-inline-item" >
        <a className = "footer-lower-list-item" href = "/help/privacy" > Privacy </a></li >
        <li className = "list-inline-item" >
        <a className = "footer-lower-list-item" href = "/help/terms" > Terms </a> 
        </li> 
        <li className = "list-inline-item" >
        <a className = "footer-lower-list-item" href = "/help/cookies" > Cookies </a> </li> 
        </ul> 
        </div> 
        <div className = "col-6 text-center" >
        <span >
        <a className = "footer-lower-list-item" href = "https://www.smugmug.com/" > SmugMug </a> +
        <a className = "footer-lower-list-item" href = "/" > Flickr </a>.</span> <span>
        Connecting people through photography. 
        </span> 
        </div> 
        <div className = "col-3 text-center" >
        <ul className = "list-unstyled list-inline" >
        <li className = "list-inline-item footer-lower-list-item" >
        <a className = "footer-lower-list-item" href = "https://www.facebook.com/flickr" >
        < i className = "fab fa-facebook fa-lg footer-social-icons" > </i></a >
        </li> 
        <li className = "list-inline-item footer-lower-list-item" > < a className = "footer-lower-list-item" href = "https://twitter.com/flickr" > < i className = "fab fa-twitter fa-lg footer-social-icons" > </i></a > </li>
        <li className = "list-inline-item footer-lower-list-item" > < a className = "footer-lower-list-item" href = "https://www.instagram.com/flickr/" >
        <i className = "fab fa-instagram fa-lg footer-social-icons" > </i></a> </li> 
        </ul> 
        </div> 
        </div> 
        </div> 
        { /* <!-- Mobile Design --> */ }
        <div id = "Mobile-footer" className = "container-fluid footer mobile" >
        <div className = "row upper-row" >
        <ul className = "upper-list" >
        <li className = "footer-mobile-li" > < a className = "footer-upper-list-item" href = "/about" > About </a></li >
        <hr className = "footer-mobile-li-separator"/>
        <li className = "footer-mobile-li" > < a className = "footer-upper-list-item" href = "/jobs" > Jobs </a></li >
        <hr className = "footer-mobile-li-separator"/>
        <li className = "footer-mobile-li" > < a className = "footer-upper-list-item" href = "//blog.flickr.net/en" > Blog </a></li >
        <hr className = "footer-mobile-li-separator"/>
        <li className = "footer-mobile-li" > < a className = "footer-upper-list-item" href = "/services/developer" > Developers </a></li >
        <hr className = "footer-mobile-li-separator"/>
        <li className = "footer-mobile-li" > < a className = "footer-upper-list-item" href = "/help/guidelines" > Guidelines </a></li >
        <hr className = "footer-mobile-li-separator"/>
        <li className = "footer-mobile-li" > < a className = "footer-upper-list-item" href = "/help/privacy" > Privacy </a></li >
        <hr  className = "footer-mobile-li-separator"/>
        <li className = "footer-mobile-li" > < a className = "footer-upper-list-item" href = "/help/terms" > Terms </a></li >
        <hr className = "footer-mobile-li-separator" />
        <li className = "footer-mobile-li" > < a className = "footer-upper-list-item" href = "/help/forum" > Help forum </a></li >
        <hr  className = "footer-mobile-li-separator" />
        <li className = "footer-mobile-li" >
        <div className = "dropdown" >
        <a className = "footer-upper-list-item" href = "#" >
        English </a> 
        {/* <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <li><a className="dropdown-item" href="#">Tiếng Việt</a></li>
                                                <li><a className="dropdown-item" href="#">Português</a></li>
                                                <li><a className="dropdown-item" href="#">Italiano</a></li>
                                            </ul> */}
         </div> 
        </li> 
        </ul> 
        </div> { /* <!-- Lower part  --> */ } 
        <hr  className = "footer-mobile-li-separator" />
        <div className = "row footer-lower-row" >
        <span >
        <a className = "footer-lower-list-item" href = "https://www.smugmug.com/" > SmugMug </a> +
        <a className = "footer-lower-list-item" href = "/" > Flickr </a>. 
        </span> <span >
        Connecting people through photography. </span> 
        <ul className = "list-unstyled list-inline" >
        <li className = "list-inline-item footer-lower-list-item" >
        <a className = "footer-lower-list-item" href = "https://www.facebook.com/flickr" > < i className = "fab fa-facebook fa-lg footer-social-icons" > </i></a >
        </li>
        <li className = "list-inline-item footer-lower-list-item" > < a className = "footer-lower-list-item"
        href = "https://twitter.com/flickr" > < i className = "fab fa-twitter fa-lg footer-social-icons" > </i></a></li> 
        <li className = "list-inline-item footer-lower-list-item" > < a className = "footer-lower-list-item" href = "https://www.instagram.com/flickr/" > < i className = "fab fa-instagram fa-lg footer-social-icons" > </i></a ></li> 
        </ul> 
        </div> 
        </div> 
        </div> 
        </footer>
    );
}

export default Footer;