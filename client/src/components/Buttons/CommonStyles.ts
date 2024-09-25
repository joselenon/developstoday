import { css } from 'styled-components';

export const CommonStyles = css`
  cursor: pointer;
  border-radius: var(--default-br);
  min-width: var(--elements-height);
  height: var(--elements-height);
  padding: 0 15px;
  width: 100%;

  font-family: var(--primary-font);
  font-weight: 600;
  font-size: 16px;

  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    filter: brightness(0.75);
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }
`;
