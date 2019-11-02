import React from 'react';
import './input.styles.scss';

const Input = ({ name, handleChange, value }) => {
  return (
    <input
      type="text"
      value={value}
      name={name}
      onChange={e => handleChange(e)}
    />
  );
};

export default Input;
