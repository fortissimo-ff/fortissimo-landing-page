import React, { Component } from 'react';
import '../../styles/Home.css';

// Components
import OpeningHeader from './OpeningHeader';
import FollowingHeader from './FollowingHeader';
import LearnMoreButton from './LearnMoreButton';
import SocialMediaIcons from './SocialMediaIcons';

class Home extends Component {
  render() {
    return (
      <div className="Home" id="Home">
        <OpeningHeader />
        <FollowingHeader />
        <LearnMoreButton />
        <SocialMediaIcons />
      </div>
    );
  }
}

export default Home;
