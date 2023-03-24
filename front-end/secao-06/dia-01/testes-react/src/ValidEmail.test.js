import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';

test('Testando um componente caso o email seja válido', () => {
    const email_user = 'teste@teste.com'
    render(<ValidEmail email={email_user} />)
    // ACESSANDO ELEMENTOS DA TELA
    const isValid = screen.getByText(/Email válido/i)
    // const isInvalid = screen.getByText(/Email inválido/i)
    // INTERAGINDO COM A APLICAÇÃO


    // TESTES
    expect(isValid).toBeInTheDocument();
    // expect(isInvalid).not.toBeInTheDocument()
})

test('testando um componente caso o email seja inválido', () => {
    const email_user = 'teste123teste.com'
    render(<ValidEmail email={email_user} />)
    const isInvalid = screen.getByText(/Email inválido/i)


    expect(isInvalid).toBeInTheDocument();
})

test('testando se a mensagem não é exibida enquanto não tivermos digitado um email', () => {
    render(<ValidEmail email='' />)
    const validOrInvalid = screen.queryByTestId('verify-mail')

    expect(validOrInvalid).not.toBeInTheDocument();
})

test('testando se o texto é verde quando é válido', () => {
    const email_user = 'teste@teste.com';
    render(<ValidEmail email={email_user} />)

    const isValid = screen.getByTestId('verify-mail')

    expect(isValid).toHaveAttribute('class', 'green-text')
})

test('testando se o texto é vermelho quando é inválido', () => {
    const email_user = 'testerrado.com';
    render(<ValidEmail email={email_user} />)

    const isInvalid = screen.getByTestId('verify-mail')

    expect(isInvalid).toHaveAttribute('class', 'red-text')
})