import React, { Component } from 'react';
import '../../styles/OurStory.css';
import Blurbs from "./Blurbs.js";

class OurStory extends Component {
  render() {
    return (
      <div className="OurStory" id="OurStory">
        <Blurbs />
      </div>
    );
  }
}

export default OurStory;
