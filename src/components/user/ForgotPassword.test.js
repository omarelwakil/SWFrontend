import { render, cleanup,screen} from '@testing-library/react';
import { configure, shallow, mount, act } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ForgotPassword from './ForgotPassword';

afterEach(cleanup);

configure({ adapter: new Adapter() });
describe('ForgotPassword' , ()=>{
      test('renders forgot password panal', () => {
      render(<ForgotPassword />); 
      const buttonText = screen.getByText('Change your Flickr password');
      expect(buttonText).toBeInTheDocument();
 }); });