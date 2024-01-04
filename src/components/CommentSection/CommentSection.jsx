/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./CommentSection.scss";
import userImage from "../../assets/images/Mohan-muruge.jpg";
import FormInput from "../Form/FormInput/FormInput";
import FormButton from "../Form/FormButton/FormButton";
import commentIcon from "../../assets/icons/add_comment.svg"
import Avatar from "../Avatar/Avatar";

const CommentSection = ({ commentList }) => {
  return (
    <div className="comment-section">
      <h2>{commentList.length} Comments</h2>
      <div className="comment-form">
        <div className="user-profile">
          <Avatar imageUrl={userImage}/>
        </div>
        <div className="user-conversation">
          <div className="user-conversation__input-section">
            <label>JOIN THE CONVERATION</label>
            <FormInput className="input" type="text" placeholder="Add a new comment" />
          </div>
          <FormButton icon={<img src={commentIcon} />}text="commnet" onClick={()=>{console.log("comment!!")}}/> 
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
