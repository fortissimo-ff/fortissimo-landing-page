import React, { Component } from 'react';
import '../../styles/About.css';
import OurStory from "./OurStory.js";

class About extends Component {
  render() {
    return (
      <div className="About" id="About">
        <OurStory />
      </div>
    );
  }
}

export default About;
