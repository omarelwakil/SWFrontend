import Button from '../../Photo/Button/Button';
import './Album.css';

/**
 * Component of a specific album 
 * Internal components:
 *      Photo/Button
 * @component 
 * @type Component
 * 
 * @param {string} userId The user's id 
 * @param {string} key React special prop key 
 * @param {Object} album An object which holds the album details 
 * @param {string} albumCover The cover photo url 
 * @param {Function} deleteAlbum Function that deletes an album 
 * @returns <Album 
                userId={props.userId}
                key={album._id} 
                album={album} 
                albumCover={props.albumCover} 
                deleteAlbum={props.deleteAlbum}/>
 */
const Album = (props) => {
    const album = props.album;

     /**
     * Redirects to inner album
     */
    const goInnerAlbum = () => window.location.pathname = `/photos/${props.userId}/albums/${album._id}`;

    return (
        <div className="Album" style={{background: `url('${props.albumCover}') no-repeat 50%`}} onClick={goInnerAlbum}>
            <div className="album-details">
                <p className="fs-5">{album.title}</p>
                <p className="fs-6">{album.numberOfPhotos} photos</p>
                <a className="delete-album" onClick={(e)=>{
                    e.stopPropagation();
                    props.deleteAlbum(e, album._id);
                }}><Button tool="delete"/></a>
            </div>
        </div>
    );
}

export default Album;