import React, { Component } from 'react';
import './Form.js';

class Caixinha extends Component {
    render() {

        const { value, handleChange } = this.props

        return (
            <label>
                <input
                    type="checkbox"
                    name="caixinha"
                    value={value}
                    onChange={handleChange}
                /> bom dia
            </label>
        )
    }
}

export default Caixinha;