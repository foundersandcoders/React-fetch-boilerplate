import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

var standardHeaders = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }

class ApiData extends Component {
  componentDidMount () {
    fetch ('/api',standardHeaders)
      .then ( (res) => console.log (res.json()) )
      .catch ((err) => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default ApiData
