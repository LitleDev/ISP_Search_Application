import React , { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import Menu from './components/maincomponent';
import { Network } from './shared/providers';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      network:Network
    };
  }

  render() {
    return (
      <div className="App">
        <Menu network={this.state.network}/>
      </div>
    );
  }
}

export default App;

