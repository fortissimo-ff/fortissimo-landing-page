import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';

// Components
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <Home />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;
