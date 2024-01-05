/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./CommentSection.scss";

import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";

const CommentSection = ({ commentList }) => {
  return (
    <div className="comment-section">
      <h2>{commentList.length} Comments</h2>
      <CommentForm />
      <CommentList commentList={commentList} />
    </div>
  );
};

export default CommentSection;
