import React from 'react';
import { styled } from 'styled-components';
import { useForm } from 'react-hook-form';
import ChangeOrderButton from './ChangeOrderButton';
import SearchButton from './SearchButton';
import DefaultInput from '@/components/Form/Input/DefaultInput';

import { MdTripOrigin } from 'react-icons/md';
import { MdDateRange } from 'react-icons/md';
import { FiMapPin } from 'react-icons/fi';

const DesktopFormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const FirstContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

const SecondContainer = styled.div`
  width: 40%;
  display: flex;
  gap: 0.5rem;
`;

const DepartureAndReturnContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
`;

export default function DesktopForm() {
  const rhfConfig = useForm();

  return (
    <DesktopFormContainer>
      <FirstContainer>
        <DefaultInput
          id="origin-city"
          icon={<MdTripOrigin />}
          options={{ placeholder: 'Cidade de Origem' }}
          rhfConfig={rhfConfig}
          validationFn={(value) => {
            return { valid: typeof value === 'string', errorMsg: '' };
          }}
        />

        <ChangeOrderButton />

        <DefaultInput
          id="destination-city"
          icon={<FiMapPin />}
          options={{ placeholder: 'Cidade de Destino' }}
          rhfConfig={rhfConfig}
          validationFn={(value) => {
            return { valid: typeof value === 'string', errorMsg: '' };
          }}
        />
      </FirstContainer>

      <SecondContainer>
        <DepartureAndReturnContainer>
          <DefaultInput
            id="departure-date"
            icon={<MdDateRange />}
            options={{ placeholder: 'Ida' }}
            rhfConfig={rhfConfig}
            validationFn={(value) => {
              return { valid: typeof value === 'string', errorMsg: '' };
            }}
          />
          <DefaultInput
            id="return-date"
            icon={<MdDateRange />}
            options={{ placeholder: 'Volta' }}
            rhfConfig={rhfConfig}
            validationFn={(value) => {
              return { valid: typeof value === 'string', errorMsg: '' };
            }}
          />
        </DepartureAndReturnContainer>

        <div>
          <SearchButton />
        </div>
      </SecondContainer>
    </DesktopFormContainer>
  );
}
