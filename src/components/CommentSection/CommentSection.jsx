/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./CommentSection.scss";

import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";

const CommentSection = ({ video }) => {
  return (
    <div className="comment-section">
      <h2>{video?video.comments.length:0} Comments</h2>
      <CommentForm />
      <CommentList commentList={video?video.comments:[]} />
    </div>
  );
};

export default CommentSection;
