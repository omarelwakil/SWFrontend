import { cleanup } from '@testing-library/react';
import react from 'react';
import ReactDOM from 'react-dom';
import AlbumsPage from './AlbumsPage';

jest.mock('axios');
var axios = require('axios');
//If you use get, post write as below, If you are using axios(config) dont need to mock below
jest.mock('axios', () => ({ get: jest.fn() }));


// it('renders without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<AlbumsPage />, div);
// });

afterEach(cleanup);

describe('Sample Test', () => {
    it('Should get - Test', async () => {

        const mockedResponse = Promise.resolve({
           data: {}
        });

        axios.get.mockResolvedValue(mockedResponse);

    });
});
