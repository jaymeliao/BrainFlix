import React, { useState } from "react";
import "./VideoDetailSection.scss";
import likesIcon from "../../assets/icons/likes.svg";
import viewsIcon from "../../assets/icons/views.svg";

const VideoDetailSection = ({ video }) => {
  const [isLiked, setIsLiked] = useState(false);
  const likesString = video.likes;
  const likesWithoutComma = likesString.replace(/,/g, ''); // Remove commas
  const likesNumber = parseInt(likesWithoutComma);
  const [likesCount, setLikesCount] = useState(likesNumber)



  const formattTime = (timestamp) => {
    return new Date(timestamp).toLocaleDateString();
  };
  const handleLikeClick = () => {

    setIsLiked(!isLiked);
    if (isLiked){
      setLikesCount(likesCount-1)
    }else {
      setLikesCount(likesCount+1)
    }
  };
  return (
    <section className="video-details-section">
      <h1>{video.title}</h1>
      <div className="info-container">
        <div className="info-container__left">
          <h2>By {video.channel}</h2>
          <p>{formattTime(video.timestamp)}</p>
        </div>
        <div className="info-container__right">
          <p>
            <img src={viewsIcon} alt="Views Icon" /> {video.views}
          </p>
          <p
            style={{
              color: isLiked ? "Black" : "#AFAFAF",
            }}
            onClick={handleLikeClick}
            className="likeButton"
          >
            <img
              style={{
                filter: isLiked ? "brightness(0.1)" : "brightness(1)",
              }}
              src={likesIcon}
              alt="Likes Icon"
            />{" "}
            {likesCount.toLocaleString()}
          </p>
        </div>
      </div>
      <div className="description-container">
        <p className="description">{video.description}</p>
      </div>
    </section>
  );
};

export default VideoDetailSection;
