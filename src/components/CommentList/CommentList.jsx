import React, { useEffect, useState } from "react";
import "./CommentList.scss";
import Comment from "../Comment/Comment";
import axios from "axios";

const api_key = "7a08a145-babe-40d2-88dc-db2dd7fd7d14";
const API_URL = "https://project-2-api.herokuapp.com/";
const CommentList = ({ video }) => {
  const [commentList, setCommentList] = useState([]); 
  useEffect(()=>{
    const getCommentList = async() =>{
      const response = await axios.get(API_URL + `videos/${video.id}?api_key=${api_key}`);
      const currentVideo = response.data;
      setCommentList(currentVideo.comments)
    }
    getCommentList();
  },[])



  return (
    <div class ="commment-list" >
      {commentList.map((commentObj) => (
        <Comment
          key={commentObj.id}
          name={commentObj.name}
          comment={commentObj.comment}
          timestamp={commentObj.timestamp}
        />
      ))}
    </div>
  );
};

export default CommentList;
