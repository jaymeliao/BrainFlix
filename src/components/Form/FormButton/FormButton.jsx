
import React from 'react';
import './FormButton.scss';

const FormButton = ({ type, className, icon, text, onClick, textColor,backgroundColor}) => {

  const buttonStyle = {
    color: textColor || 'white',
    backgroundColor: backgroundColor || '#0095FF',
  };
  return (
    <button type={type || "button"} className={`button ${className}`} style={buttonStyle}  onClick={onClick}>
      {icon && <span className="icon">{icon}</span>}
      <span className="text">{text}</span>
    </button>
  );
};

export default FormButton;