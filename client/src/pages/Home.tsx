import React, { useEffect, useState } from 'react';

import { DefaultContainer } from '../styles/GlobalStyles';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useCountries } from '@/contexts/CountriesContext';
import SecondaryButton from '@/components/Buttons/SecondaryButton';
import CountryButton from '@/components/CountryButton';

const CountriesButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const CountryButtonContainer = styled.div`
  button {
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border: none;
    border-radius: var(--default-br);
  }

  button:hover {
    background-color: var(--color-lightgrey);
    cursor: pointer;
  }

  span {
    font-family: var(--primary-font);
    font-weight: 600;
  }
`;

export default function Home() {
  const { countriesData } = useCountries();

  return (
    <DefaultContainer>
      <h3 style={{ marginBottom: 20 }}>Select a Country</h3>

      <CountriesButton>
        {countriesData
          ? countriesData.countriesAvailable.map((country, index) => (
              <Link key={index} to={`${country.countryCode}`}>
                <CountryButton country={country} />
              </Link>
            ))
          : 'Loading...'}
      </CountriesButton>
    </DefaultContainer>
  );
}
