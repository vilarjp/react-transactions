import styled, { css } from 'styled-components';

export const ErrorWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.purple};

    text-align: center;
    font-weight: ${theme.font.bold};
  `}
`;
