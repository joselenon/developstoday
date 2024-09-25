import dotenv from 'dotenv';
import path from 'path';
import { EnvVariablesMissingError } from '../errors/classes/SystemErrors';

const envPath = path.resolve(__dirname, '../../../.env');
dotenv.config({ path: envPath });

const ENVIRONMENT = {
  MODE: process.env.MODE as 'DEVELOPMENT' | 'PRODUCTION',
  HTTPS: process.env.HTTPS === 'true' ? true : false,

  DOMAIN: process.env.DOMAIN as string,

  SERVER_URL: process.env.SERVER_URL,
  SERVER_PORT: (process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 3001) as number,

  CLIENT_URL: process.env.CLIENT_URL,
  CLIENT_PORT: (process.env.CLIENT_PORT ? Number(process.env.CLIENT_PORT) : 3000) as number,

  SESSION_SECRET: process.env.SESSION_SECRET as string,
  JWT_SECRET: process.env.JWT_SECRET as string,
};

const requiredVariables = ['MODE', 'HTTPS', 'DOMAIN', 'SERVER_URL', 'SERVER_PORT', 'CLIENT_URL'];

const missingVariables = requiredVariables.filter((variable) => !process.env[variable]);

if (missingVariables.length > 0) {
  throw new EnvVariablesMissingError(missingVariables);
}

export default ENVIRONMENT;
