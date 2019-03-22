import React, { Component } from 'react';
import twitter from './social_twitter.png';
import email from './social_email.png';

class Social extends Component {
  render() {
    return (
      <div className="social">
        <label for="mce-EMAIL">Contact us</label>
        <br/>
        <a class="twitter" href="https://twitter.com/FOSS4G_Oceania">
          <img src={twitter} alt="social-twitter" />
        </a>
        <a class="email" href="mailto:admin@foss4g-oceania.org">
          <img src={email} alt="social-email"/>
        </a>
      </div>
    );
  }
}

export default Social;
