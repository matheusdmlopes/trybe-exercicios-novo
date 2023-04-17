import React from 'react';
import { connect } from 'react-redux';
import { actionCreator } from './redux/actions';

class App extends React.Component {
  state = {
    number: 0,
  }

  eventHandler = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }
  render() {
    const { countState, dispatch } = this.props;
    const { number } = this.state;
    return (
      <div>
        <h1>Contador</h1>
        <h2>{countState}</h2>
        <button onClick={() => dispatch(actionCreator())}>Incrementa 1</button>
        <button onClick={() => dispatch(actionCreator(5))}>Incrementa 5</button>
        <input type='number' name='number' onChange={this.eventHandler}></input>
        <button onClick={() => dispatch(actionCreator(Number(number)))}>Incrementa número específico</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  countState: state.counterReducer.count,
});

export default connect(mapStateToProps)(App);
