import './Main.css'
import PhotoBox from '../PhotoBox/PhotoBox';

const Main = (props) => {


    const userPhotos = props.userPhotos;

    const cameraRoll = () => window.location.pathname = `/cameraRoll`;

    let main = null;

    if(userPhotos.length!==0){
        main = (
            <div className="photos">
                {userPhotos.map(photo => {
                    return <PhotoBox  
                    key={photo._id}
                    photo={photo} 
                    height="320px" 
                    width="240px"/>;
                })}
            </div>
        );
    } else {
        main = (
            <div className=" no-photos row text-center">
                <div className="fs-4 mb-3 mt-3">You have no public photos</div>
                <div className="fs-6 mb-2">Your photostream is your public-facing portfolio. Set your photos to public using the Camera Roll to populate your photostream.</div>
                <div className=""><button onClick={cameraRoll} className="button">Go to Camera Roll</button></div>
            </div>
        );
    }

    return (
        <div className="Main container">
            {main}
        </div>
    );
}

export default Main;