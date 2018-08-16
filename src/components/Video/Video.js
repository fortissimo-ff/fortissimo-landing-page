import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import '../../styles/Video.css';
import fortissimo_video from '../../videos/v2.3-fortissimo-video.mp4';


class Video extends Component {
  render() {
    return (
      <div className="Video" id = "Video">
        <ReactPlayer
        controls
        width= "100%"
        height= "100%"
        url = {fortissimo_video} />
      </div>
    );
  }
}

export default Video;
