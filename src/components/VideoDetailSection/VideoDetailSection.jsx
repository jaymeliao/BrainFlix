import React, { useState } from "react";
import "./VideoDetailSection.scss";
import likesIcon from "../../assets/icons/likes.svg";
import viewsIcon from "../../assets/icons/views.svg";

const VideoDetailSection = ({ video }) => {
  const formattTime = (timestamp) => {
    return new Date(timestamp).toLocaleDateString();
  };

  return (
    <section className="video-details-section">
      <h1>{video?.title}</h1>
      <div className="info-container">
        <div className="info-container__left">
          <h2>By {video?.channel}</h2>
          <p>{formattTime(video?.timestamp)}</p>
        </div>
        <div className="info-container__right">
          <p>
            <img src={viewsIcon} alt="Views Icon" /> {video?.views}
          </p>
          <p className="likeButton">
            <img src={likesIcon} alt="Likes Icon" /> {video?.likes}
          </p>
        </div>
      </div>
      <div className="description-container">
        <p className="description">{video?.description}</p>
      </div>
    </section>
  );
};

export default VideoDetailSection;
