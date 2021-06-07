import { render, cleanup,screen} from '@testing-library/react';
import MemberBox from './MemberBox';;

afterEach(cleanup);

describe('MemberBox Props Render' , ()=>{
    test('renders Name Passed to Props', () => {
        render(<MemberBox name={"Hello"} />);
        const helloElement = screen.getByText('Hello');
        expect(helloElement).toBeInTheDocument();
      });

      test('renders ID Passed to Props', () => {
        render(<MemberBox id={"123456"} />);
        const idElement = screen.getByText('123456');
        expect(idElement).toBeInTheDocument();
      });

      test('renders Followers Number Above 1000 Passed to Props', () => {
        render(<MemberBox followersNum={100000} />);
        const favElement = screen.getByText('100K');
        expect(favElement).toBeInTheDocument();
      });

      test('renders Photos Number Above 1000 Passed to Props', () => {
        render(<MemberBox photosNum={100000} />);
        const photosElement = screen.getByText('100K');
        expect(photosElement).toBeInTheDocument();
      });


      test('renders follow if the users is not following to Props', () => {
        render(<MemberBox isFollowing={false}/>);
        const followElement = screen.getByText('Follow');
        expect(followElement).toBeInTheDocument();
      });

      test('renders following if the users is following to Props', () => {
        render(<MemberBox isFollowing={true} />);
        const followElement = screen.getByText('Followed');
        expect(followElement).toBeInTheDocument();
      });

});


