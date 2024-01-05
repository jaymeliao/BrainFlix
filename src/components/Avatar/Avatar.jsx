/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import './Avatar.scss'
import blankProfileImage from "../../assets/images/blank-profile.png"
const Avatar = ({ className, imageUrl}) => {

  return (
    <img
    src={imageUrl || blankProfileImage}
      className={`${className} profile`}
    />
  );
};

export default Avatar;
