import { cleanup } from '@testing-library/react';
import react from 'react';
import ReactDOM from 'react-dom';
import CameraRoll from './CameraRoll';

var axios = require('axios');
//If you use get, post write as below, If you are using axios(config) dont need to mock below
jest.mock('axios', () => ({ get: jest.fn() }));

const fakeCameraRoll = {
    "cameraRoll": [
       {
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
              "showCase": {
                  "title": "Showcase",
                  "photos": []
              },
              "description": "",
              "occupation": "",
              "homeTown": "",
              "currentCity": "",
              "coverPhotoUrl": "http://localhost:3000/public/images/default/8.jpeg",
              "profilePhotoUrl": "http://localhost:3000/public/images/default/8.jpeg",
              "_id": "60b5f47c2b026f150822c5fd",
              "email": "test@test.com",
              "firstName": "Abdelrahman",
              "lastName": "Shahda",
              "userName": "test",
              "age": 22,
              "createdAt": "2021-06-01T08:49:00.059Z",
              "updatedAt": "2021-06-01T11:33:15.837Z",
              "__v": 1,
              "id": "60b5f47c2b026f150822c5fd",
              "numberOfFollowers": 0,
              "numberOfFollowings": 1,
              "isFollowing": false
          },
          "createdAt": "2021-06-01T13:22:28.872Z",
          "updatedAt": "2021-06-01T16:40:25.424Z",
          "__v": 0,
          "commentsNum": 0
      }
    ],
  }

describe('Sample Test', () => {
    it('Should get - Test', async () => {

        const mockedResponse = Promise.resolve({
           data: {fakeCameraRoll}
        });

        axios.get.mockResolvedValue(mockedResponse);

    });
});
