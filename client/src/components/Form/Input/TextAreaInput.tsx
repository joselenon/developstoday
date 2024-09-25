import React, { useState } from 'react';
import styled from 'styled-components';

import { InputTypes } from './InputTypes';
import { ICreateInput, InputOptionsMap } from './interfaces';

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  input,
  textarea {
    ${() => InputTypes['DEFAULT']}
    overflow-y: scroll;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
`;

const ErrorContainer = styled.div`
  height: 19px;
`;

const ErrorMessage = styled.span`
  font-size: 12px;
  color: red;
`;

export default function TextAreaInput(props: ICreateInput<'textarea'>) {
  const { type, id, label, options, rhfConfig, validationFn } = props;

  const {
    register,
    formState: { errors },
    getValues,
  } = rhfConfig;

  const [validationValue, setValidationValue] = useState({
    valid: false,
    errorMsg: '',
  });

  const validation = (value: any) => {
    const validate = validationFn(value, getValues);
    setValidationValue(validate);
    return validate;
  };

  const { ...registerProps } = register(id, {
    valueAsNumber: false,
    validate: (value: any) => {
      const { valid } = validation(value);
      return valid;
    },
  });

  const getErrorMessage = () => {
    if (errors[id]) {
      if (errors[id]!.type === 'required') {
        return 'Required field.';
      } else if (errors[id]!.type === 'validate') {
        return validationValue.errorMsg;
      }
    }
    return '';
  };

  const errorMessage = getErrorMessage();

  return (
    <InputContainer>
      {label && <h6>{label}</h6>}

      <label htmlFor={id}>
        <textarea {...options} {...registerProps} aria-invalid={errors[id] ? 'true' : 'false'} />
      </label>

      <ErrorContainer>{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}</ErrorContainer>
    </InputContainer>
  );
}
