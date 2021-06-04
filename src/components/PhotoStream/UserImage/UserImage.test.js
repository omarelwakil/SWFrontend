import react from 'react';
import ReactDOM from 'react-dom';
import UserImage from './UserImage';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UserImage/>, div);
});