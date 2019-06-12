import React, { Component } from 'react';
import logo from './logo.svg';
import Signup from './Signup';
import Social from './Social';
import scroll from './mouse_scroll.svg';
import './App.css';

const website2019 = "https://2019.foss4g-oceania.org";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a href={website2019} target="_self">
            <img src={logo} className="App-logo" alt="logo" />
          </a>
          <p>Click the logo to go to the 2019 conference website</p>
          <img style={{position: 'absolute', bottom: 10, width: 35, opacity: 0.1}} src={scroll} alt="scroll down" onClick={() => window.scrollTo(0, document.body.scrollHeight)} />
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
                © <a className="App-link" href={website2019}>FOSS4G SotM Oceania 2019</a>
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
