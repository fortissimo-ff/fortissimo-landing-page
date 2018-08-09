import React, { Component } from 'react';
import learn_more_button from '../../img/img-button-Learn-More.png';

class LearnMoreButton extends Component {
  render() {
    return (
      <div className="LearnMoreButton">
        <a href="#About"><img id="learn-more-button" src={learn_more_button} alt={"learn_more_button"}/></a>
      </div>
    );
  }
}

export default LearnMoreButton;
