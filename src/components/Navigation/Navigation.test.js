import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import Navigation from '.'
import { cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { InitialState, renderWithContext } from '../../utils/testData'

afterEach(cleanup);

describe('Launch Collection Listing', () => {
	test('renders component', () => {
		const { container } = renderWithContext(<MemoryRouter><Navigation/></MemoryRouter>, { value: InitialState });
		expect(container).toMatchSnapshot();
	});
});