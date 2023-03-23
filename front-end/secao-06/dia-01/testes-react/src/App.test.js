import { render, screen } from '@testing-library/react';
import App from './App';

test('Verificando se existe o campo email', () => {
  render(<App />);
// ACESSANDO ELEMENTOS DA TELA
  const getInputByLabel = screen.getByLabelText('Email')
  const getInputByRole2 = screen.getByRole('textbox')

  // ---------------------------------------
  // const getInputByRole = screen.getByRole('ab') // funciona mas nao é recomendado
  // const getInputByRole = screen.getByRole('input') 
  // console.log(getInputByRole)

 // INTERAGINDO COM A APLICAÇÃO

  // TESTES
  expect(getInputByRole2.type).toBe('email')
  expect(getInputByLabel).toBeInTheDocument();


});

test('Verificando se existe um botão', () => {
  render(<App />)
  // ACESSANDO ELEMENTOS DA TELA
  const getButton = screen.getByRole('button')

// INTERAGINDO COM A APLICAÇÃO


// TESTES
  expect(getButton).toBeInTheDocument()

})

// ACESSANDO ELEMENTOS DA TELA


// INTERAGINDO COM A APLICAÇÃO


// TESTES

