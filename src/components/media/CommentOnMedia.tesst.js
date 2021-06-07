import { render, cleanup,screen} from '@testing-library/react';
import CommentOnMedia from './CommentOnMedia';;

afterEach(cleanup);

describe('CommentOnMedia Text area and props Render' , ()=>{
    test('renders Add a comment on text area', () => {
        render(<CommentOnMedia photoId={"60b9bfcab4298c001249955b"} />);
        const testComment = screen.getByText('Add a comment');
        expect(testComment).toBeInTheDocument();
      });

    test('renders photoId Passed to Props', () => {
        render(<CommentOnMedia photoId={"60b9bfcab4298c001249955b"} />);
        const testComment = screen.getByText('test');
        expect(testComment).toBeInTheDocument();
      });
});


