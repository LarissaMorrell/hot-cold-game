import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './components/game'

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>HOT or COLD?</h1>
        <Game />
      </div>
    );
  }
}

export default App;
