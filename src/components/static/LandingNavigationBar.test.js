import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import LandingNavigationBar from './LandingNavigationBar';

configure({ adapter: new Adapter() });

describe('<UserAbout />', () => {

    it('should render logged in user', () => {
        let wrapper = mount(<LandingNavigationBar />);
        let element = wrapper.find("#sec-nav");
        expect(element).toHaveLength(1);
    });
});