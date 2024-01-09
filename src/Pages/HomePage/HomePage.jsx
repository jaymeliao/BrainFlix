import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./HomePage.scss";

import CommentSection from "../../components/CommentSection/CommentSection";

import NextVideosSection from "../../components/NextVideosSection/NextVideosSection";
import VideoDetail from "../../components/VideoDetailSection/VideoDetailSection";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import axios from "axios";
const api_key = "7a08a145-babe-40d2-88dc-db2dd7fd7d14";
const API_URL = "https://project-2-api.herokuapp.com/";

function HomePage() {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [allVideoList, setAllVideosList] = useState([]);
  const [otherVideoList, setOtherVideosList] = useState([]);
  let navigate = useNavigate();
  let params = useParams();

  useEffect(() => {
    async function getVideosList() {
      try {
        const response = await axios.get(API_URL + `videos?api_key=${api_key}`);
        const videos = response.data;
        console.log(videos)
        setAllVideosList(videos);
        setCurrentVideo(videos[0]);
        setOtherVideosList(
          allVideoList.filter((video) => video.id !== currentVideo.id)
        );
    
      } catch (err) {
        console.log(`There was an error ${err.message}`);
      }
    }
    getVideosList();
  }, []);



  // useEffect(() => {
  //   const videoId = params.videoId
  //   if (videoId) {
  //     const handelVideoIdChange = async (videoID) => {
  //       try {
  //         const response = await axios.get(API_URL+`/videos/${videoId}?api_key=${api_key}`)
  //         setCurrentVideo(response.data.data)

  //       } catch (err) {
  //         console.log(`There was an error ${err.message}`)
  //       }
  //     }
  //     handelVideoIdChange(videoId)
  //   }
  // }, [params.videoId])

  return (
    <>
    <CommentSection video={currentVideo} />
      {/* <VideoPlayer video={currentVideo} />
      <div className="container">
        <div className="container__left">
          <VideoDetail video={currentVideo} />
          <CommentSection video={currentVideo} />
        </div>
        <div className="container__right">
          <NextVideosSection videoList={otherVideoList}  />
        </div>
      </div> */}
    </>
  );
}

export default HomePage;
