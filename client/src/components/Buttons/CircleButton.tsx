import React, { ButtonHTMLAttributes } from 'react';
import { styled } from 'styled-components';
import { CommonStyles } from './CommonStyles';
import { IButton } from './PrimaryButton';

interface IButtonStylesProps {
  $color?: string;
}

const ButtonStyle = styled.button<IButtonStylesProps>`
  ${CommonStyles}
  background: var(--color-white);
  border: ${({ $color }) => ($color ? `1px solid ${$color}` : '1px solid var(--color-primary)')};
  color: ${({ $color }) => ($color ? $color : 'var(--color-primary)')};
  border-radius: 100%;
  padding: 0;

  &:hover {
    background: ${({ $color }) => ($color ? $color : 'var(--color-primary)')};
    color: var(--color-white);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export default function CircleButton({ icon, label, color, attributes }: IButton) {
  return (
    <ButtonStyle {...attributes} $color={color}>
      <Container>
        {icon}
        {label && <span>{label}</span>}
      </Container>
    </ButtonStyle>
  );
}
