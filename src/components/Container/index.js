import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: ${theme.spacings.medium};
    padding-right: ${theme.spacings.medium};
  `}
`;
