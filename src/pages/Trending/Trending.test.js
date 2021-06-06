import { cleanup } from '@testing-library/react';
import react from 'react';
import ReactDOM from 'react-dom';
import Trending from './Trending';

var axios = require('axios');
//If you use get, post write as below, If you are using axios(config) dont need to mock below
jest.mock('axios', () => ({ get: jest.fn() }));


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Trending/>, div);
});


afterEach(cleanup);
const fakeTrending = 
{
    "trendingTags": [
        {
            "count": 120,
            "_id": "5349b4ddd2781d08c09890f4",
            "name": "nature",
            "photo": {
                "description": "Used to test edit photo endpoint",
                "tags": [
                    "60b646b5713aa239148be8a2",
                    "60b646b5713aa239148be8a3",
                    "60b646b6713aa239148be8a4",
                    "60b647455b90103070078df3",
                    "60b647755b90103070078df4",
                    "60b6483c9cd1194ad4d3e2fa",
                    "60b6483c9cd1194ad4d3e2fb",
                    "60b7a87073306f7fa83e53d6",
                    "60b7ddf70b24f13da065deee"
                ],
                "comments": [],
                "views": 4,
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
                "creator": "60b5f47c2b026f150822c5fd",
                "createdAt": "2021-06-01T13:22:28.872Z",
                "updatedAt": "2021-06-02T19:37:27.683Z",
                "__v": 0,
                "commentsNum": 0
            }
        }
    ]
}

describe('Sample Test', () => {
    it('Should get - Test', async () => {

        const mockedResponse = Promise.resolve({
           data: {fakeTrending}
        });

        axios.get.mockResolvedValue(mockedResponse);

    });
});
