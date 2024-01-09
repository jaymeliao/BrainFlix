/* eslint-disable jsx-a11y/alt-text */
import "./VideoCard.scss";
import { Link } from "react-router-dom";
import React from "react";

function VideoCard({ id, imageUrl, title, channel }) {
  return (
    <Link to={`/videos/${id}`} style={{ display: "block", textDecoration: "none" }}>
      <div className="video-card">
        <img className="video-card__thumbnail" src={imageUrl} />
        <div className="video-card__info">
          <h2>{title}</h2>
          <p>{channel}</p>
        </div>
      </div>
    </Link>
  );
}
export default VideoCard;
