import React, { Component } from 'react';
import './Form.js';

class Option extends Component {
    render() {

        const { value, handleChange } = this.props;

        return (
            <label>
                selecione uma opção
                <select
                    name='option'
                    value={value}
                    onChange={handleChange}>
                    <option>opção 1</option>
                    <option>opção 2</option>
                    <option>opção 3</option>
                </select>
            </label>
        )
    }
}

export default Option;