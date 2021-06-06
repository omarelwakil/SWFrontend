import React, { useState } from 'react';

import './AlbumInternal.css';

function AlbumPhotos(probs){

    return(
        <div class="col-lg-3 col-sm-12 album-photo-col">
           <a href={`/photo/getdetails/${probs.photoId}`}><img class="img-thumbnail" src={probs.url} /></a>
        </div>
    );

}

export default AlbumPhotos;