import BasicLineChart from '@/components/BasicLineChart';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import CountryButton from '@/components/CountryButton';
import CountryFlag from '@/components/CountryFlag';
import { useCountries } from '@/contexts/CountriesContext';
import useGetCountryDetails from '@/hooks/useGetCountryDetails';
import { DefaultContainer } from '@/styles/GlobalStyles';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const CountryPageContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  gap: 4rem;

  @media (max-width: 1000px) {
    flex-wrap: wrap;
    gap: 2rem;
  }
`;

export default function CountryPage() {
  const { countryCode } = useParams();
  const { getDetails } = useGetCountryDetails();

  const [countryElement, setCountryElement] = useState<JSX.Element | undefined>(undefined);

  const [details, setDetails] = useState<{ details: ICountrySpecificDetails; flag: string | undefined } | undefined>(
    undefined,
  );
  const { countriesData } = useCountries();

  useEffect(() => {
    const get = async () => {
      if (!countryCode) return;

      const countryDetails = await getDetails(countryCode);
      setDetails(countryDetails);
    };

    get();
  }, [countryCode]);

  const detailsPage = () => {
    if (!countriesData) return;
    const country = countriesData?.countriesAvailable.find((country) => country.countryCode === countryCode);

    return (
      <DetailsContainer>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <CountryFlag country={country} />
          <h3>{details?.details.commonName}</h3>
          {country?.countryCode === 'UA' && (
            <span style={{ color: 'var(--color-red)', fontWeight: '600' }}>{`Ukraine <3`}</span>
          )}
        </div>

        <div>
          <h4 style={{ marginBottom: 15 }}>Border Countries</h4>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
            {details?.details.borders.map((cb: ICountrySpecificDetails) => {
              const country = countriesData?.countriesAvailable.find(
                (country) => country.countryCode === cb.countryCode,
              );

              return <CountryButton country={country} cb={cb} />;
            })}
          </div>
        </div>
      </DetailsContainer>
    );
  };

  useEffect(() => {
    setCountryElement(detailsPage());
  }, [countryCode, countriesData, details]);

  return (
    <DefaultContainer>
      <Link to={'/'}>
        <PrimaryButton label="Back" />{' '}
      </Link>

      <CountryPageContainer>
        <div>{countryElement}</div>

        <div>
          <h4>Population Chart</h4>

          <BasicLineChart />
        </div>
      </CountryPageContainer>
    </DefaultContainer>
  );
}
