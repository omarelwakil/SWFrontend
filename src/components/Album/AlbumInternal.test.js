import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AlbumInternal from './AlbumInternal';

configure({ adapter: new Adapter() });

describe ('AlbumInternal', () => {
    it('Should render all images that will come from the backend', () => {
        const wrapper = shallow (<AlbumInternal 
                                    albumId="60baabf254a4dd00128e1c1f"
                                    userId="60baab7c54a4dd00128e1c1e"
                                   />);
        expect(wrapper.find(Image)).not.toBeNull();
    });
});