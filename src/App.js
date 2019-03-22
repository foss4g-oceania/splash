import React, { Component } from 'react';
import logo from './logo.svg';
import Signup from './Signup';
import Social from './Social';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <body class="App-body">
          <Signup/>
          <Social/>
          <div>© FOSS4G Oceania 2019</div>
        </body>
      </div>
    );
  }
}

export default App;
