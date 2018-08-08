import React, { Component } from 'react';
import fortissimo_logo from '../img/img-logo-white-fortissimo.png';
import '../styles/Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <nav>
          <ul>
            <li id="nav-menu"><a href="#Home"><img id="fortissimo-logo" src={fortissimo_logo} alt={"fortissimo"}/></a></li>
            <li><a href="#About">ABOUT</a></li>
            <li><a href="#Contact">CONTACT</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
