import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import ProfileData from './../ProfileData';

afterEach(cleanup);

test("The 'ProfileData' component should be rendered on the screen", ()=>{
    render(<ProfileData
            data={{
                full_name:"Test Test",
                first_name:"Test",
                last_name:"Test",
                email:"test.test@mail.com"
            }}
            />);
    const profileDataComponent = screen.getByTestId('profile-data-component')
    expect(profileDataComponent).toBeInTheDocument();
})