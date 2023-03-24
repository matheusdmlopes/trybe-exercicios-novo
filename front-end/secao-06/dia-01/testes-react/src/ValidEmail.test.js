import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';

test('Testando um componente caso o email seja válido', () => {
    const email_user = 'teste@testecom'
    render(<ValidEmail email='' />)
    // ACESSANDO ELEMENTOS DA TELA
    // const isValid = screen.getByText(/Email válido/i)
    const getValid = screen.queryByTestId('verify-mail')
    // INTERAGINDO COM A APLICAÇÃO


    // TESTES
    // expect(isValid).toBeInTheDocument();
    // expect(isInvalid).toBeInTheDocument();
    expect(getValid).not.toBeInTheDocument();
})