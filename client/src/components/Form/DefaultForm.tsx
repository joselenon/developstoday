import Joi from 'joi';
import React, { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import styled from 'styled-components';

import { ICreateInput } from '@/interfaces/IRHF';
import PrimaryButton from '../Buttons/PrimaryButton';

const DefaultContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputRow = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 450px) {
    flex-wrap: wrap;
  }
`;

const MessageInputContainer = styled.div`
  width: 100%;

  input,
  textarea {
    height: 225px;
    resize: none;
    overflow-y: auto;
    white-space: pre-wrap;
  }
`;

const firstNameInput: ICreateInput = {
  label: 'First Name',
  componentKey: 'firstNameInput',
  id: 'firstName',
  options: { type: 'text', required: true },
  rhfConfig: {
    rhfValidationFn: (values) => {
      if (!values.trim()) return { errorMsg: 'Field required.', valid: false };
      const validationSchema = Joi.string().min(1).required();
      const { error } = validationSchema.validate(values);

      return { errorMsg: error?.message || '', valid: !error };
    },
  },
};

const lastNameInput: ICreateInput = {
  label: 'Last Name',
  componentKey: 'lastNameInput',
  id: 'lastName',
  options: { type: 'text', required: true },
  rhfConfig: {
    rhfValidationFn: (values) => {
      if (!values.trim()) return { errorMsg: 'Field required.', valid: false };
      const validationSchema = Joi.string().min(1).required();
      const { error } = validationSchema.validate(values);

      return { errorMsg: error?.message || '', valid: !error };
    },
  },
};

const emailInput: ICreateInput = {
  label: 'E-mail',
  componentKey: 'emailInput',
  id: 'email',
  options: { type: 'text', required: true },
  rhfConfig: {
    rhfValidationFn: (values) => {
      const validationSchema = Joi.string()
        .email({ tlds: { allow: false } })
        .required();
      const { error } = validationSchema.validate(values);

      return { errorMsg: error?.message || '', valid: !error };
    },
  },
};

const subjectInput: ICreateInput = {
  label: 'Subject',
  componentKey: 'subjectInput',
  id: 'subject',
  options: { type: 'text', required: true },
  rhfConfig: {
    rhfValidationFn: (values) => {
      if (!values.trim()) return { errorMsg: 'Field required.', valid: false };
      const validationSchema = Joi.string().min(1).required();
      const { error } = validationSchema.validate(values);

      return { errorMsg: error?.message || '', valid: !error };
    },
  },
};

const messageInput: ICreateInput = {
  label: 'Message',
  componentKey: 'messageInput',
  id: 'message',
  options: { type: 'textarea', required: true },
  rhfConfig: {
    rhfValidationFn: (values) => {
      if (!values.trim()) return { errorMsg: 'Field required.', valid: false };
      const validationSchema = Joi.string().min(1).required();
      const { error } = validationSchema.validate(values);

      return { errorMsg: error?.message || '', valid: !error };
    },
  },
};

const inputRows = [[firstNameInput, lastNameInput], [emailInput, subjectInput], [messageInput]];

export default function DefaultForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const [isPending, setIsPending] = useState(false);

  const { handleSendContactForm: axiosCallHook } = useSendContactForm();

  const onSubmitHandler: SubmitHandler<FieldValues> = async (info: any) => {
    try {
      setIsPending(true);
      await axiosCallHook({ payload: info });
      setIsPending(false);
    } catch (err) {
      setIsPending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} noValidate>
      <DefaultContainer>
        {inputRows.map((row, index) => (
          <InputRow key={`row-${index}`}>
            {row.map((input) =>
              input.id === 'messageInput' ? (
                <MessageInputContainer key={input.componentKey}>
                  <Input
                    componentKey={input.componentKey}
                    id={input.id}
                    options={input.options}
                    label={input.label}
                    rhfConfig={{
                      rhfValidationFn: input.rhfConfig?.rhfValidationFn,
                      rhfRegister: register,
                      rhfErrors: errors,
                      getValues,
                    }}
                  />
                </MessageInputContainer>
              ) : (
                <Input
                  key={input.componentKey}
                  componentKey={input.componentKey}
                  id={input.id}
                  options={input.options}
                  label={input.label}
                  rhfConfig={{
                    rhfValidationFn: input.rhfConfig?.rhfValidationFn,
                    rhfRegister: register,
                    rhfErrors: errors,
                    getValues,
                  }}
                />
              ),
            )}
          </InputRow>
        ))}

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <PrimaryButton
            color="var(--color-blue)"
            label="Send"
            attributes={{ type: 'submit', disabled: isPending }}
            icon={<FaRegArrowAltCircleRight />}
          />
        </div>
      </DefaultContainer>
    </form>
  );
}
function useSendContactForm(): { handleSendContactForm: any } {
  throw new Error('Function not implemented.');
}
