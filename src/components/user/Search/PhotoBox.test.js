import { render, cleanup,screen} from '@testing-library/react';
import PhotoBox from './PhotoBox';;

afterEach(cleanup);

describe('MemberBox Props Render' , ()=>{
    test('renders Name Passed to Props', () => {
        render(<PhotoBox title={"Hello"} />);
        const titleElement = screen.getByText('Hello');
        expect(titleElement).toBeInTheDocument();
      });

      test('renders fav below 999 Passed to Props', () => {
        render(<PhotoBox favNum={123} />);
        const favElement = screen.getByText('123');
        expect(favElement).toBeInTheDocument();
      });

      test('renders fav above 999 Passed to Props', () => {
        render(<PhotoBox favNum={123456} />);
        const favElement = screen.getByText('999+');
        expect(favElement).toBeInTheDocument();
      });


      test('renders commens above 999 Passed to Props', () => {
        render(<PhotoBox comNum={13555} />);
        const favElement = screen.getByText('999+');
        expect(favElement).toBeInTheDocument();
      });

      test('renders commens below 999 Passed to Props', () => {
        render(<PhotoBox comNum={200} />);
        const favElement = screen.getByText('200');
        expect(favElement).toBeInTheDocument();
      });

});


