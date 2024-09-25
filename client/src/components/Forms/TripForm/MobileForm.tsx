import React from 'react';
import { styled } from 'styled-components';
import { useForm } from 'react-hook-form';
import DefaultInput from '../../Form/Input/DefaultInput';
import ChangeOrderButton from './ChangeOrderButton';
import SearchButton from './SearchButton';

const DesktopFormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const FirstContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const SecondContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
`;

const DepartureAndReturnContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
`;

const ChangeOrderContainer = styled.div`
  top: 50%;
  right: 0;
  border-top-right-radius: 0;
  transform: translateY(-50%);
  position: absolute;
`;

export default function MobileForm() {
  const rhfFormConfig = useForm();

  return (
    <DesktopFormContainer>
      <FirstContainer>
        <DefaultInput
          id="origin-city"
          options={{ placeholder: 'Cidade de Origem' }}
          rhfConfig={rhfFormConfig}
          validationFn={(value) => {
            return { valid: typeof value === 'string', errorMsg: '' };
          }}
        />
        <DefaultInput
          id="destination-city"
          options={{ placeholder: 'Cidade de Destino' }}
          rhfConfig={rhfFormConfig}
          validationFn={(value) => {
            return { valid: typeof value === 'string', errorMsg: '' };
          }}
        />

        <ChangeOrderContainer>
          <ChangeOrderButton />
        </ChangeOrderContainer>
      </FirstContainer>

      <SecondContainer>
        <DepartureAndReturnContainer>
          <DefaultInput
            id="departure-date"
            options={{ placeholder: 'Ida' }}
            rhfConfig={rhfFormConfig}
            validationFn={(value) => {
              return { valid: typeof value === 'string', errorMsg: '' };
            }}
          />
          <DefaultInput
            id="return-date"
            options={{ placeholder: 'Volta' }}
            rhfConfig={rhfFormConfig}
            validationFn={(value) => {
              return { valid: typeof value === 'string', errorMsg: '' };
            }}
          />
        </DepartureAndReturnContainer>
      </SecondContainer>

      <SearchButton />
    </DesktopFormContainer>
  );
}
