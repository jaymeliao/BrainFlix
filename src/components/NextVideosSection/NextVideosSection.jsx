import React from "react";
import "./NextVideosSection.scss";
import VideoCard from "../VideoCard/VideoCard";
const NextVideosSection = ({ videoList, onSelectVideo }) => {
  return (
    <div className="next-videos">
      <h2 className="session-title">Next Videos</h2>
      {videoList &&
        videoList.map((video) => (
          <VideoCard
            key={video.id}
            imageUrl={video.image}
            title={video.title}
            channel={video.channel}
            onClick={() => onSelectVideo(video)}
          />
        ))}
    </div>
  );
};

export default NextVideosSection;
