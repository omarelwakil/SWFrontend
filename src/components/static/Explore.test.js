import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Explore from './Explore';

configure({ adapter: new Adapter() });

describe('Explore', () => {
    it('Should render all images that will come from the backend', () => {
        const wrapper = shallow(<Explore />);
        expect(wrapper.find(Image)).not.toBeNull();
    });
});