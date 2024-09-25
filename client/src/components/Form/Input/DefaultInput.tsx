import React, { useState } from 'react';

import styled from 'styled-components';

import { FieldValues, UseFormGetValues, UseFormReturn } from 'react-hook-form';

const DefaultInputContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;

  input {
    border: none;
    font-family: var(--primary-font);
    font-size: 16px;
    font-weight: 400;
    width: 100%;
    height: var(--elements-height);
  }

  input:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  input:focus {
    outline: none;
  }

  span {
    font-size: 14px;
    font-weight: 800;
  }
`;

const WrapperContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--color-lightgrey);
  border-radius: var(--default-br);
  gap: 1rem;
  padding: 0 1rem;

  label {
    width: 100%;
  }
`;

const IconContainer = styled.div`
  display: flex;
  svg {
    color: var(--color-grey);
  }
`;

const ErrorContainer = styled.div`
  height: 19px;
`;

const ErrorMessage = styled.span`
  font-size: 12px;
  color: red;
`;

export interface ICreateDefaultInput {
  id: string;
  label?: string;
  icon?: JSX.Element;
  rhfConfig: UseFormReturn<FieldValues, any, undefined>;
  validationFn: (value: any, getValues: UseFormGetValues<FieldValues>) => { valid: boolean; errorMsg: string };
  options: React.InputHTMLAttributes<HTMLInputElement>;
}

export default function DefaultInput(props: ICreateDefaultInput) {
  const { id, label, icon, options, rhfConfig, validationFn } = props;

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
    <DefaultInputContainer>
      {label && <span>{label}</span>}

      <WrapperContainer>
        {icon && <IconContainer>{icon}</IconContainer>}

        <label htmlFor={id}>
          <input id={id} {...options} {...registerProps} aria-invalid={errors[id] ? 'true' : 'false'} />
        </label>
      </WrapperContainer>

      {errorMessage && <ErrorContainer>{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}</ErrorContainer>}
    </DefaultInputContainer>
  );
}
