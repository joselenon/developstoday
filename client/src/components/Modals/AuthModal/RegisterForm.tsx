import React from 'react';

import useRegister from '../../../hooks/useRegister';
import { ICreateInput } from '../../../interfaces/IRHF';
import Form from '../../Form';
import { useForm } from 'react-hook-form';
import renderGenericInput from '@/components/Form/Input/GenericsInputs';

export default function RegisterForm() {
  const handleEnterButtonClick = useRegister();
  const rhfConfig = useForm();

  const passwordInput: ICreateInput = {
    componentKey: 'password',
    id: 'password',
    options: { type: 'password', required: true },
    label: 'Password',
  };

  const confirmPasswordInput: ICreateInput = {
    componentKey: 'confirmPassword',
    id: 'confirmPassword',
    options: { type: 'password', required: true },
    label: 'Confirm Password',
    rhfConfig: {
      rhfValidationFn: (value: string, getValues) => {
        const password = getValues?.('password');
        if (value !== password) return { valid: false, errorMsg: "Doesn't match the password" };
        return { valid: true, errorMsg: '' };
      },
    },
  };

  return (
    <Form
      axiosCallHook={handleEnterButtonClick}
      buttonConfig={{ btnType: 'BLUE', label: 'Registrar' }}
      rhfConfig={rhfConfig}
    >
      {renderGenericInput({ type: 'fullName', rhfConfig: rhfConfig })}
      {renderGenericInput({ type: 'email', rhfConfig: rhfConfig })}
      {renderGenericInput({ type: 'cpf', rhfConfig: rhfConfig })}
      {renderGenericInput({ type: 'cellphone', rhfConfig: rhfConfig })}
      {renderGenericInput({ type: 'password', rhfConfig: rhfConfig })}
      {renderGenericInput({ type: 'cpassword', rhfConfig: rhfConfig })}
    </Form>
  );
}
