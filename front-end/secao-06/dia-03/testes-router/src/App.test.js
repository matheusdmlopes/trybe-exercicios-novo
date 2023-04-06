import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import App from './App';
import renderWithRouter from './renderWithRouter';

test('deve renderizar o componente App', () => {
  renderWithRouter(<App />)

  const title = screen.getByRole('heading', {
    name: 'Você está na página Início',
    level: 1
  })
});

test('deve renderizar o componente sobre', () => {

  const { history } = renderWithRouter(<App />)

  const about = screen.getByRole('link', {
    name: 'Sobre'
  })
  
  act(() => {
    userEvent.click(about)
  })
  

  const {pathname} = history.location

  expect(pathname).toBe('/about')

  const aboutTitle = screen.getByRole('heading', {
    name: 'Você está na página Sobre'
  })
})
