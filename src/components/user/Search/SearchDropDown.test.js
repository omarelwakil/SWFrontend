import { render, cleanup,screen} from '@testing-library/react';
import SearchDropDown from './SearchDropDown';;

afterEach(cleanup);

describe('SearchDropDown Props Render' , ()=>{
    test('renders Search photos Passed to Props', () => {
        render(<SearchDropDown search={"Hello"} />);
        const titleElement = screen.getByText('Search photos');
        expect(titleElement).toBeInTheDocument();
      });

      test('renders Search people Passed to Props', () => {
        render(<SearchDropDown search={"Hello"} />);
        const titleElement = screen.getByText('Search people');
        expect(titleElement).toBeInTheDocument();
      });

    
});


