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

  &:hover {
    background: ${({ $color }) => ($color ? $color : 'var(--color-primary)')};
    color: var(--color-white);
  }
`;

const IconWrapper = styled.span<{ $hasIconAndLabel: boolean }>`
  display: inline-block;

  margin-right: ${({ $hasIconAndLabel }) =>
    $hasIconAndLabel ? '8px' : '0'}; /* Adiciona espaçamento se houver label */
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export default function SecondaryButton({ icon, label, color, attributes }: IButton) {
  return (
    <ButtonStyle {...attributes} $color={color}>
      <Container>
        <IconWrapper $hasIconAndLabel={!!label && !!icon}>{icon}</IconWrapper>
        {label && <span>{label}</span>}
      </Container>
    </ButtonStyle>
  );
}
