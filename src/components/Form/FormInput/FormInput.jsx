import React from "react";
import "./FormInput.scss";

const FormInput = ({ iconImage, className, placeholder, type }) => {
  
  const otherStyle = iconImage ? {
    backgroundImage: `url(${iconImage})`,
    paddingLeft: '3rem',
    backgroundSize: '24px',
    backgroundPosition: '15px center',
    backgroundRepeat: 'no-repeat',
  } : {
    paddingLeft: '1rem',
  };

  return <input style={otherStyle} className={className} type={type} placeholder={placeholder} />;
};

export default FormInput;
