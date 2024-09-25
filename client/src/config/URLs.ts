import Environment from './Environment';

const PROTOCOL = Environment.VITE_APP_HTTPS ? 'https://' : 'http://';

const SERVER_URL_WITH_PROTOCOL = `${PROTOCOL}${Environment.VITE_APP_SERVER_URL}`;
const SERVER_PORT = Environment.VITE_APP_SERVER_PORT;

const SERVER_FULL_URL =
  Environment.VITE_APP_MODE === 'DEVELOPMENT' ? `${SERVER_URL_WITH_PROTOCOL}:${SERVER_PORT}` : SERVER_URL_WITH_PROTOCOL;

export const API_BASE = '';
export const API_URL = `${SERVER_FULL_URL}${API_BASE}`;

const CLIENT_URL_WITH_PROTOCOL = `${PROTOCOL}${Environment.VITE_APP_CLIENT_URL}`;
const CLIENT_PORT = Environment.VITE_APP_CLIENT_PORT;
export const CLIENT_FULL_URL =
  Environment.VITE_APP_MODE === 'PRODUCTION' ? CLIENT_URL_WITH_PROTOCOL : `${CLIENT_URL_WITH_PROTOCOL}:${CLIENT_PORT}`;

export const WS_PROTOCOL = Environment.VITE_APP_HTTPS ? 'wss://' : 'ws://';
const WS_API_URL_WITH_PROTOCOl = `${WS_PROTOCOL}${Environment.VITE_APP_SERVER_URL}:${
  Environment.VITE_APP_MODE === 'PRODUCTION' ? '' : SERVER_PORT
}${API_BASE}`;

const ENDPOINTS = {
  AUTH: '/auth',
  USER: '/user',
};

const API_ENDPOINTS = {
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
    WS_API_URL_WITH_PROTOCOl,
  },
  ENDPOINTS: API_ENDPOINTS,
};

export default URLS;
