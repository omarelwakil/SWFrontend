import React, { useState, useEffect } from 'react';
import './UploadMedia.css';
import toDataUrl from './toDataUrl';

function UploadMedia() {
 const [selectedFiles, setSelectedFiles] = useState([]);

 const handleImageChange = (e) => {

    if (e.target.files) {
     const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
     setSelectedFiles((prevImages) => prevImages.concat(filesArray));
     Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
    }
};
  const renderPhotos = (source) => source.map((photo) => <img id="added-photos" src={photo} alt="" key={photo} />);
  const [enabled , setEnabled] = useState(false);

  useEffect(() => {
    if (selectedFiles.length === 0) {
      setEnabled(false);
    } else {
      setEnabled(true);
    }
    }, [selectedFiles]);
    
    const handleUpload = (e) => {
      e.preventDefault();
      if (selectedFiles.length > 0){
        const base64Data = [];
        selectedFiles.forEach((selectedFiles) => {
          toDataUrl(selectedFiles)
          .then((dataUrl) => {
          base64Data.push(dataUrl);
          });
        })

      console.log(base64Data);
    }
  };

  return (
    <div>
      <div id="upload-nav">
        <div id="buttons">
          <div id="upload-photo">
            {enabled ? <button id="enabled-button" type="submit" form="a-form" onClick={handleUpload} > Upload </button> : <input id="disabled-button" type="button" value="Upload" />}
          </div>
          <form id="a-form" action="../Explore" method="post">
            <div id="add-photo">
              <button type="button" id="add-photo-button" title="Select files to upload">
                <span id="icon-plus">+</span>
                {' '}
                Add
              </button>
              <button type="button" id="add-photo-button" title="Select files to upload">
                <span id="icon-remove">x</span>
                {' '}
                Remove
              </button>
              <label htmlFor="add-files" className="custom-file-upload">
                <input type="file" id="add-files" multiple accept="image/*,video/*,.m4v,.mkv,.m2ts,.ogg,.3gp,.mp4" onChange={handleImageChange} />
                Add
              </label>
            </div>
          </form>
        </div>
      </div>
      <div id="working-area-container">
        <div
        id="empty-state"
        style={{
          visibility: enabled ? 'hidden' : 'visible',
        }}
        >
          <p id="upload-limit">
            You can upload 999 more photos and videos.
          </p>
          <button type="button" className="btn btn-primary" onClick={()=> {document.getElementById('add-files').click();}}> Choose photos and videos to upload</button>
          <br />
          <br />
    
        </div>
        <div id="result">
          {renderPhotos(selectedFiles)}
        </div>
      </div>
    </div>
  );
}

export default UploadMedia;
