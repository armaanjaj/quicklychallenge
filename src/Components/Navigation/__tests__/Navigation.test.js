import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from './../Navigation';

afterEach(cleanup);

test("The 'Navigation' component should be rendered on the screen", ()=>{
    render(
        <MemoryRouter>
            <Navigation/>
        </MemoryRouter>);
    const navigationComponent = screen.getByTestId('navigation-component')
    expect(navigationComponent).toBeInTheDocument();
})