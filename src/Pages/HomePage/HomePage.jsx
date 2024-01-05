import React, {useEffect, useState} from "react";
import "./HomePage.scss";

import allVideosDetail from "../../data/video-details.json";
import allVideos from "../../data/video-details.json";


import CommentSection from "../../components/CommentSection/CommentSection"
import Header from "../../components/Header/Header";
import NextVideosSection from "../../components/NextVideosSection/NextVideosSection";
import VideoDetail from "../../components/VideoDetailSection/VideoDetailSection";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

function HomePage() {
  
  const [currentVideoDetail, setCurrentVideoDetail] = useState(allVideosDetail[0])
  const [otherVideoList, setOtherVideoList] = useState(allVideos.filter((video)=>video.id!==currentVideoDetail.id))

  

  return (
    <>
      <Header />
      <VideoPlayer video={currentVideoDetail} />
      <div className="container">
        <div className="container__left">
          <VideoDetail video={currentVideoDetail} />
          <CommentSection commentList={currentVideoDetail.comments} />
        </div>
        <div className="container__right">
          <NextVideosSection videoList={otherVideoList} />
        </div>
      </div>
    </>
  );
}

export default HomePage;
