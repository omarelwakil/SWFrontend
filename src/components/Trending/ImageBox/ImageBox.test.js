import react from 'react';
import ReactDOM from 'react-dom';
import {render, cleanup} from '@testing-library/react';
import ImageBox from './ImageBox';

//important
afterEach(cleanup);

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ImageBox/>, div);
});


it('renders ImageBox correctly', ()=>{
    const {getByTestId} = render(
        <ImageBox
            key="0"
            url="https://live.staticflickr.com/5672/23585214746_6119c8a9ed_m.jpg" 
            text="outside"
            link="https://www.flickr.com/photos/tags/vowel"
            height="186px"
        />
    );

    expect(getByTestId('ImageBox')).toHaveClass('imageBox');
});