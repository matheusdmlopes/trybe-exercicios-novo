import React, { Component } from "react";
import './Form.js'

class Texto extends Component {
    render() {

        const { value, handleChange } = this.props

        let error = undefined;
        if (value.length > 99) error = 'Erro, texto muito grande.'

        return (
            <label>
                <textarea
                    name="texto"
                    value={value}
                    placeholder="digite o texto pro botão"
                    onChange={handleChange} />
                <span>{error !== undefined ? error : ''}</span>
            </label>
        )
    }
}

export default Texto;