import URLS from '@/config/URLs';
import MyAxiosServiceInstance from '@/services/MyAxiosService';
import React from 'react';
import { toast } from 'react-toastify';

export default function useGetCountryPopulation() {
  const getPopulation = async (countryCode: string) => {
    const countriesAvailable = await MyAxiosServiceInstance.request<ICountryPopulation>({
      requestConfig: { url: URLS.ENDPOINTS.COUNTRY_POPULATION, method: 'post', data: { countryCode } },
    });

    if (!countriesAvailable.data) {
      toast.error('Error getting countries');
      return;
    }

    return countriesAvailable.data;
  };

  return { getPopulation };
}
