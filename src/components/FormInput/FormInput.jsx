
import React from 'react';
import './FormInput.scss';

const FormInput = ({placeholder, type}) => {
  return (
    <input type={type} placeholder={placeholder} />
  );
};

export default FormInput;