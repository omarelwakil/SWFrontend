import './PhotoDiv.css';
import Button from '../Button/Button';

const PhotoDiv = (props) => {
    const tools = ['edit', 'share', 'download', 'buy', 'full'];

    return(
        <div className="PhotoDiv">
            <div className="back-link">
                <a href={"/user/photostream/" + props.userId}>
                    <p><i class="fas fa-arrow-left"></i>&nbsp;&nbsp;<span>Back to photostream</span></p>
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
