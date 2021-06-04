import react from 'react';
import ReactDOM from 'react-dom';
import PhotoBox from './PhotoBox';

it('renders without crashing', () => {
    const photo = {
        "_id": "5349b4ddd2781d08c09890f4",
        "title": "Cat",
        "description": "image description",
        "tags": ["cat","animals"],
        "photoUrl": "https://live.staticflickr.com/65535/51140121587_393ff56218_n.jpg",
        "views": 1023,
        "favouriteCount": 1023,
        "commentsNum": 1023,
        "creator": {
           "firstName": "Abdelrahman",
           "lastName": "Shahda"
         }
    };
    const div = document.createElement('div');
    ReactDOM.render(
        <PhotoBox key={photo._id}
            photo={photo} 
            height="320px" 
            width="240px"/>, div);
});