import React from 'react';
import styled from 'styled-components';
import { useScreenConfig } from '../../../contexts/ScreenConfigContext';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import CircleButton from '@/components/Buttons/CircleButton';

const SearchButtonContainer = styled.div`
  width: 100%;
`;

export default function SearchButton() {
  const { isMobile } = useScreenConfig();

  return (
    <SearchButtonContainer>
      {!isMobile && (
        <div>
          <CircleButton icon={<FaMagnifyingGlass />} />
        </div>
      )}

      {isMobile && <PrimaryButton icon={<FaMagnifyingGlass />} label="Buscar" />}
    </SearchButtonContainer>
  );
}
