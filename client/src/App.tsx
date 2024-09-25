import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { ToastContainer } from 'react-toastify';

import MyRoutes from './routes';
import GlobalStyles from './styles/GlobalStyles';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <MyRoutes />
      <GlobalStyles />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        closeOnClick
        rtl={false}
        draggable={'mouse'}
        theme="light"
      />
    </>
  );
}

export default App;
