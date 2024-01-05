import React from "react";
import "../Comment/Comment.scss";
import userImage from "../../assets/images/Mohan-muruge.jpg";
import Avatar from "../Avatar/Avatar";
const Comment = ({ userImage, name, comment, timestamp }) => {
  return (
    <div className="other-comment">
      <div className="user-profile">
        <Avatar/>
      </div>
      <div className="user-conversation">
        <div className="user-conversation__header">
          <h2>{name}</h2>
          <p>{new Date(timestamp).toLocaleDateString()}</p>
        </div>
        <p className="user-conversation__body">
            {comment}
        </p>
      </div>
    </div>
  );
};

export default Comment;
