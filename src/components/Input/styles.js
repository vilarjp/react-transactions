import styled, { css } from 'styled-components';

import InputMask from 'react-input-mask';
import IntlCurrencyInput from 'react-intl-currency-input';

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    position: relative;

    small {
      margin-top: calc(${theme.spacings.xsmall} / 2);
      color: ${theme.colors.purple};
    }
  `}
`;

export const InputLabel = styled.label`
  ${({ theme, hasFocus }) => css`
    position: absolute;
    top: -10px;
    left: 10px;
    z-index: 1;
    padding: 0 ${theme.spacings.xsmall};
    opacity: ${hasFocus ? 1 : 0};
    transition: opacity ${theme.transition.default};

    background: ${theme.colors.white};
    color: ${theme.colors.gray};
  `}
`;

const inputStyles = ({ theme }) => css`
  height: ${theme.sizes.medium};
  padding: ${theme.spacings.small};

  border: 1px solid ${theme.colors.gray};
  border-radius: ${theme.border.inputRadius};

  font-size: ${theme.font.sizes.medium};
  color: ${theme.colors.neutralGray};
  outline: none;
`;

export const InputField = styled(InputMask)`
  ${inputStyles};
`;

export const InputCurrency = styled(IntlCurrencyInput)`
  ${inputStyles};
`;
