import React from 'react';
import { styled } from 'styled-components';
import DesktopForm from './DesktopForm';
import { useScreenConfig } from '../../../contexts/ScreenConfigContext';
import MobileForm from './MobileForm';

const TripFormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export default function TripForm() {
  const { width } = useScreenConfig();

  return <TripFormContainer>{width > 768 ? <DesktopForm /> : <MobileForm />}</TripFormContainer>;
}
