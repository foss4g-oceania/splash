import React, { Component } from 'react';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({email: event.target.value});
  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.email);
    event.preventDefault();
  }
  render() {
    return (
      <div id="mc_embed_signup">
        <form action="https://foss4g-oceania.us17.list-manage.com/subscribe/post?u=26f3c80da46835144592b59b6&amp;id=3d38178ba0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
          <div id="mc_embed_signup_scroll">
            <label for="mce-EMAIL">Subscribe for updates</label>
            <span style={{paddingRight: 10}}>Email</span>
            <input style={{borderRadius: '15px', fontWeight: 'bold'}} type="email" defaultValue="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="" required/>
            <div style={{position: 'absolute', left: '-5000px', ariaHidden: "true"}}>
              <input type="text" name="b_26f3c80da46835144592b59b6_3d38178ba0" tabindex="-1" value={this.state.email} onChange={this.handleChange}/>
            </div>
            <div className="clear btn btn-submit">
              <input style={{borderRadius: '15px'}} type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"/>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
