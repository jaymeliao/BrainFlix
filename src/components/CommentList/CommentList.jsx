import React from "react";
import "./CommentList.scss";
import Comment from "../Comment/Comment";

const CommentList = ({ commentList }) => {
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
