import React, { Component } from 'react';
import twitter from './social_twitter.png';

class Social extends Component {
  render() {
    return (
      <div className="social">
        <a class="twitter-timeline" href="https://twitter.com/FOSS4G_Oceania">
            <img src={twitter} alt="social-twitter" />
        </a>
      </div>
    );
  }
}

export default Social;
