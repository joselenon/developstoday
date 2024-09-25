import React, { ReactNode, useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm, UseFormReturn } from 'react-hook-form';
import styled from 'styled-components';
import PrimaryButton, { IButton } from '../Buttons/PrimaryButton';

const DefaultContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export interface IForm {
  axiosCallHook: (payload: any) => any;
  children: ReactNode;
  buttonConfig: IButton;
  rhfConfig: UseFormReturn<FieldValues, any, undefined>;
}

export default function Form(props: IForm) {
  const { axiosCallHook, buttonConfig, children, rhfConfig } = props;

  const { setValue, handleSubmit } = rhfConfig;

  const [isPending, setIsPending] = useState(false);

  const onSubmitHandler: SubmitHandler<FieldValues> = async (info) => {
    try {
      setIsPending(true);
      await axiosCallHook({ ...info });
      setIsPending(false);
    } catch (err: any) {
      setIsPending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} noValidate>
      <DefaultContainer>
        {children}

        <PrimaryButton {...buttonConfig} attributes={{ type: 'submit', disabled: isPending }} />
      </DefaultContainer>
    </form>
  );
}
