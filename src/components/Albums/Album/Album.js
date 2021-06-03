import Button from '../../Photo/Button/Button';
import './Album.css';

const Album = (props) => {
    const album = props.album;

    const goInnerAlbum = () => window.location.pathname = `/photos/${props.userId}/albums/${album._id}`;

    return (
        <div className="Album" style={{background: `url('${props.albumCover}') no-repeat 50%`}} onClick={goInnerAlbum}>
            <div className="album-details">
                <p className="fs-5">{album.title}</p>
                <p className="fs-6">{album.numberOfPhotos} photos</p>
                <a className="delete-album" onClick={(e)=>props.deleteAlbum(e, album._id)}><Button tool="delete"/></a>
            </div>
        </div>
    );
}

export default Album;