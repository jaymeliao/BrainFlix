import React from "react";
import "./FormInput.scss";

const FormInput = (props) => {
  
  const otherStyle = props.iconImage ? {
    backgroundImage: `url(${props.iconImage})`,
    paddingLeft: '3rem',
    backgroundSize: '24px',
    backgroundPosition: '15px center',
    backgroundRepeat: 'no-repeat',
  } : {
    paddingLeft: '1rem',
  };

  const Tag = props.isTextarea ? 'textarea' : 'input';
  return <Tag style={otherStyle} className={`form-input ${props.className}`} type={props.type} placeholder={props.placeholder} {...props} rows={props.row} />;
};

export default FormInput;
