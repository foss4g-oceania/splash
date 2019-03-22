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
          <div className="blurb grid-container">
            <div className="grid-item">
              <p>
                In 2019, Wellington hosts the second joint Free and Open Source Software for Geospatial (FOSS4G) and State of the Map (SotM) conference for Oceania.
              </p>
              <p>
                There will be workshops, presentations, a community day, and social events – all in the quirky chill surroundings of the Wellington CBD. So save the dates of 12–15 November 2019  and join us to learn about the latest tech, share stories, and meet like-minded people from across our fascinating region!
              </p>
              <p>
                © FOSS4G SotM Oceania 2019
              </p>
            </div>
            <div className="grid-item">
              <Signup/>
            </div>
            <div className="grid-item">
              <Social/>
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
