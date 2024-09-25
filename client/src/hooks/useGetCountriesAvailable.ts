import URLS from '@/config/URLs';
import { IGetCountriesAvailable } from '@/interfaces/ICountries';
import MyAxiosServiceInstance from '@/services/MyAxiosService';
import React from 'react';
import { toast } from 'react-toastify';

export default function useGetCountriesAvailable() {
  const getCountries = async () => {
    const countriesAvailable = await MyAxiosServiceInstance.request<IGetCountriesAvailable>({
      requestConfig: { url: URLS.ENDPOINTS.COUNTRIES, method: 'get', data: null },
    });

    if (!countriesAvailable.data) {
      toast.error('Error getting countries');
      return;
    }

    return countriesAvailable.data;
  };

  return { getCountries };
}
