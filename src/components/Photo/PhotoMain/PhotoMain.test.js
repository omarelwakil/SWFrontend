import react from 'react';
import ReactDOM from 'react-dom';
import PhotoMain from './PhotoMain';

it('renders without crashing', () => {
    const photo = {
        "description": "Used to test edit photo endpoint",
        "tags": [],
        "comments": [],
        "views": 3,
        "favouriteCount": 0,
        "isPublic": true,
        "license": "None",
        "safety": "Safe",
        "contentType": "Photo",
        "allowCommenting": true,
        "albums": [],
        "_id": "60b63494d9e8252f94fbc9aa",
        "title": "Edit Photo test v4",
        "url": "http://localhost:3000/public/images/60b5f47c2b026f150822c5fd/60b63494d9e8252f94fbc9a9.png",
        "creator": {
            "coverPhotoUrl": "http://localhost:3000/public/images/default/8.jpeg",
            "profilePhotoUrl": "http://localhost:3000/public/images/default/8.jpeg",
            "_id": "60b5f47c2b026f150822c5fd",
            "firstName": "Abdelrahman",
            "lastName": "Shahda",
            "userName": "test",
            "isFollowing": false,
            "id": "60b5f47c2b026f150822c5fd",
            "numberOfFollowers": 0
        },
        "createdAt": "2021-06-01T13:22:28.872Z",
        "updatedAt": "2021-06-01T16:40:25.424Z",
        "__v": 0,
        "commentsNum": 0
    };

    const user = {
          "showCase": {
              "title": "Showcase",
              "photos": []
          },
          "description": "",
          "occupation": "",
          "homeTown": "",
          "currentCity": "",
          "coverPhotoUrl": "https://combo.staticflickr.com/pw/images/coverphoto04_h.jpg.v3",
          "profilePhotoUrl": "https://combo.staticflickr.com/pw/images/buddyicon03_r.png#192784739@N02",
          "_id": "60b5f47c2b026f150822c5fd",
          "email": "test@test.com",
          "firstName": "Abdelrahman",
          "lastName": "Shahda",
          "userName": "test",
          "age": 22,
          "createdAt": "2021-06-01T08:49:00.059Z",
          "updatedAt": "2021-06-01T11:33:15.837Z",
          "__v": 1,
          "numberOfFollowers": 0,
          "numberOfPhotos": 132,
          "id": "60b5f47c2b026f150822c5fd",
          "numberOfFollowings": 1,
          "isFollowing": false
    };
    const div = document.createElement('div');
    ReactDOM.render(<PhotoMain photo={photo} user={user}/>, div);
});