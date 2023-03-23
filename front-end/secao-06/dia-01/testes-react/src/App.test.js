import { render, screen } from '@testing-library/react';
import App from './App';

test('Verificando se existe o campo email', () => {
  render(<App />);
  //acessando elementos da tela
  const getInputByLabel = screen.getByLabelText('Email')
  const getInputByRole = screen.getByRole('ab') // funciona mas nao é recomendado
  const getInputByRole2 = screen.getByRole('textbox')
  // ---------------------------------------
  // const getInputByRole = screen.getByRole('input') 
  // console.log(getInputByRole)

  //interagindo com a aplicação

  //testes
  expect(getInputByLabel.type).toBe('email')
  expect(getInputByLabel).toBeInTheDocument();


});
