import './ImageBox.css'

const ImageBox = (props) => {

    return (
        <div data-testid="ImageBox" className="imageBox" style={{backgroundImage: `url(${props.url})`, height: `${props.height}` }}>
            <a href={props.link}>
                <div className="overlay">
                    <div className="text">{props.text}</div>
                </div>
            </a>
        </div>
    );
}

export default ImageBox;