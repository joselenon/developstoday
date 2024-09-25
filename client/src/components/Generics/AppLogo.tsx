import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { useScreenConfig } from '../../contexts/ScreenConfigContext';

const LogoText = styled.span<{ $screenWidth: number }>`
  font-size: 24px;
  font-weight: 800;
  font-family: var(--logo-font);
  color: transparent;
  background: linear-gradient(110deg, #0066cc 27%, #009933 56%, #ffcc00 60%);
  -webkit-background-clip: text;
  background-clip: text;
  display: inline-block;
`;

export default function AppLogo({ resizeble = true }: { resizeble?: boolean }) {
  const { width } = useScreenConfig();

  return (
    <Link to={'/'}>
      <LogoText $screenWidth={width}>{width < 1150 && resizeble ? 'AMTOUR' : 'AMAPÁTUR'}</LogoText>
    </Link>
  );
}
