import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SignupForm from './../SignupForm';

afterEach(cleanup);

test("The 'Signup' component should be rendered on the screen", ()=>{
    render(<MemoryRouter><SignupForm /></MemoryRouter>);
    const signupComponent = screen.getByTestId('signup-component')
    expect(signupComponent).toBeInTheDocument();
})