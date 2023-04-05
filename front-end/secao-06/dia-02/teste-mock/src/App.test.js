// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';


afterEach(() => jest.clearAllMocks());

it('fetches a joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  });

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith(
    'https://icanhazdadjoke.com/',
    { headers: { Accept: 'application/json' } },
  );
});

it('fetches a new joke when button is clicked', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  jest.spyOn(global,'fetch');
  global.fetch.mockResolvedValueOnce({
    json:jest.fn().mockResolvedValue(joke),
  })

  render(<App/>);
  
  const getRenderedJoke= await screen.findByText('Whiteboards ... are remarkable.')
  expect(getRenderedJoke).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(1)
  expect(global.fetch).toHaveBeenCalled();

  const joke2 = {
    id: '123',
    joke: 'Sei lá.',
    status: 369,
  }
  
  const getBtn = screen.getByRole('button')

  global.fetch.mockResolvedValueOnce({
    json: jest.fn().mockResolvedValue(joke2)
  })

  userEvent.click(getBtn)

  const getRenderedJoke2 = await screen.findByText('Sei lá.')
  expect(getRenderedJoke2).toBeInTheDocument();
  expect(screen.queryByText('Whiteboards ... are remarkable.')).not.toBeInTheDocument();
});