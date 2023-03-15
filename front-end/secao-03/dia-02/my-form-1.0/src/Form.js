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

        this.state = {
            option: '',
            caixinha: false,
            botao: '',
            texto: '',
            formularioComErros: false
        }
    }

    handleError() {

        const { option, caixinha, botao, texto } = this.state;

        const errors = [
            
        ]

    }

    handleChange({ target }) {
        const { name } = target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({ [name]: value })
    }

    render() {
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
                </div>
            </>
        )
    }
}

export default Form