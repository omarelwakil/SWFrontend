import react from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';

it('renders without crashing', () => {
    const userPhotos = [
        {
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
        }, {
           "_id": "5349b4ddd2781d08c09890f3",
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
        }
     ];

    const div = document.createElement('div');
    ReactDOM.render(
        <Main 
            userPhotos={userPhotos} 
            userId="5125125151515166161"
            userToken="c12e1041c41c41" 
            />, div);
});