import React from 'react';

import {InputStyles, LabelStyles} from './FormField.styles';

interface FormFieldProps {
  name?: string,
  displayName?: string,
  type?: string,
  value?: string,
  updateValue?: React.ChangeEventHandler<HTMLInputElement>,
}

export const FormField = ({name, displayName, type, value, updateValue}: FormFieldProps) => {
  return (
    <LabelStyles htmlFor={name}>
      {displayName}&nbsp;
      <InputStyles
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={updateValue}
      />
    </LabelStyles>
  );
};
