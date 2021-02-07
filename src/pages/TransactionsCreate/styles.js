import styled, { css } from 'styled-components';

import { Main } from '../../components/Main';
import { Container } from '../../components/Container';

export const TransactionsMain = styled(Main)`
  ${({ theme }) => css`
    height: calc(100% - ${theme.spacings.medium});
  `}
`;

export const SectionTransactionsCreate = styled.section`
  ${({ theme }) => css`
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: ${theme.colors.white};
  `}
`;

export const TransactionContainer = styled(Container)`
  height: 100%;
`;
