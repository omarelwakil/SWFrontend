import React, { useState } from 'react';

import './AlbumInternal.css';

function AlbumPhotos(probs){

    return(
        <div class="col-lg-3 col-sm-12">
           <img class="img-thumbnail" src={probs.url} />
        </div>
    );

}

export default AlbumPhotos;