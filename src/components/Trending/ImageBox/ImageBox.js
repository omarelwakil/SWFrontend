import './ImageBox.css'
/**
 * Component that renders a tag box for a specific photo
 * No internal components
 * @component 
 * @type Component
 * 
 * @param {Key} key React special key prop
 * @param {string} url Url of a specific photo 
 * @param {string} text The name of the tag
 * @param {string} link Url of the tag
 * @param {string} height CSS height value 
 * @returns <ImageBox 
                    key={image.photo._id} 
                    url={image.photo.url} 
                    text={image.name}
                    link={mainUrl+'/'+image.name}
                    height="186px"
                                    />
 */
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