import React, { useState } from 'react';

import './AlbumInternal.css';
/**
 * Component for showing each album photo of the user.
 *
 * @component
 * @example
 * const photoId = "asd15451a63s4d4d5s4"
 * const url = 'http://flicker.com/image.jpg'
 * return (
 *   <AlbumPhotos photoId={photoId} url={url} />
 * )
 */
function AlbumPhotos(probs){

    return(
        <div class="col-lg-3 col-sm-12 album-photo-col">
           <a href={`/photo/getdetails/${probs.photoId}`}><img class="img-thumbnail" src={probs.url} /></a>
        </div>
    );

}

export default AlbumPhotos;