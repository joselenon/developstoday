import Joi from 'joi';
import {
  isCpfValid,
  isEmailValid,
  isFullNameValid,
  isPasswordsValid,
  isPasswordValid,
  isUsernameValid,
} from '@/utils/isValid';
import DefaultInput, { ICreateDefaultInput } from './DefaultInput';

const renderGenericInput = ({
  type,
  rhfConfig,
}: {
  type: 'email' | 'username' | 'fullName' | 'cpf' | 'cellphone' | 'password' | 'cpassword';
  rhfConfig: ICreateDefaultInput['rhfConfig'];
}) => {
  switch (type) {
    case 'email':
      return (
        <DefaultInput
          label="E-mail"
          id="email"
          options={{ type: 'text', required: true, placeholder: 'Digite seu e-mail', autoComplete: 'email' }}
          rhfConfig={rhfConfig}
          validationFn={(value: string) => isEmailValid(value)}
        />
      );
    case 'fullName':
      return (
        <DefaultInput
          label="Nome Completo"
          id="fullName"
          options={{ type: 'text', required: true, placeholder: 'Digite seu nome completo' }}
          rhfConfig={rhfConfig}
          validationFn={(value: string) => isFullNameValid(value)}
        />
      );
    case 'cpf':
      return (
        <DefaultInput
          label="CPF"
          id="cpf"
          options={{ type: 'text', required: true, placeholder: 'Digite seu CPF' }}
          rhfConfig={rhfConfig}
          validationFn={(value: string) => isCpfValid(value)}
        />
      );
    case 'cellphone':
      return (
        <DefaultInput
          label="Celular"
          id="cellphone"
          options={{ type: 'text', required: true, placeholder: 'Digite seu celular' }}
          rhfConfig={rhfConfig}
          validationFn={(value: string) => isPasswordValid(value)}
        />
      );
    case 'password':
      return (
        <DefaultInput
          label="Senha"
          id="password"
          options={{ type: 'password', required: true, placeholder: 'Digite sua senha' }}
          rhfConfig={rhfConfig}
          validationFn={(value: string) => isPasswordValid(value)}
        />
      );
    case 'cpassword':
      return (
        <DefaultInput
          label="Confirmar Senha"
          id="cpassword"
          options={{ type: 'password', required: true, placeholder: 'Confirme sua senha' }}
          rhfConfig={rhfConfig}
          validationFn={(value: string, getValues) =>
            isPasswordsValid({ password: getValues().password, cpassword: value })
          }
        />
      );
  }
};

export default renderGenericInput;
