import React from "react";
import "./HomePage.scss";

import allVideosDetail from "../../../data/video-details.json";
import allVideoNext from "../../../data/video-details.json";
import CommentSection from "../../CommentSection/CommentSection";
import Header from "../..//Header/Header";
import NextVideosSection from "../../NextVideosSection/NextVideosSection";
import VideoDetail from "../../VideoDetailSection/VideoDetailSection";
import VideoPlayer from "../../VideoPlayer/VideoPlayer";

function HomePage() {
  const currentVideo = allVideoNext[0];
  const currentVideoDetail = allVideosDetail[0];

  return (
    <>
      <Header />
      <VideoPlayer video={currentVideo} />
      <div className="container">
        <div className="container__left">
          <VideoDetail video={currentVideoDetail} />
          <CommentSection commentList={currentVideoDetail.comments} />
        </div>
        <div className="container__right">
          <NextVideosSection videoList={allVideoNext} />
        </div>
      </div>
    </>
  );
}

export default HomePage;
