import React from 'react';
import { FormInput, FormLabel, FormRowContainer } from '../Utils/Styles/RegisterPageStyles';

const FormRow = ({ name, type, value,  handleChange }) => {
  return (
    <FormRowContainer>
      <FormLabel htmlFor={name}>
        {name}
      </FormLabel>
      <FormInput
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
      />
    </FormRowContainer>
  );
};

export default FormRow;