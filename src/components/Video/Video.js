import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import '../../styles/Video.css';



class Video extends Component {
  render() {
    return (
      <div className="Video" id = "Video">
        <ReactPlayer
        controls
        width= "100%"
        height= "100%"
        url = "https://www.youtube.com/watch?v=79XsGVCmNCo" />
      </div>
    );
  }
}

export default Video;
