import react from 'react';
import ReactDOM from 'react-dom';
import PhotoBox from './PhotoBox';



it('renders without crashing', () => {
    const div = document.createElement('div');
    const photo =  {
        "_id": "5349b4ddd2781d08c09890f4",
          "tags": ["Tower","Egypt"],
          "views": 1023,
          "favouriteCount": 1023,
          "commentsNum": 1023,
          "creator": {
              "firstName": "Ahmed",
              "lastName": "Ibrahim"
          },
          "url":"https://live.staticflickr.com/65535/51140121587_393ff56218_n.jpg",
          "title": "Cairo Tower",
          "description": "Cairo tower at the sunset"
    };

    ReactDOM.render(
        <PhotoBox photo={photo}
            key={photo._id}
            userToken="4r3c1c414c14"/>, div);
});