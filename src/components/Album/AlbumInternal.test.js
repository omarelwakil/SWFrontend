import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AlbumInternal from './AlbumInternal';

configure({ adapter: new Adapter() });

describe ('AlbumInternal', () => {
    it('Should render all images that will come from the backend', () => {
        const wrapper = shallow (<AlbumInternal 
                                    albumId="1"
                                   />);
        expect(wrapper.find(Image)).not.toBeNull();
    });
});