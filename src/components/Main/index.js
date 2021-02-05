import styled, { css } from 'styled-components';

export const Main = styled.main`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.large};
    padding-bottom: ${theme.spacings.large};
    height: 100%;
  `}
`;
