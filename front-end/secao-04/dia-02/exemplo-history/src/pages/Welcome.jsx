import React from 'react';
import { Redirect } from 'react-router-dom';

class Welcome extends React.Component {
    render() {
        const { history } = this.props
        return (
            <>
                <h1>Boas vindas</h1>
                <button
                    type='button'
                    onClick={() => history.push('/')}
                >
                    Voltar
                </button>
            </>
        );
    }
}

export default Welcome;
