import URLS from '@/config/URLs';
import MyAxiosServiceInstance from '@/services/MyAxiosService';
import React from 'react';
import { toast } from 'react-toastify';

export default function useGetCountryDetails() {
  const getDetails = async (countryCode: string) => {
    const countriesAvailable = await MyAxiosServiceInstance.request<{
      details: ICountrySpecificDetails;
      flag: string | undefined;
    }>({
      requestConfig: { url: URLS.ENDPOINTS.COUNTRY_DETAILS, method: 'post', data: { countryCode } },
    });

    if (!countriesAvailable.data) {
      toast.error('Error getting countries');
      return;
    }

    return countriesAvailable.data;
  };

  return { getDetails };
}
