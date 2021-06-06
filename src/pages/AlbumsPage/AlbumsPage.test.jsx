import { cleanup, render, waitFor, screen } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import AlbumsPage from './AlbumsPage';



var axios = require('axios');

//If you use get, post write as below, If you are using axios(config) dont need to mock below
jest.mock('axios', () => ({ get: jest.fn() }));

const fakeAlbums = {
    "albums": [
       {
          "views": 2,
          "description": "Used for testing the edit album endpoint",
          "_id": "60b624781b913c19185a8403",
          "title": "editAlbumTest",
          "creator": "60b5f47c2b026f150822c5fd",
          "createdAt": "2021-06-01T12:13:44.299Z",
          "updatedAt": "2021-06-01T13:08:29.540Z",
          "__v": 0,
          "numberOfPhotos": 1
      }
    ]
  }

describe('Sample Test', () => {

    it('Should get albums', async () => {
        
        const mockedResponse = Promise.resolve({
            data: {fakeAlbums}
        });
        
        axios.get.mockResolvedValue(mockedResponse);
        
    });
});


