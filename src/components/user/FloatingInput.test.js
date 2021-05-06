import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FloatingInput from './FloatingInput';


describe('Sign up Components' , ()=>{
    test('renders Name Passed to Props', () => {
        render(<FloatingInput name={"Hello"}/>);
        const helloElement = screen.getByText('Hello');
        expect(helloElement).toBeInTheDocument();
      });

});