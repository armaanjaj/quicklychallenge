import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Loader from './../Loader';

afterEach(cleanup);

test("The 'Loader' component should be rendered on the screen", ()=>{
    render(
        <MemoryRouter>
            <Loader />
    </MemoryRouter>
    );
    const loaderComponent = screen.getByTestId('loader-component')
    expect(loaderComponent).toBeInTheDocument();
})