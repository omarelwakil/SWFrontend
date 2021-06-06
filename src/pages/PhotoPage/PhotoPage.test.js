import { cleanup } from '@testing-library/react';
import react from 'react';
import ReactDOM from 'react-dom';
import PhotoPage from './PhotoPage';


var axios = require('axios');
//If you use get, post write as below, If you are using axios(config) dont need to mock below
jest.mock('axios', () => ({ get: jest.fn() }));

const fakePhotoDetails = {
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
    "commentsNum": 0,
    "isFavourite": true
}

describe('Sample Test', () => {
    it('Should get - Test', async () => {

        const mockedResponse = Promise.resolve({
           data: {fakePhotoDetails}
        });

        axios.get.mockResolvedValue(mockedResponse);

    });
});
