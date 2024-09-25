const RESPONSE_CONFIG = {
  SUCCESS: {
    GET_MSG: 'Data received successfully',
    UPDATE_MSG: 'Data updated successfully',
    REGISTERED_IN: "You're now registered",
    LOGGED_IN: "You're now logged",
  },

  ERROR: {
    NAMES: {
      /* CLIENT ERRORS */
      GenericError: 'GenericError',
      UserNotFound: 'UserNotFound',
      AuthError: 'AuthError',
      InvalidUsernameError: 'InvalidUsernameError',
      InvalidPasswordError: 'InvalidPasswordError',
      InvalidLoginMethodError: 'InvalidLoginMethodError',
      JWTExpiredError: 'JWTExpiredError',
      UsernameAlreadyExistsError: 'UsernameAlreadyExistsError',
      EmailAlreadyExistsError: 'EmailAlreadyExistsError',
      UserUpdateInfoError: 'UserUpdateInfoError',

      /* SYSTEM ERRORS */
      DatabaseError: 'DatabaseError',
      UnavailableAuthMethod: 'UnavailableAuthMethod',
      UnexpectedDatabaseError: 'UnexpectedDatabaseError',
      DocumentNotFoundError: 'DocumentNotFoundError',
      InvalidPayloadError: 'InvalidPayloadError',
      RegisterError: 'RegisterError',
      EnvVariablesMissingError: 'EnvVariablesMissingError',
      UnknownError: 'UnknownError',
      ForgedWebhookError: 'ForgedWebhookError',
      InvalidJWTError: 'InvalidJWTError',
      GoogleOAuthSystemError: 'GoogleOAuthSystemError',
      SuspiciousAuthError: 'SuspiciousAuthError',
      InvalidRefreshToken: 'InvalidRefreshToken',
      BlacklistedTokenError: 'BlacklistedTokenError',
    },

    SYSTEM_ERROR_MSGS: {
      DOCUMENT_NOT_IN_DB_MSG: 'Document not in DB',
      INVALID_PAYLOAD: 'Invalid payload',
      ENV_VARIABLES_MISSING: 'You forgot some environment variables: ',
      UNAVAILABLE_AUTH_METHOD: 'Unavailable auth method',
      FORGED_WEBHOOK: 'Webhook forged',
      INVALID_JWT: 'INVALID_JWT',
      GOOGLE_OAUTH_SYSTEM: 'Something went wrong with GoogleOAuthSystem',
      SUSPICIOUS_AUTH: 'Something suspicious with user authentication',
      BLACKLISTED_TOKEN: 'Authentication with blacklisted token by user: ',
    },

    CLIENT_ERROR_MSGS: {
      GENERIC_ERROR_MSG: `Something went wrong. We're fixing it!`,
      AUTH_MSG: 'Unauthorized',
      INVALID_USERNAME: 'Username or password invalid',
      INVALID_PASSWORD: 'Username or password invalid',
      JWT_EXPIRED: 'Token expired',
      USERNAME_ALREADY_EXISTS: 'Username already exists',
      EMAIL_ALREADY_EXISTS: 'E-mail already exists',
      EMAIL_NOT_UPDATABLE: 'E-mail could not be updated',
      USER_NOT_FOUND: 'User not found',
      INVALID_LOGIN_METHOD: 'Account used a different method to register',
    },
  },
};

export { RESPONSE_CONFIG };
