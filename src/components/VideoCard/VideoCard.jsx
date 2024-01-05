/* eslint-disable jsx-a11y/alt-text */
import "./VideoCard.scss";
import React from "react";

function VideoCard({ imageUrl, title, channel, onClick }) {
  return (
    <div className="video-card" onClick={onClick} >
      <img className="video-card__thumbnail" src={imageUrl} />
      <div className="video-card__info">
        <h2>{title}</h2>
        <p>{channel}</p>
      </div>
    </div>
  );
}
export default VideoCard;
