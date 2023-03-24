import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { act } from 'react-dom/test-utils';

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

test('Testando se o botão e o campo email estão funcionando', () => {
  render(<App />)
  const emailUser = 'teste@teste.com'

  // ACESSANDO ELEMENTOS DA TELA
  const getEmail = screen.getByLabelText('Email')
  const getBtn = screen.getByTestId('botao-enviar')
  const getTextEmail = screen.getByTestId('id-email-user')

// INTERAGINDO COM A APLICAÇÃO
  act(() => {
  userEvent.type(getEmail, emailUser)
  userEvent.click(getBtn)
})
 

// TESTES
  expect(getEmail).toBeInTheDocument();
  expect(getBtn).toBeInTheDocument();
  expect(getTextEmail).toBeInTheDocument();

  expect(getTextEmail).toHaveTextContent(`Valor: ${emailUser}`)
  expect(getEmail).toHaveValue('');
  
})

// ACESSANDO ELEMENTOS DA TELA


// INTERAGINDO COM A APLICAÇÃO


// TESTES


