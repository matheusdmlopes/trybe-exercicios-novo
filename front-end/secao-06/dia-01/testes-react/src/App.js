import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
  return (
    <div className="App">
      <label >
        Email
        <input type="email" />
      </label>
      <input type="button" value="Enviar" data-testid="botao-enviar" />
      <input type="button" value="Voltar" data-testid="botao-voltar" />
    </div>
  );
}
}

export default App;
