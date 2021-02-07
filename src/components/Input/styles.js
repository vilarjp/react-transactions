import styled, { css } from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  position: relative;
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

export const InputField = styled.input`
  ${({ theme }) => css`
    height: ${theme.sizes.medium};
    padding: ${theme.spacings.small};

    border: 1px solid ${theme.colors.gray};
    border-radius: ${theme.border.inputRadius};

    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.neutralGray};
    outline: none;
  `}
`;
