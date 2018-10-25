import React, { Component } from "react";
import "../../styles/Contact.css";

// Components
import Header from "./Header.js";
import Chat from "./Chat.js";
import Help from "./Help.js";
import SocialMediaIcons from "./SocialMediaIcons.js";
import Follow from "./Follow.js";
import Copyright from "./Copyright.js";
import Legal from "./Legal.js";

class Contact extends Component {
  render() {
    return (
      <div className="Contact" id="Contact">
        <Header />
        <Chat />
        <Help />
        <SocialMediaIcons />
        <Follow />
        <Copyright />
        <Legal />
      </div>
    );
  }
}

export default Contact;
