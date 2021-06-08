import './PhotoDiv.css';
import Button from '../Button/Button';
/**
 * Component that renders photo's section in PhotoPage
 * Internal components:
 *      Button
 * @component
 * @type Component
 * 
 * @param {string} url The url of a specific photo
 * @param {string} photoId The photo's id   
 * @param {string} userId The id of the photo owner
 * @returns 
 *          <PhotoDiv 
 *                  url={photo.url} 
 *                  photoId={photoId}
 *                  userId={user._id} />
 */
const PhotoDiv = (props) => {
    const tools = ['edit', 'share', 'download', 'buy', 'full'];

    return(
        <div className="PhotoDiv">
            <div className="back-link">
                <a href={"/photos/" + props.userId}>
                    <p><i className="fas fa-arrow-left"></i>&nbsp;&nbsp;<span>Back to photostream</span></p>
                </a>
                <div className="full-screen-tool">
                    {/* One button for resizing */}
                    <Button tool={tools[4]}/>
                </div>
            </div>
            <div className="photo-box">
                {/* TODO: Hovering the img -> zoom cursor with implem */}
                <img src={props.url}/>
                {/* Zoom in button */}
            </div>
            <div className="tools-div">
                {/* Make button component for each button below */}
                <div className="tools-buttons">
                    {/* 4 buttons */} 
                    {tools.slice(0,4).map(element => <Button key={element} tool={element}/>)}
                </div>
            </div>
        </div>
    );
}

export default PhotoDiv;
