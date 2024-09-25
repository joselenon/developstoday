import ENVIRONMENT from './ENVIRONMENT';

const PROTOCOL = ENVIRONMENT.HTTPS ? 'https://' : 'http://';

const DOMAIN = ENVIRONMENT.DOMAIN;

// SERVER
// https://serverdomain.com OU http://localhost
const SERVER_URL_WITH_PROTOCOL = `${PROTOCOL}${ENVIRONMENT.SERVER_URL}`;
// SERVER PORT
const SERVER_PORT = ENVIRONMENT.SERVER_PORT;
// https://serverdomain.com OU http://localhost:PORT
const SERVER_FULL_URL =
  ENVIRONMENT.MODE.toUpperCase() === 'DEVELOPMENT'
    ? `${SERVER_URL_WITH_PROTOCOL}:${SERVER_PORT}`
    : SERVER_URL_WITH_PROTOCOL;
// https://serverdomain.com/api OU http://localhost:PORT/api
export const API_BASE = '';
export const API_URL = `${SERVER_FULL_URL}${API_BASE}`;

// CLIENT
// https://clientdomain.com OU http://localhost
const CLIENT_URL_WITH_PROTOCOL = `${PROTOCOL}${ENVIRONMENT.CLIENT_URL}`;
/* CLIENT PORT */
const CLIENT_PORT = ENVIRONMENT.CLIENT_PORT;
/* https://client.domain.com OU http://localhost:PORT */
export const CLIENT_FULL_URL =
  ENVIRONMENT.MODE.toUpperCase() === 'PRODUCTION'
    ? CLIENT_URL_WITH_PROTOCOL
    : `${CLIENT_URL_WITH_PROTOCOL}:${CLIENT_PORT}`;

const ENDPOINTS = {
  // Example
  // AUTH: '/auth',
};

const API_ENDPOINTS = {
  // Example
  // AUTH: {
  //   DISCORD: {
  //     initial: `${ENDPOINTS.AUTH}/discord`,
  //     callback: `${ENDPOINTS.AUTH}/discord/callback`,
  //   },
  // },

  COUNTRIES: '/countries',
  COUNTRY_DETAILS: '/countrydetails',
  COUNTRY_POPULATION: '/countrypopulation',
};

const URLS = {
  MAIN_URLS: {
    CLIENT_PORT,
    CLIENT_URL_WITH_PROTOCOL,
    SERVER_PORT,
    SERVER_URL_WITH_PROTOCOL,
    API_URL,
    CLIENT_FULL_URL,
    SERVER_FULL_URL,
    DOMAIN,
  },
  ENDPOINTS: API_ENDPOINTS,
};

export default URLS;
