import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import unknownFlag from '@/assets/unknownFlag.png';
import CountryFlag from './CountryFlag';

const CountryButtonContainer = styled.div`
  width: 100px;
  height: 100px;
  background-color: var(--color-lightgrey);
  border-radius: var(--default-br);

  button {
    width: 100%;
    height: 100%;
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
    cursor: pointer;
    background-color: var(--color-grey);
  }

  span {
    font-family: var(--primary-font);
    font-weight: 600;
  }
`;

const UnlistedCountryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export default function CountryButton({ country, cb }: { country?: ICountryWithFlag; cb?: ICountrySpecificDetails }) {
  return (
    <>
      {country && (
        <Link to={`/${country.countryCode}`}>
          <CountryButtonContainer>
            <button type="button">
              <CountryFlag country={country} />
              <span>{country.name}</span>
            </button>
          </CountryButtonContainer>
        </Link>
      )}

      {!country && cb && (
        <CountryButtonContainer>
          <UnlistedCountryContainer>
            <span>{cb.commonName}</span>
            <span style={{ color: 'var(--color-grey)' }}>Unlisted</span>
          </UnlistedCountryContainer>
        </CountryButtonContainer>
      )}
    </>
  );
}
