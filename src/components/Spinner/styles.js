import styled, { css } from 'styled-components';

export const SpinnerWrapper = styled.div`
  ${({ theme }) => css`
    border: 8px solid ${theme.colors.gray};
    border-left-color: ${theme.colors.purple};
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1.5s linear infinite;

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  `}
`;
