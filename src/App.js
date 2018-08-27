import React, { Component } from 'react';
//import logo from './logo.svg';
import './styles/App.css';

// Components
import Home from './components/Home/Home';
import About from './components/About/About';
import Navbar from './components/Navbar';
import Video from "./components/Video/Video.js";
import WhatWeDo from './components/WhatWeDo/WhatWeDo.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Video />
        <WhatWeDo />
      </div>
    );
  }
}

export default App;
