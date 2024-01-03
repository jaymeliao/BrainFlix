/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import './Avatar.scss'

const Avatar = ({ className, imageUrl}) => {
  return (
    <img
      src={imageUrl}
      className={`${className} profile`}
    />
  );
};

export default Avatar;
