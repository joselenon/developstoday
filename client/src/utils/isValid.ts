import Joi from 'joi';

const validationSchema = {
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.email': 'E-mail inválido',
      'string.empty': 'Campo obrigatório',
    }),
  fullName: Joi.string()
    .min(5)
    .regex(/^[a-zA-Z\s]+$/)
    .required()
    .messages({
      'string.min': 'Mínimo de 5 caracteres',
      'string.pattern.base': 'Nome não pode conter símbolos, números ou caracteres especiais',
      'string.empty': 'Campo obrigatório',
    }),
  cellphone: Joi.string()
    .pattern(/^\(\d{2}\) \d{5}-\d{4}$/)
    .required()
    .messages({
      'string.pattern.base': 'Celular inválido. Formato esperado: (xx) xxxxx-xxxx',
      'string.empty': 'Campo obrigatório',
    }),
  password: Joi.string().min(8).required().messages({
    'string.min': 'A senha deve ter no mínimo 8 caracteres',
    'string.empty': 'Campo obrigatório',
  }),
  passwords: Joi.object({
    password: Joi.string().min(8).required().messages({
      'string.min': 'A senha deve ter no mínimo 8 caracteres',
      'string.empty': 'Campo obrigatório',
    }),
    cpassword: Joi.any().valid(Joi.ref('password')).required().messages({
      'any.only': 'Senhas não coincidem',
      'string.empty': 'Campo obrigatório',
    }),
  }),
};

const joiValidateField = (type: keyof typeof validationSchema, value: string) => {
  const { error } = validationSchema[type].validate(value);
  return {
    valid: !error,
    errorMsg: error ? error.details[0].message : '',
  };
};

function isUsernameValid(value: string) {
  return joiValidateField('fullName', value);
}

function isFullNameValid(value: string) {
  return joiValidateField('fullName', value);
}

const isEmailValid = (value: string) => {
  return joiValidateField('email', value);
};

const isPasswordValid = (value: string) => {
  return joiValidateField('password', value);
};

const isCpfValid = (value: string) => {
  const cpf = value.replace(/[^\d]+/g, '');

  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
    return { valid: false, errorMsg: 'CPF inválido' };
  }

  const calculateDigit = (cpfArray: string[], factor: number) => {
    const total = cpfArray
      .slice(0, factor - 1)
      .reduce((acc, current, index) => acc + parseInt(current) * (factor - index), 0);
    const remainder = (total * 10) % 11;
    return remainder === 10 ? 0 : remainder;
  };

  const firstDigit = calculateDigit(cpf.split(''), 10);
  if (firstDigit !== parseInt(cpf[9])) {
    return { valid: false, errorMsg: 'CPF inválido' };
  }

  const secondDigit = calculateDigit(cpf.split(''), 11);
  if (secondDigit !== parseInt(cpf[10])) {
    return { valid: false, errorMsg: 'CPF inválido' };
  }

  return { valid: true, errorMsg: '' };
};

const isPasswordsValid = (formData: { password: string; cpassword: string }) => {
  const { error } = validationSchema['passwords'].validate(formData, { abortEarly: false });

  if (error) {
    const errorMessages = error.details.map((err) => err.message);
    return { valid: false, errorMsg: errorMessages[0] };
  }

  return { valid: true, errorMsg: '' };
};

export { isEmailValid, isUsernameValid, isCpfValid, isFullNameValid, isPasswordValid, isPasswordsValid };
