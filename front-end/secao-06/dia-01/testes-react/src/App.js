import React, { Component } from 'react';
import './App.css';


class App extends Component {
  state = {
    email: '',
    saveEmail: ''
  }

  handleChange = ({target}) => {
    const {value, name} = target;

    this.setState({
      [name]: value,
    })
  }

  handleSaveEmail = () => {
    const {email} = this.state;
    this.setState({
      saveEmail: email,
      email: ''
    })
  }

  render() {
    const {email, saveEmail} = this.state
  return (
    <div className="App">
      <label >
        Email
        <input type="email" name='email' value={email} onChange={this.handleChange}/>
      </label>
      <input type="button" value="Enviar" data-testid="botao-enviar" onClick={this.handleSaveEmail} />
      <input type="button" value="Voltar" data-testid="botao-voltar" />
      <h2 data-testid="id-email-user">Valor: {saveEmail} </h2>
    </div>
  );
}
}

export default App;
