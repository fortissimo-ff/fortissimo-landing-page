import React, { Component } from 'react';
import Facebook_logo from '../../img/img-icon-Facebook.svg';
import Instagram_logo from '../../img/img-icon-Instagram.svg';
import Twitter_logo from '../../img/img-icon-Twitter.svg';

class SocialMediaIcons extends Component {
  render() {
    return (
      <div className="SocialMediaIcons">
        <a href="https://www.facebook.com/breakfasy/" target="_blank" rel="noopener noreferrer"><img src={Facebook_logo} alt={"Facebook_logo"}/></a>
        <a href="https://www.instagram.com/breakfasy_/" target="_blank" rel="noopener noreferrer"><img src={Instagram_logo} alt={"Instagram_logo"}/></a>
        <a href="https://twitter.com/breakfasy_" target="_blank" rel="noopener noreferrer"><img src={Twitter_logo} alt={"Twitter_logo"}/></a>
      </div>
    );
  }
}

export default SocialMediaIcons;
