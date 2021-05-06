import react from 'react';
import ReactDOM from 'react-dom';
import Trending from './Trending';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Trending/>, div);
});