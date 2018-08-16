import React, { Component } from 'react';
import '../../styles/About.css';
import Blurbs from "./Blurbs.js";


class About extends Component {
  render() {
    return (
      <div className="About" id="About">
        <Blurbs />
      </div>
    );
  }
}

export default About;
