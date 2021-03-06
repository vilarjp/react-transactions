import styled, { css } from 'styled-components';

import * as InputStyles from '../../../../components/Input/styles';
import * as ErrorMessageStyles from '../../../../components/ErrorMessage/styles';

export const FormWrapper = styled.form`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.ultraLarge};
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ${ErrorMessageStyles.ErrorWrapper} {
      text-align: left;
      margin-bottom: ${theme.spacings.medium};
    }

    ${InputStyles.InputWrapper} {
      margin-bottom: ${theme.spacings.medium};
    }

    button {
      margin-bottom: ${theme.spacings.xlarge};
    }
  `}
`;

export const FormContent = styled.div``;

export const FormCreditCard = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;

    > ${InputStyles.InputWrapper}:first-child {
      max-width: 60%;
      width: 100%;
    }

    > ${InputStyles.InputWrapper}:last-child {
      max-width: 40%;
      width: 100%;
      padding-left: ${theme.spacings.almostSmall};
    }
  `}
`;
