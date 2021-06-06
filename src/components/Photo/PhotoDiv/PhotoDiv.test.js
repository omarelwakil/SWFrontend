import react from 'react';
import ReactDOM from 'react-dom';
import PhotoDiv from './PhotoDiv';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PhotoDiv/>, div);
});