import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Login from './Login';

configure({ adapter: new Adapter() });
const fbScript = document.createElement('script')
fbScript.id = 'facebook-jssdk'
document.body.appendChild(fbScript)

describe('<Login />', () => {

    it('should render login-with-facebook form', () => {
        let wrapper = mount(<Login />);
        let element = wrapper.find("#login");
        expect(element).toHaveLength(1);
    });
});