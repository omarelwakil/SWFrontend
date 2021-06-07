import { render, cleanup,screen} from '@testing-library/react';
import SearchPhotos from './SearchPhotos';;

afterEach(cleanup);

describe('SearchPhotos Render' , ()=>{
    test('SearchPhotos Render', () => {
        render(<SearchPhotos />);
        const helloElement = screen.getByText("Everyone's photos");
        expect(helloElement).toBeInTheDocument();
      });

});


