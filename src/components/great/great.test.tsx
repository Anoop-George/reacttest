import { render, screen } from '@testing-library/react';
import Greet from './greet';

test('testing great element',()=>{
    render(<Greet/>);
    const textele = screen.getByText('Greet');
    expect(textele).toBeInTheDocument();
    console.log(textele);
},5)