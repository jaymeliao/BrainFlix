/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./CommentForm.scss";
import userImage from "../../assets/images/Mohan-muruge.jpg";
import FormInput from "../Form/FormInput/FormInput";
import FormButton from "../Form/FormButton/FormButton";
import commentIcon from "../../assets/icons/add_comment.svg";
import Avatar from "../Avatar/Avatar";

const CommentForm = ({ commentList }) => {
  return (
    <div className="comment-form">
      <div className="user-profile">
        <Avatar imageUrl={userImage} />
      </div>
      <div className="user-conversation">
        <div className="user-conversation__input-section">
          <label>JOIN THE CONVERSATION</label>
          <FormInput
            istextarea="true"
            className="comment_input form-input"
            type="text"
            placeholder="Add a new comment"
            rows={2}
          />
        </div>
        <div className="user-conversation__button-section">
          <FormButton
            className="button"
            icon={<img src={commentIcon} />}
            text="commnet"
            onClick={() => {
              console.log("comment!!");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CommentForm;
