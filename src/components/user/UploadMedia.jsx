import React, { useState, useEffect } from 'react';
import './UploadMedia.css';
import toDataUrl from './toDataUrl';
import { IconButton } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';

function UploadMedia() {
 const [selectedFiles, setSelectedFiles] = useState([]);
 const [restData, setRestData] = useState([]);
 const [photoTag, setPhotoTag] = useState([]);
 const [photoPrivacy, setPhotoPrivacy] = useState('public');


 const handleImageChange = (e) => {

    if (e.target.files) {
      const restDataArray =[];
      Array.from(e.target.files).forEach((file) => {
        const data ={};
        data.fileName = file.name;
        data.fileDate = new Date();
        restDataArray.push(data);
      } );

      setRestData((prevData) => prevData.concat(restDataArray));


     const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
     setSelectedFiles((prevImages) => prevImages.concat(filesArray));
     Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
    }
};
    const deleteItem =(i) => {
      setSelectedFiles((currentItems) => currentItems.filter((item, index) => index !==i ));
      setRestData((currentItems) => currentItems.filter((item, index) => index !==i));


    }
  const renderPhotos = (source) => source.map((photo , index) => (
    <div key={photo}>
      <img id="added-photos" src={photo} alt=""/>
      {' '}
      <IconButton id="cancel-button" color="secondary" onClick={() => deleteItem(index)}>
        <CancelIcon fontSize="small"/>
      </IconButton>

    </div>
    

  )); 
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
        const dataArray = [];
        selectedFiles.forEach((selectedFile, index) => {
          const data ={};
          data.title = restData[index].fileName;
          data.date = restData[index].fileDate;
          data.tag = photoTag;
          toDataUrl(selectedFiles)
          .then((dataUrl)=> {
            data.src = dataUrl;
            const image = new Image();
            image.src = dataUrl;
            image.onload = function imageDimensions() {
              data.photoWidth = this.width;
              data.photoHight = this.height;
            };
            fetch()

          }
          
          
          )
        }
        
        )
        //selectedFiles.forEach((selectedFiles) => {
        //  toDataUrl(selectedFiles)
         // .then((dataUrl) => {
         // base64Data.push(dataUrl);
         // });
       // })

     // console.log(base64Data);
    }
  };

  return (
    <div>
    <div id="upload-nav">
      <div id="buttons">
        <div id="upload-photo">
          {/* Upload button (intially disabled ) */}
          {enabled ? <button id="enabled-button" type="submit" form="a-form" onClick={handleUpload}> Upload </button> : <input id="disabled-button" type="button" value="Upload" /> }
        </div>
        <form id="a-form" action="../Explore" method="post">
          {/* Add photos button */}
          <div id="add-photo">
            <button type="button" id="add-photo-button" title="Select files to upload">
              <span id="icon-plus">+</span>
              {' '}
              Add
            </button>
            <button type="button" id="add-photo-button">
                <span id="icon-remove">x</span>
                {' '}
                Remove
              </button>
            <label htmlFor="add-files" id="custom-file-upload">
              <input type="file" id="add-files" multiple accept="image/,video/,.m4v,.mkv,.m2ts,.ogg,.3gp,.mp4" onChange={handleImageChange} />
              Add
            </label>
          </div>
        </form> 
      </div>
    </div>
    <div id="working-area-container">
      {/* No photos added state */}
      <div
        id="empty-state"
        style={{
          visibility: enabled ? 'hidden' : 'visible',
        }}
      >
        <p id="upload-limit">
          You can upload 999 more photos and videos.
        </p>
        <button type="button" className="btn btn-primary" onClick={() => { document.getElementById('add-files').click(); }}>Choose photos and videos to upload</button>
        <br />
        <br />
      </div>
      {/* photos added state */}
      <div id="result">
        {renderPhotos(selectedFiles)}
      </div>
      {/* photos edit panel */}
      <div
        id="edit-panel"
        style={{
          visibility: enabled ? 'visible' : 'hidden',
        }}
      >
        <h3 id="edit-panel-title">Editing photos:</h3>
        <div id="edit-panel-list">
          <ul id="edit-options">
            <li id="edit-option">
              <h4 id="edit-option-title">Add tags</h4>
              <input type="text" name="tag" id="edit-input-tags" placeholder="Separate tags with a space" onChange={(event) => setPhotoTag(event.target.value)} />
            </li>
            <li id="edit-option">
              <h4 id="edit-option-title">Privacy</h4>
              <label htmlFor="private">
                <input type="radio" id="private" name="privacy" value="private" onClick={() => setPhotoPrivacy('private')} />
                {' '}
                Private
              </label>
              <br />
              <label htmlFor="public">
                <input type="radio" id="public" name="privacy" value="public" defaultChecked onClick={() => setPhotoPrivacy('public')} />
                {' '}
                Public
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  );
}

export default UploadMedia;
