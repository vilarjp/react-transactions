import styled, { css } from 'styled-components';

export const TransactionWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    padding: ${theme.spacings.medium};
    border-bottom: 1px solid ${theme.colors.lightGray};
    background-color: ${theme.colors.white};
  `}
`;

export const TransactionTitle = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: ${theme.spacings.small};
  `}
`;

export const TransactionUser = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    font-weight: ${theme.font.bold};
  `}
`;

export const TransactionStatus = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.mediumGray};
    font-size: ${theme.font.sizes.small};
  `}
`;

export const TransactionInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TransactionDate = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
  `}
`;

export const TransactionAmount = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.mediumBlack};
    font-weight: ${theme.font.bold};
  `}
`;
