import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LoginForm from './../LoginForm';

afterEach(cleanup);

test("The 'Login' component should be rendered on the screen", ()=>{
    render(
        <MemoryRouter>
            <LoginForm />
    </MemoryRouter>
    );
    const loginComponent = screen.getByTestId('login-component')
    expect(loginComponent).toBeInTheDocument();
})