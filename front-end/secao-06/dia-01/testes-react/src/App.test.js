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

test('Verificando se existe dois botões', () => {
  render(<App />)
  // ACESSANDO ELEMENTOS DA TELA
  const getButton = screen.getAllByRole('button')

// INTERAGINDO COM A APLICAÇÃO


// TESTES
  expect(getButton).toHaveLength(2)

})

test('Verificando se existe um botão de enviar E um botão de voltar', () =>{
  render(<App />)
  // ACESSANDO ELEMENTOS DA TELA
  const btnEnviar = screen.getByTestId('botao-enviar')
  const btnVoltar = screen.getByTestId('botao-voltar')

  // INTERAGINDO COM A APLICAÇÃO


  // TESTES
  expect(btnEnviar).toBeInTheDocument()
  expect(btnVoltar).toBeInTheDocument()

  expect(btnEnviar.type).toBe('button')
  expect(btnVoltar.type).toBe('button')

  expect(btnEnviar).toHaveValue('Enviar')
  expect(btnVoltar).toHaveValue('Voltar')

})

// ACESSANDO ELEMENTOS DA TELA


// INTERAGINDO COM A APLICAÇÃO


// TESTES


