import './PhotoBox.css'
import Button from '../../Photo/Button/Button'
import { useState } from 'react'
/**
 * Component that renders a photo box for each photo in PhotoStreamPage
 * Internal components:
 *      Photo/Button
 * @component 
 * @type Component
 * 
 * @param {Key} key React special key prop
 * @param {object} photo Object that holds details of a specific photo 
 * @param {string} height CSS height value 
 * @param {string} width CSS width value 
 * @returns <PhotoBox  
                    key={photo._id}
                    photo={photo} 
                    height="240px" 
                    width="240px"/>
 */
const PhotoBox = (props) => {

    const photo = props.photo;

    const [showPhotoTools, setShowPhotoTools] = useState(false);
    /**
     * Shows photo tools
     */
    const handlePhotoTools = () => setShowPhotoTools(!showPhotoTools);
    let photoTools = null;

    if (showPhotoTools) {
        photoTools = (
            <div className="row details p-1">
                <div className="col-6">
                    <span>{photo.title}</span> <br></br>
                    <span> By YOU!</span>
                </div>
                <div className="col-6 text-start align-self-end">
                    {['fav', 'comment'].map(tool => <Button key={tool} tool={tool} />)}
                </div>
            </div>
        );
    } else {
        photoTools = null;
    }


    return (
        <div className="PhotoBox">
            <a href={"/photo/getdetails/" + photo._id} onMouseEnter={handlePhotoTools} onMouseLeave={handlePhotoTools}>
                <img src={photo.url} style={{ width: props.width, height: props.height }} alt="" />
            </a>
        </div>
    );
}

export default PhotoBox;