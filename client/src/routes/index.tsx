import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import CountryPage from '@/pages/CountryPage';

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:countryCode" element={<CountryPage />} />
    </Routes>
  );
}
