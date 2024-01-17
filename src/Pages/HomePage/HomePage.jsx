import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./HomePage.scss";

import CommentSection from "../../components/CommentSection/CommentSection";

import NextVideosSection from "../../components/NextVideosSection/NextVideosSection";
import VideoDetailSection from "../../components/VideoDetailSection/VideoDetailSection";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import axios from "axios";

const api_key = "7a08a145-babe-40d2-88dc-db2dd7fd7d14";
//const API_URL = "https://project-2-api.herokuapp.com/";
const API_URL = "http://localhost:5050/"

function HomePage() {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [allVideoList, setAllVideosList] = useState([]);
  const [currentVideoInfo, setCurrentVideoInfo] = useState(null);

  const params = useParams()
  useEffect(() => {
    async function getVideosList() {
      try {
        const response1 = await axios.get(API_URL + `videos?api_key=${api_key}`);
        const videos = response1.data;
      
        const id = params.videoId? params.videoId:videos[0].id;
        const response2 =  await axios.get(API_URL + `videos/${id}?api_key=${api_key}`);
        const videoInfo = response2.data
        setCurrentVideoInfo(videoInfo);
        setAllVideosList(videos);
        setCurrentVideo(videos.find((video)=>video.id===videoInfo.id));
        
      } catch (err) {
        console.log(`There was an error ${err.message}`);
      }
    }
    getVideosList();
  }, [params.videoId]);



  return (
    <>
      <VideoPlayer video={currentVideoInfo} />
      <div className="container">
        <div className="container__left">
          <VideoDetailSection video={currentVideoInfo} />
          <CommentSection video={currentVideoInfo} /> 
        </div>
        <div className="container__right">
          <NextVideosSection currentVideo={currentVideo} videoList={allVideoList}  />
        </div>
      </div>
    </>
  );
}

export default HomePage;
