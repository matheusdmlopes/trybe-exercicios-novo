import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    constructor() {
        super()

        this.handleChange = this.handleChange.bind(this)

        this.state = {
            option: '',
            caixinha: false,
            botao: '',
            texto: ''
        }
    }

    handleChange({ target }) {
        const { name } = target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div>
                <h1>titulo</h1>
                <form className='form'>
                    <fieldset>
                        <label>
                            selecione uma opção
                            <select
                                name='option'
                                value={this.state.option}
                                onChange={this.handleChange}>
                                <option>opção 1</option>
                                <option>opção 2</option>
                                <option>opção 3</option>
                            </select>
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="caixinha"
                                value={this.state.caixinha}
                                onChange={this.handleChange}
                            /> bom dia
                        </label>
                        <br></br>
                        <label>
                            <textarea
                                name="texto"
                                value={this.state.texto}
                                placeholder="digite o texto pro botão"
                                onChange={this.handleChange} />
                        </label>
                        <label>
                            <input
                                type="button"
                                name="botao"
                                value={this.state.texto}
                                onClick={this.handleChange} />
                        </label>
                        <label>
                            <input type="file" />
                        </label>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default Form