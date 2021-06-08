import React, { Component } from 'react';
import axios from 'axios';

import './Explore.css';

/**
 * Component for flickr explore.
 *
 * @component
 * @example
 * return (
 *   <Explore />
 * )
 */
class Explore extends Component {

  state = {
    pictures: []
  }

  componentDidMount() {
    axios.defaults.baseURL = 'https://qasaqees.tech/api';
    axios.get('/photo/explore')
      .then(response => {
        const updatedPictures = response.data.photos.map(picture => {
          return {
            ...picture,
            className: 'myimg'
          }
        });
        this.setState({ pictures: updatedPictures });
      });
  }

  render() {

    const pictures = this.state.pictures.map((picture, index) => {
      return <div key={index} className="col-lg-3">
        <img className={picture.className} src={picture.url} alt={picture.title} />
        <div className="hide">
          <h2 className="picTitle fw-bold"> {picture.title} </h2>
          <h3 className="creator inline fw-bold"> By: {picture.creator.firstName} {picture.creator.lastName} </h3>
          <button type="button" className="btn btn-light"> <i className="far fa-star inline">   </i> {picture.favouritesNum}  </button>
          <button type="button" className="btn btn-light"> <i className="far fa-comment inline"></i> {picture.commentsNum}    </button>
        </div>
      </div>;
    });

    return (
      <div id="content" className="pt-3">
        <div className="main pt-5">
          <div className="container title-row">
            <div className="row">
              <h3 className="col-sm Explore-Title inline">Explore</h3>
              <div className="col-sm tools inline">
                <button type="button" className="btn share-button"><i className="fas fa-share"></i> Share</button>
                <button type="button" className="btn layout justified"><i className="fas fa-th-large"></i></button>
                <button type="button" className="btn layout story"><i className="fas fa-square"></i></button>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              {pictures}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Explore;
