import react from 'react';
import ReactDOM from 'react-dom';
import Albums from './Albums';

it('renders without crashing', () => {
    const userAlbums = [
        {
            "_id": "5349b4ddd2781d08c09890f4",
             "title": "Paris pics",
             "description": "Paris pics 2019",
             "creator": "2149b4ddd2781d08c09890a1",
             "views": 1023,
             "numberOfPhotos": 6
        }
    ];

    const albumCoverPhoto = "https://live.staticflickr.com/65535/51140121587_393ff56218_n.jpg";
    
    const div = document.createElement('div');
    ReactDOM.render(
        <Albums 
            userAlbums={userAlbums} 
            albumCover={albumCoverPhoto}/>, div);
});