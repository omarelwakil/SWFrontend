import react from 'react';
import ReactDOM from 'react-dom';
import UserCover from './UserCover';

it('renders without crashing', () => {
    const user =  {
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
      }
    const div = document.createElement('div');
    ReactDOM.render(<UserCover userData={user}/>, div);
});