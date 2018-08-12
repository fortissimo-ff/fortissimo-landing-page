import React, { Component } from 'react';
import fortissimo_logo from '../img/img-logo-white-fortissimo.png';
import '../styles/Navbar.css';

class Navbar extends Component {
  /* The below code is commented out because it was a failed attempt to
   * implement Navbar style changes triggered by the 'scroll' event.
   * For some reason, the scroll event is not being fired upon scrolling.
   * Maybe it's because when we scroll, we're not scrolling our App but
   * rather the 'body' of our HTML file. I don't know how to target the body
   * with the event listener, so I will try implementing Navbar changes with
   * pure Javascript instead. Feel free to try implementing it with React.
   * -- Moo Jin
   */

  /*
  constructor(props) {
    super(props);
    this.state = {activeClass: 'transparent'};
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll); 
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    console.log("Scroll event fired!");
  }
  */

  render() {
    return (
      <div className="Navbar">
        <nav>
          <div className="nav-wrapper">
            <ul>
              <li id="nav-menu"><a href="#Home"><img id="fortissimo-logo" src={fortissimo_logo} alt={"fortissimo"}/></a></li>
              <li id="nav-about"><a href="#About" id="nav-about-label">ABOUT</a></li>
              <li id="nav-contact"><a href="#Contact" id="nav-contact-label">CONTACT</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
