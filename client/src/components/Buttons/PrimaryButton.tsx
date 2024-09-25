import React, { ButtonHTMLAttributes } from 'react';
import { styled } from 'styled-components';
import { CommonStyles } from './CommonStyles';

interface IButtonStylesProps {
  $color?: string;
}

const ButtonStyle = styled.button<IButtonStylesProps>`
  ${CommonStyles}

  background: ${({ $color }) => ($color ? $color : 'var(--color-primary)')};
  border: none;

  color: var(--color-white);

  svg {
    color: var(--color-white);
    vertical-align: middle;
    display: inline-block;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export interface IButton {
  icon?: JSX.Element;
  label?: string;
  color?: string;
  attributes?: ButtonHTMLAttributes<HTMLButtonElement>;
}

export default function PrimaryButton({ icon, label, color, attributes }: IButton) {
  return (
    <ButtonStyle {...attributes} $color={color}>
      <Container>
        {icon}
        {label}
      </Container>
    </ButtonStyle>
  );
}
