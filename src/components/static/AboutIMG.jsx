import React, { useState } from "react";
import Members from "../../Data/Members"
import './About.css';
/**
 * Component for About page images.
 *
 * @component
 * @example
 * return (
 *   <AboutIMG />
 * )
 */
function AboutIMG() {
      return ( 
            <div className="container-fluid" id="team-table">
                  <div className= "row justify-content-start">
                        {Members.map((Member, index) => {
                              return (
                                    <div key={index} className="col-lg-2 col-md-6 col-sm-8 text-center">
                                          <img
                                          src={Member.Image} 
                                          width="75" 
                                          height="75" 
                                          alt={Member.Name} />
                                          <p>{Member.Name}</p>
                                    </div>
                              );

                        })}
                  </div>   
            </div>
      );
}
export default AboutIMG;