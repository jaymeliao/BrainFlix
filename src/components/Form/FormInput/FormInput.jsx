
import React from 'react';
import './FormInput.scss';

const FormInput = ({className, placeholder, type}) => {
  return (
    <input className={className} type={type} placeholder={placeholder} />
  );
};

export default FormInput;