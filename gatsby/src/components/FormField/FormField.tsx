import React from 'react';

interface FormFieldProps {
  name?: string,
  displayName?: string,
  type?: string,
  value?: string,
  updateValue?: React.ChangeEventHandler<HTMLInputElement>,
}

export const FormField = ({name, displayName, type, value, updateValue}: FormFieldProps) => {
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
