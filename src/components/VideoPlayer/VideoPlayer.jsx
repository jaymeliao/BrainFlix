import React from "react";
import "./VideoPlayer.scss"
function VideoPlayer({ video }) {
  return (
    
    <div className="video_container">
      <video className="video" poster={video?.image} controls />
    </div>
  );
}

export default VideoPlayer;
