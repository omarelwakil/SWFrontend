import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FloatingInputPassword from './FloatingInputPassword';


describe('Sign up Components' , ()=>{
    test('renders Name Passed to Props', () => {
        render(<FloatingInputPassword name={"Hello"}/>);
        const helloElement = screen.getByText('Hello');
        expect(helloElement).toBeInTheDocument();
      });
});