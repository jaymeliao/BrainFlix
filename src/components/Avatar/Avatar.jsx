/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import './Avatar.scss'

const Avatar = ({ imageUrl}) => {
  return (
    <img
      src={imageUrl}
      className="profile_photo"
    />
  );
};

export default Avatar;
