import React, { Component } from 'react';
import './Form.css';
import Caixinha from './Caixinha';
import Texto from './Texto';
import Botao from './Botao';
import Option from './Option';

class Form extends Component {
    constructor() {
        super()

        this.handleChange = this.handleChange.bind(this)
        this.handleError = this.handleError.bind(this)

        this.state = {
            option: '',
            caixinha: false,
            botao: '',
            texto: '',
            formularioComErros: true
        }
    }

    handleError() {

        const { option, caixinha, botao, texto } = this.state;

        const errors = [
            !option.length,
            !caixinha,
            !botao.length,
            !texto.length
        ]

        const formularioPreenchido = errors.every((element) => element !== true)

        this.setState({
            formularioComErros: !formularioPreenchido,
        })

    }

    handleChange({ target }) {
        const { name } = target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({ [name]: value },
            this.handleError)
    }

    render() {

        const { formularioComErros } = this.state

        return (
            <>
                <div>
                    <h1>titulo</h1>
                    <form className='form'>
                        <fieldset>
                            <Option value={this.state.option} handleChange={this.handleChange} />
                            <Caixinha value={this.state.caixinha} handleChange={this.handleChange} />
                            <br></br>
                            <Texto value={this.state.texto} handleChange={this.handleChange} />
                            <Botao value={this.state.texto} handleChange={this.handleChange} />
                            <label>
                                <input type="file" />
                            </label>
                        </fieldset>
                    </form>
                    { formularioComErros
          ? <span style={ { color: 'red' } }>Preencha todos os campos</span>
          : <span style={ { color: 'green' } }>Todos campos foram preenchidos</span> }
                </div>
            </>
        )
    }
}

export default Form