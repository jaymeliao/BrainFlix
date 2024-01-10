import React from "react";
import "./NextVideosSection.scss";
import VideoCard from "../VideoCard/VideoCard";
const NextVideosSection = ({ videoList,currentVideo }) => {
  return (
    <div className="next-videos">
      <h2 className="session-title">Next Videos</h2>
      {videoList &&videoList.filter((video) => video.id !== currentVideo.id).map((video) => (
          <VideoCard
            key={video.id}
            id={video.id}
            imageUrl={video.image}
            title={video.title}
            channel={video.channel}
          />
        ))}
    </div>
  );
};

export default NextVideosSection;
