import React from 'react';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Welcome" component={Welcome} />
        </Switch>
      </BrowserRouter>

    )
  }
}

export default App;
