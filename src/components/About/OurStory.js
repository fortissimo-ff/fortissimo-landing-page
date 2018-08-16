import React, { Component } from 'react';
import '../../styles/About.css';
import OpeningHeader from '../Home/OpeningHeader.js';
import Blurbs from "./Blurbs.js"



class OurStory extends Component {
  render() {
    return (
      <div className = "OurStory">
        <Blurbs />

      </div>

    );
  }
}

export default OurStory;
