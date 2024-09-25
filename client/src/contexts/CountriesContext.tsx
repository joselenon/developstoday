import useGetCountriesAvailable from '@/hooks/useGetCountriesAvailable';
import React, { createContext, useContext, useEffect, useState } from 'react';

const CountriesContext = createContext<{ countriesData: IGetCountriesAvailable | undefined }>({
  countriesData: undefined,
});

export function CountriesProvider({ children }: { children: JSX.Element }) {
  const { getCountries } = useGetCountriesAvailable();

  const [countries, setCountries] = useState<IGetCountriesAvailable | undefined>(undefined);

  useEffect(() => {
    const get = async () => {
      const countriesAvailable = await getCountries();
      setCountries(countriesAvailable);
    };

    get();
  }, []);

  return <CountriesContext.Provider value={{ countriesData: countries }}>{children}</CountriesContext.Provider>;
}

export function useCountries() {
  return useContext(CountriesContext);
}
