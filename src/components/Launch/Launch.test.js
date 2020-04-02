import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import Launch from '.';
import { cleanup } from '@testing-library/react';
import { InitialState, renderWithContext } from '../../utils/testData'

afterEach(cleanup);

const props = {
	launch :{
	   launch_id: '1',
	   flight_number: 1,
	   rocket: {
		rocket_id: 'falcon 1'
	   }
	}
}

describe('Launch Collection Listing', () => {
	test('renders component', () => {
		const { container } = renderWithContext(<Launch {...props} />, {value: InitialState });
		expect(container).toMatchSnapshot();
	});

	test('renders Launch - Rocket Details', () => {

        // Act
        const { getByText } = renderWithContext(<Launch {...props} />, { value: InitialState });

        // Assert
        //expect(getByText((content, element) => content.startsWith('Flight Number'))).toBeInTheDocument()
        expect(getByText('Flight Number:',{ exact: false })).toBeInTheDocument()
        expect(getByText('Rocket ID:', { exact: false })).toBeInTheDocument()
        expect(getByText('Cost:', { exact: false })).toBeInTheDocument()
        expect(getByText('Description:', { exact: false })).toBeInTheDocument()
    })
});
