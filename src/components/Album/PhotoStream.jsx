import React, { useState } from 'react';

import './AlbumInternal.css';

function PhotoStream(probs){

    return(
        <div class="col-lg-3 col-sm-12 album-photo-col">
           <img id={probs.id} class="img-thumbnail album-photoStream" src={probs.url} />
        </div>
    );
}

export default PhotoStream;