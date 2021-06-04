import './PhotoBox.css'
import Button from '../../Photo/Button/Button'
import { useState } from 'react'

const PhotoBox = (props) => {

    const photo = props.photo;

    const [showPhotoTools, setShowPhotoTools] = useState(false);
    const handlePhotoTools = () => setShowPhotoTools(!showPhotoTools);
    let photoTools = null;

    if(showPhotoTools){
        photoTools = (         
            <div className="row details p-1">
                <div className="col-6">
                    <span>{photo.title}</span> <br></br>
                    <span> By YOU!</span>
                </div>
                <div className="col-6 text-start align-self-end">
                    {['fav','comment'].map(tool => <Button key={tool} tool={tool}/>)}
                </div>
            </div> 
        );
    } else {
        photoTools = null;
    }

    
    return (
        <div className="PhotoBox">
            <a href={"/photo/getdetails/"+photo._id} onMouseEnter={handlePhotoTools} onMouseLeave={handlePhotoTools}>
                <img src={photo.photoUrl} style={{width: props.width, height: props.height}}/>
            </a>
        </div>
    );
}

export default PhotoBox;