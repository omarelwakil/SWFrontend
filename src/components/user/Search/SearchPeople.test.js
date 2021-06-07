import { render, cleanup,screen} from '@testing-library/react';
import SearchPeople from './SearchPeople';;

afterEach(cleanup);

describe('SearchPeople Render' , ()=>{
    test('SearchPeople Render', () => {
        render(<SearchPeople />);
        const helloElement = screen.getByText('Flickr members');
        expect(helloElement).toBeInTheDocument();
      });

});


