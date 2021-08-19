import React from 'react';

export default function FormField({name, displayName, type, value, updateValue}) {
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
