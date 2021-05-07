import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import './Guidelines.css';

import Navbar from '../Trending/Navbar/Navbar';

class Guidelines extends Component {
  render() {
    const dataToSend = [
      { title: "Terms", path: "/help/terms", selected: false },
      { title: "Privacy", path: "/help/privacy", selected: false },
      { title: "Community", path: "/help/guidelines", selected: true },
      { title: "Cookies", path: "/help/cookies", selected: false }
    ];
    const position = "position-static";
    return (
      <div id="content">
        <div>
          <div>
            <div>
              <div>
                <div className="header">
                  <div className="help-header-container">
                    <h1 className="header-title mb-0">Policies &amp; Guidelines</h1>
                  </div>
                </div>
                <div className="Taps">
                  <Navbar items={dataToSend} position={position} />
                </div>
                <section id="guidelines-section" className="pt-4">
                  <section>
                    <h2 className="inner-title">Flickr Community guidelines</h2>
                    <p className="section-message fw-bold">Flickr accounts are intended for members to share original photos and video that they themselves have created.</p>
                    <p className="section-message">These Community Guidelines are here to help you understand what it means to be a member of Flickr. Don't forget that your use of Flickr is subject to these Community Guidelines and our <Link to="/terms">Terms of Service</Link>.</p>
                  </section>
                  <section className="help-section">
                    <p className="section-title fw-bold">Things to do</p>
                    <ul>
                      <li>
                        <p className="section-message fw-bold">Play nice</p>
                        <p className="section-message">We're a global community of many types of people, who all have the right to feel comfortable and who may not think what you think, believe what you believe, or see what you see. So, be polite and
                            respectful in your interactions with other members.</p>
                      </li>
                      <li>
                        <p className="section-message fw-bold">Only upload content that you have created.</p>
                        <p className="section-message">Respect the copyright of others. This means don't steal photos or videos that other people have shared and pass them off as your own. (That's what favorites and galleries are for.)</p>
                      </li>
                      <li>
                        <p className="section-message fw-bold">Moderate your content.</p>
                        <p className="section-message">All content on Flickr, whether public or private, has to be appropriately moderated using our safety and content filters.</p>
                      </li>
                      <li>
                        <p className="section-message fw-bold">Link back to Flickr when you post your Flickr content elsewhere.</p>
                        <p className="section-message">Flickr makes it possible to post content hosted on Flickr to other web sites. Pages on other web sites that display content hosted on Flickr must provide a link from each photo or video back to its page on
                            Flickr. This provides a way to get more information about the content and the photographer.</p>
                      </li>
                      <li>
                        <p className="section-message fw-bold">Enjoy Flickr!</p>
                        <p className="section-message">This is your community. Celebrate your creativity, be social and share what's important to you. See the world through others' eyes, participate, find your muse, and expand your horizons!
                          </p>
                      </li>
                    </ul>
                  </section>
                  <section className="help-section">
                    <p className="section-title fw-bold">Things not to do</p>
                    <p className="section-message">Here's the deal: We like to give second chances. However, when we discover you stepping across any of the lines listed below, we will take action, which may mean deleting your account with or without
                    warning.
                      </p>
                    <ul>
                      <li>
                        <p className="section-message fw-bold">Don't upload collections of photos that aren’t yours.</p>
                        <p className="section-message">This includes other people's photos, video, and/or stuff you've copied or collected from around the Internet. Accounts that consist of such collections may be deleted at any time.</p>
                      </li>
                      <li>
                        <p className="section-message fw-bold">Don't violate copyright laws</p>
                        <p className="section-message">If you see photos or videos that you've created in another member's photostream, don't panic. This is probably just a misunderstanding and not malicious. A good first step is to contact them via FlickrMail
                        and
                            politely ask them to remove it. If that doesn’t work, you can file a Notice with Flickr's Designated Copyright Agent.</p>
                      </li>
                      <li>
                        <p className="section-message fw-bold">Don't forget to moderate your content</p>
                        <p className="section-message">Set the appropriate content filters for your images and videos. In general, anything containing mature content (e.g. nudity, gore) needs to be moderated appropriately. This includes your buddy icon and
                        cover
                            photo. Also, sexually explicit videos (e.g. pornography) are not permitted. Videos of artistic nature or educational purpose that contain nudity may be allowed under the moderate safety setting. For additional details check <Link to="/safety">here</Link>.</p>
                      </li>
                      <li>
                        <p className="section-message fw-bold">Don’t forget to set the appropriate content type</p>
                        <p className="section-message">Set the appropriate content type for your images. In general, anything that is not a photo or video should be classified as a Screenshot or Art/Illustration. For additional details check <Link to="/contenttype">here</Link>.</p>
                      </li>
                      <li>
                        <p className="section-message fw-bold">Don’t harm children</p>
                        <p className="section-message">To say that Flickr has a zero tolerance policy towards harmful content involving minors would be an understatement. In protecting children from criminal predators, particularly in crimes involving child
                        sexual
                            abuse, we will aggressively report and cooperate with law enforcement with the goal of prosecuting to the full extent of the law. This includes, but is not limited to, images, video, comments, faves, and other communications.</p>
                      </li>
                      <li>
                        <p className="section-message fw-bold">Don't be creepy.</p>
                        <p className="section-message">You know the guy. Don't be that guy. If you are that guy, your account will be deleted.</p>
                      </li>
                      <li>
                        <p className="section-message fw-bold">Don't upload content that is illegal or prohibited.</p>
                        <p className="section-message">This includes but is not limited to drug use, bestiality, and terrorism. If we find you doing it, your account will be deleted and we'll take appropriate action, which may include reporting you to law
                            enforcement.</p>
                      </li>
                      <li>
                        <p className="section-message fw-bold">Don’t harass other users</p>
                        <p className="section-message">Flickr is not a venue for you to harass, abuse, spam, impersonate, or intimidate others. So, be polite and respectful in your interactions with other users.</p>
                      </li>
                      <li>
                        <p className="section-message fw-bold">Don’t violate users’ privacy.</p>
                        <p className="section-message">Flickr has a zero tolerance policy towards distributing sexually graphic images of another person without that person’s consent (Non-Consensual Pornography). If you’re a victim, please go <Link to="/support">here</Link> for 24-hour support, and <Link to="/badass-army">here</Link> to meet the Badass Army.</p>
                      </li>
                      <li>
                        <p className="section-message fw-bold">Don’t use hate speech.</p>
                        <p className="section-message">Flickr has a zero-tolerance policy towards attacking a person or group based on, but is not limited to, race, ethnicity, national origin, religion, disability, disease, age, sexual orientation, gender, or
                            gender identity.</p>
                      </li>
                      <li>
                        <p className="section-message fw-bold">Don’t promote or encourage self-harm.</p>
                        <p className="section-message">We do not tolerate promotion of self-harm or the encouragement of others to do things that might cause them to get hurt.</p>
                      </li>
                      <li>
                        <p className="section-message fw-bold">Don't host web graphics</p>
                        <p className="section-message">Flickr is not a place to host generic graphic elements of web page designs, logos, banners, icons, and other non-photographic elements.</p>
                      </li>
                      <li>
                        <p className="section-message fw-bold">Don’t spam</p>
                        <p className="section-message">We do not tolerate spam, period. This includes, but is not limited to, excessive favoriting, excessive commenting, deceptive tagging, deceptive photo titles and descriptions, or resource abuse.</p>
                      </li>
                      <li>
                        <p className="section-message fw-bold">Don't use Flickr for commercial activity, unless you’re a Flickr Pro.</p>
                        <p className="section-message">Only Flickr Pro members are permitted to link directly to a shopping cart, checkout page, or pricing pages on other sites. Flickr Pros may also list prices for their products in their Flickr photo
                            descriptions.</p>
                      </li>
                    </ul>
                  </section>
                  <section className="help-section">
                    <p className="section-title fw-bold">In Conclusion</p>
                    <p className="section-message">If you don't feel that you can abide by our Community Guidelines as outlined above, maybe Flickr isn't for you. We've crafted these guidelines to ensure that everyone within the Flickr community
                    has
                        a good time.</p>
                    <p className="section-message">You may also want to check out our <Link to="/help">Help Center</Link> and <Link to="/privacy">Privacy Policy</Link>. If you ever have any questions or comments,
                        we'd
                        love to hear from you. Please feel free to drop us a line via our <Link to="/contact">webform</Link>.</p>
                    <p className="section-message fw-bold">The Flickreenos, Dec 17, 2018</p>
                  </section>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Guidelines;
