import React, { Component } from "react";
import './Form.js'

class Texto extends Component {
    render() {

        const { value, handleChange } = this.props

        return (
            <label>
                <textarea
                    name="texto"
                    value={value}
                    placeholder="digite o texto pro botão"
                    onChange={handleChange} />
            </label>
        )
    }
}

export default Texto;