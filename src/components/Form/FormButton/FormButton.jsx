
import React from 'react';
import './FormButton.scss';

const FormButton = ({ icon, text, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {icon && <span className="icon">{icon}</span>}
      <span className="text">{text}</span>
    </button>
  );
};

export default FormButton;