import React, { useState } from 'react';

import './AlbumInternal.css';
/**
 * Component for showing each photo stream of the user.
 *
 * @component
 * @example
 * const photoId = "asd15451a63s4d4d5s4"
 * const url = 'http://flicker.com/image.jpg'
 * return (
 *   <PhotoStream id={photoId} url={url} />
 * )
 */
function PhotoStream(probs){

    return(
        <div class="col-lg-3 col-sm-12 album-photo-col">
           <img id={probs.id} class="img-thumbnail album-photoStream" src={probs.url} />
        </div>
    );
}

export default PhotoStream;