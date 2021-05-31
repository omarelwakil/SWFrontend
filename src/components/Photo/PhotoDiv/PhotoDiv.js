import './PhotoDiv.css';
import Button from '../Button/Button';

const PhotoDiv = (props) => {
    const tools = ['edit', 'share', 'download', 'buy', 'full'];
    return(
        <div className="PhotoDiv">
            <div className="back-link">
                <a>
                    <p><i class="fas fa-arrow-left"></i>&nbsp;&nbsp;<span>Back to album</span></p>
                </a>
            </div>
            <div className="photo-box">
                {/* TODO: Hovering the img -> zoom cursor with implem */}
                <img src="https://live.staticflickr.com/65535/51140121587_448494ab01_n.jpg"/>
                {/* Zoom in button */}
            </div>
            <div className="tools-div">
                {/* Make button component for each button below */}
                <div className="full-screen-tool">
                    {/* One button for resizing */}
                    <Button tool={tools[4]}/>
                </div>
                <div className="tools-buttons">
                    {/* 4 buttons */} 
                    {tools.slice(0,4).map(element => <Button key={element} tool={element}/>)}
                </div>
            </div>
        </div>
    );
}

export default PhotoDiv;
