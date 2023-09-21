import React from 'react';
import { render, fireEvent, cleanup, wait } from '@testing-library/react';
import App from '../App';

jest.mock('../services', () => {
	return {
		getToDos: () =>
			Promise.resolve([
				{
					title: 'Book concert tickets',
					done: false,
					id: 1,
				},
				{
					title: 'Buy a new iPhone',
					done: true,
					id: 2,
				},
				{
					title: 'Write an article on React',
					done: true,
					id: 3,
				},
			]),
		addTodo: (obj) => Promise.resolve({ ...obj, id: 4 }),
	};
});

afterEach(cleanup);

describe('Snapshot testing the App', () => {
	it('Renders a Snapshot successfully', async () => {
		const { asFragment, getByPlaceholderText } = render(<App />);
		await wait(() => expect(asFragment()).toMatchSnapshot());

		const taskInput = getByPlaceholderText(/Add a task/i);
		fireEvent.change(taskInput, {
			target: { value: 'Write some integration tests for the project' },
		});
		fireEvent.keyUp(taskInput, { key: 'Enter', keyCode: 13 });
		await wait(() => expect(asFragment()).toMatchSnapshot());
	});
});
