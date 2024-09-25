// Errors occurred because of unauthorized or invalid requests by the user (shared with client)
import { RESPONSE_CONFIG } from '../../constants/RESPONSES';

export abstract class ClientError extends Error {
  status: number;
  name: string;
  type: string;

  constructor(message: string, name: string, status: number) {
    super(message);

    this.type = `Client Error`;
    this.name = name;
    this.status = status;
  }
}

export class GenericError extends ClientError {
  constructor(message: string = RESPONSE_CONFIG.ERROR.CLIENT_ERROR_MSGS.GENERIC_ERROR_MSG) {
    super(message, RESPONSE_CONFIG.ERROR.NAMES.GenericError, 404);
  }
}

export class UserNotFound extends ClientError {
  constructor(message: string = RESPONSE_CONFIG.ERROR.CLIENT_ERROR_MSGS.USER_NOT_FOUND) {
    super(message, RESPONSE_CONFIG.ERROR.NAMES.UserNotFound, 403);
  }
}

export class AuthError extends ClientError {
  constructor(message: string = RESPONSE_CONFIG.ERROR.CLIENT_ERROR_MSGS.AUTH_MSG) {
    super(message, RESPONSE_CONFIG.ERROR.NAMES.AuthError, 401);
  }
}

export class InvalidUsernameError extends ClientError {
  constructor(message: string = RESPONSE_CONFIG.ERROR.CLIENT_ERROR_MSGS.INVALID_USERNAME) {
    super(message, RESPONSE_CONFIG.ERROR.NAMES.InvalidUsernameError, 403);
  }
}

export class InvalidPasswordError extends ClientError {
  constructor(message: string = RESPONSE_CONFIG.ERROR.CLIENT_ERROR_MSGS.INVALID_PASSWORD) {
    super(message, RESPONSE_CONFIG.ERROR.NAMES.InvalidPasswordError, 403);
  }
}

export class InvalidLoginMethodError extends ClientError {
  constructor(message: string = RESPONSE_CONFIG.ERROR.CLIENT_ERROR_MSGS.INVALID_LOGIN_METHOD) {
    super(message, RESPONSE_CONFIG.ERROR.NAMES.InvalidLoginMethodError, 403);
  }
}

export class JWTExpiredError extends ClientError {
  constructor(message: string = RESPONSE_CONFIG.ERROR.CLIENT_ERROR_MSGS.JWT_EXPIRED) {
    super(message, RESPONSE_CONFIG.ERROR.NAMES.JWTExpiredError, 401);
  }
}

export class UsernameAlreadyExistsError extends ClientError {
  constructor(message: string = RESPONSE_CONFIG.ERROR.CLIENT_ERROR_MSGS.USERNAME_ALREADY_EXISTS) {
    super(message, RESPONSE_CONFIG.ERROR.NAMES.UsernameAlreadyExistsError, 403);
  }
}

export class EmailAlreadyExistsError extends ClientError {
  constructor(message: string = RESPONSE_CONFIG.ERROR.CLIENT_ERROR_MSGS.EMAIL_ALREADY_EXISTS) {
    super(message, RESPONSE_CONFIG.ERROR.NAMES.EmailAlreadyExistsError, 403);
  }
}

export class UserUpdateInfoError extends ClientError {
  constructor(message: string) {
    super(message, RESPONSE_CONFIG.ERROR.NAMES.UserUpdateInfoError, 403);
  }
}

export const ClientErrorMap: { [key: string]: new (...args: any[]) => ClientError } = {
  GenericError: GenericError,
  UserNotFound: UserNotFound,
  AuthError: AuthError,
  InvalidUsernameError: InvalidUsernameError,
  InvalidPasswordError: InvalidPasswordError,
  InvalidLoginMethodError: InvalidLoginMethodError,
  JWTExpiredError: JWTExpiredError,
  UsernameAlreadyExistsError: UsernameAlreadyExistsError,
  EmailAlreadyExistsError: EmailAlreadyExistsError,
  UserUpdateInfoError: UserUpdateInfoError,
};
