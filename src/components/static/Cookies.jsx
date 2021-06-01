import React from 'react';
import './Cookies.css';

import Navbar from '../Trending/Navbar/Navbar';


function Cookies() {
    const dataToSend = [
        { title: "Terms", path: "/help/terms", selected: false },
        { title: "Privacy", path: "/help/privacy", selected: false },
        { title: "Community", path: "/help/guidelines", selected: false },
        { title: "Cookies", path: "/help/cookies", selected: true }
    ];
    const position = "position-static";
    return (
        <div id="cookies" className="container-fluid">
            <div className="heading">
                <p className="m-0">Policies & Guidelines</p>
            </div>
            <Navbar items={dataToSend} position={position} />
            <div className="bg-colored">
                <div className="heading-title">
                    <p>Flickr Policy on Cookies</p>
                </div>
                <div className="content-cookies">
                    <p><strong>Date of Last Revision: August 19, 2018</strong></p>
                </div>
                <div className="heading-title-i">
                    <p>What are cookies?</p>
                </div>
                <div className="content-cookies">
                    <p>Cookies are small strings of characters that can be placed on your computer or mobile device via standard browser techniques that uniquely identifies your browser or device. We may use technologies like cookies, pixels and local storage to deliver, secure, and understand products and services.</p>
                </div>
                <div className="heading-title-i">
                    <p>How long will cookies stay on my device?</p>
                </div>
                <div className="content-cookies">
                    <p>The length of time a cookie will stay on your computer or mobile device depends on whether it is a "persistent" or "session" cookie. Session cookies will only stay on your device until you stop browsing. Persistent cookies stay on your computer or mobile device until they expire or are deleted.</p>
                </div>
                <div className="heading-title-i">
                    <p>First and third party cookies</p>
                </div>
                <div className="content-cookies">
                    <p>First-party cookies are cookies that belong to Flickr, third-party cookies are cookies that another party accesses or places on your device through our Service. Third-party cookies may be placed on your device by someone providing a service for Flickr, for example to help us understand how our service is being used. Third-party cookies may also be placed on your device by our business partners so that they can use them to advertise products and services to you elsewhere on the Internet. These companies’ use of cookies and similar technologies is subject to their own privacy policies, not the Flickr Privacy Policy.</p>
                </div>
                <div className="heading-title-i">
                    <p>Why does Flickr use cookies and similar technologies?</p>
                </div>
                <div className="content-cookies">
                    <p>We use cookies, pixels, local storage, and similar technologies to show you relevant content, improve your experience, and help protect Flickr and our users. We may use these technologies to deliver the service, provide you with a service that is easy to use, enable you to move around the Service and use its features, such as accessing secure areas, and storing information so that Flickr can respond faster. We may use these technologies to collect information about how you use the Service, for example which pages you go to most often and if you get error messages from certain pages. We may use these technologies to allow us to remember choices you make (such as your user name, the currency you wish to view purchases in or content you have provided access credentials to) and tailor the Service to provide enhanced features and content for you. Flickr or our advertising partners may use these technologies to deliver advertising that is relevant to your interests, for example if you are already a Flickr customer, they could be used to not show you advertisements to join Flickr. These technologies can remember that your device has visited a site or service, and may also be able to track your device's browsing activity on other sites or services other than Flickr which also make use of the services of these third parties. This information may be shared with organizations outside Flickr, such as advertisers and/or advertising networks to deliver the advertising, and to help measure the effectiveness of an advertising campaign. We may use these technologies to understand, improve, and research products and services.</p>
                    <p>The cookies we use generally fall into one of the following categories.</p>
                    <ul className={"bigger-list"}>
                        <li>Category of Cookies</li>
                        <p>Why we use these cookies</p>
                        <li>Technical/Required</li>
                        <p>These cookies are essential for our services to function properly. Like the other cookies we use, technical cookies may be either first-party cookies or third-party cookies.</p>
                        <li>Preferences</li>
                        <p>We use these cookies to remember your settings and preferences. For example, we may use these cookies to remember your language preferences.</p>
                        <li>Performance</li>
                        <p>We use these cookies to collect information about how you interact with our services and to help us improve them. For example, we may use these cookies to determine if you have interacted with a certain page.</p>
                        <li>Analytics</li>
                        <p>We use these cookies to help us understand and improve our services.For example, we can use these cookies to learn more about which features are the most popular with our users and where we may need to make improvements.</p>
                        <li>Advertising</li>
                        <p>We and our advertising partners use these cookies to deliver advertisements, to make them more relevant and meaningful to visitors to our website, and to track the efficiency of our advertising campaigns.</p>
                    </ul>
                </div>
                <div className="heading-title-i">
                    <p>How to control cookies or other collection mechanisms</p>
                </div>
                <div className="content-cookies">
                    <p>Follow the instructions provided by your browser or mobile device (usually located within the "Help", "Tools" or "Edit" facility) to modify your cookie settings. Please be advised that if you set your browser to disable cookies or other technologies, you may not be able to access certain parts of our Service and other parts of our Service will not work properly. In addition, you have other choices with respect to how cookies are used:</p>
                    <ul>
                        <li>To prevent your data from being used by Google Analytics, you can install <a href="https://tools.google.com/dlpage/gaoptout">Google’s opt-out browser add-on</a> .</li>
                        <li>For information on how our advertising partners allow you to opt out of receiving ads based on your web browsing history, please visit <a href="http://optout.aboutads.info">http://optout.aboutads.info</a>. European users may opt out of receiving targeted advertising through the <a href="https://www.youronlinechoices.eu/">European Interactive Digital Advertising Alliance</a>.</li>
                        <li>To opt out of ads on Facebook, Pinterest, or Google that are targeted to your interests, use your <a href="https://www.facebook.com/adpreferences/ad_settings/?entry_product=settings_ads_page_redirection">Facebook</a>, <a href="https://help.pinterest.com/en/article/personalized-ads-on-pinterest">Pinterest</a>, or <a href="https://adssettings.google.com/authenticated">Google Ads</a> settings.</li>
                        <li>Check your mobile device for settings that control ads based on your interactions with the applications on your device. For example, on your iOS device, enable the “Limit Ad Tracking” setting, and on your Android device, enable the “Opt out of Ads Personalization” setting.</li>
                        <li>To delete or disable flash cookies please visit <a href="https://www.adobe.com/devnet/flashplayer/security.html">https://www.adobe.com/devnet/flashplayer/security.html</a>.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cookies;