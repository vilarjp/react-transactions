import styled, { css } from 'styled-components';

import { Container } from '../../components/Container';

import * as TextAndNumberStyles from '../../components/TextAndNumber/styles';
import * as SpinnerStyles from '../../components/Spinner/styles';

export const SectionTransactionsList = styled.section`
  height: 100%;

  ${SpinnerStyles.SpinnerWrapper} {
    margin: 0 auto;
    position: fixed;
    left: calc(50% - 25px);
    bottom: 15%;
  }
`;

export const TransactionsContainer = styled(Container)`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xlarge};

    ${TextAndNumberStyles.TextAndNumberWrapper}:first-child {
      margin-bottom: ${theme.spacings.xlarge};
    }
  `}
`;

export const TransactionsList = styled.div`
  padding-bottom: 80px;
`;

export const TransactionsFixedContainer = styled(Container)`
  ${({ theme }) => css`
    position: fixed;
    bottom: 0%;
    margin-bottom: ${theme.spacings.medium};
  `}
`;
