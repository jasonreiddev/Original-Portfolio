import React from 'react';

const formField = ({name, displayName, type, value, updateValue}) => {
  return (
    <label htmlFor={name}>
      {displayName}
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={updateValue}
      />
    </label>
  );
};
export default formField;
