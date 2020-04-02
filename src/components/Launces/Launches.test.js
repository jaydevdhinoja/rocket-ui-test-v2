import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import Launches from '.';
import { cleanup } from '@testing-library/react';
import { InitialState, renderWithContext } from '../../utils/testData'
import { MemoryRouter } from 'react-router';

afterEach(cleanup);


describe('Launch Collection Listing', () => {
	test('renders component', () => {
		const { container } = renderWithContext(<MemoryRouter><Launches /></MemoryRouter>, { value: InitialState });

		expect(container).toMatchSnapshot();
	});

	test('renders component with loading flag', () => {
		const { getByText } = renderWithContext(<MemoryRouter><Launches /></MemoryRouter>, {
			value: { ...InitialState, loading: true }
		});

		expect(getByText(/LOADING/i)).toBeInTheDocument();
	});

	test('renders component with no listing', () => {
		const { getByText } = renderWithContext(<MemoryRouter><Launches /></MemoryRouter>, {
			value: { ...InitialState, loading: false, launchCollection: undefined }
		});

		expect(getByText(/NO DATA/i)).toBeInTheDocument();
	});
});
