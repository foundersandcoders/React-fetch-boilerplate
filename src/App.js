import React, { Component } from 'react';
import RandomComponent from './components/RandomComponent';
import ApiData from './components/ApiData';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="Check-components-load">
          <RandomComponent />
        </div>
        <div className="Check-api-connection">
          <ApiData />
        </div>
      </div>
    );
  }
}

export default App;
