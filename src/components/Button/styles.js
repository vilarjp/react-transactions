import styled, { css } from 'styled-components';

const wrapperModifiers = {
  withIcon: (theme) => css`
    svg {
      width: ${theme.font.sizes.large};
      margin-right: ${theme.spacings.small};
    }
  `,

  fullWidth: () => css`
    width: 100%;
  `,

  disabled: (theme) => css`
    &:disabled {
      cursor: not-allowed;
      background: ${theme.colors.lightGray};
      color: ${theme.colors.mediumGray};
    }
  `,
};

export const ButtonWrapper = styled.button`
  ${({ theme, hasIcon, fullWidth, disabled }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    height: ${theme.sizes.normal};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.medium};

    background: ${theme.colors.purple};
    color: ${theme.colors.white};
    border: 0;
    border-radius: ${theme.border.buttonRadius};
    box-shadow: 0px 4px 6px ${theme.colors.shadow};
    cursor: pointer;
    transition: opacity ${theme.transition.default};

    font-family: ${theme.font.family};

    &:hover {
      opacity: 0.7;
    }

    ${!!hasIcon && wrapperModifiers.withIcon(theme)};
    ${!!fullWidth && wrapperModifiers.fullWidth()};
    ${disabled && wrapperModifiers.disabled(theme)};
  `}
`;
