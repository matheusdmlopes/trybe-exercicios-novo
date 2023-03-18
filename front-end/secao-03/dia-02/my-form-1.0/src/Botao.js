import React, { Component } from 'react';
import './Form.js';

class Botao extends Component {
    render() {

        const { value, handleChange } = this.props

        return (
            <label>
                <input
                    type="button"
                    name="botao"
                    value={value}
                    onClick={handleChange} />
            </label>
        )

    }
}

export default Botao;