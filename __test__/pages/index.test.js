/**
 * @jest-environment jsdom
 */


import { render, screen, queryClient } from '../test-utils';
import { server } from '../../mocks/server';
import Home from '../../pages';

beforeAll(() => {
  server.listen();
});
afterEach(() => {
  server.resetHandlers();
});
afterAll(() => {
  server.close();
});

jest.mock('next/router', () => require('next-router-mock'))
it('SSR prefetch test' ,() => {
	queryClient.setQueryData('name', {name: 'John Doe'})

	render(<Home/>)

	expect(screen.getByText('John Doe')).toBeInTheDocument(); 

})