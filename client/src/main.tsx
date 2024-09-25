import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import reduxStore from './redux';
import { ScreenConfigProvider } from './contexts/ScreenConfigContext';
import { CountriesProvider } from './contexts/CountriesContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={reduxStore}>
    {/*       <React.StrictMode> */}

    <BrowserRouter>
      <ScreenConfigProvider>
        <CountriesProvider>
          <App />
        </CountriesProvider>
      </ScreenConfigProvider>
    </BrowserRouter>

    {/*       </React.StrictMode> */}
  </Provider>,
);
