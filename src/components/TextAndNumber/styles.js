import styled, { css } from 'styled-components';

export const TextAndNumberWrapper = styled.div``;

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.darkBlack};

    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};

    margin-bottom: ${theme.spacings.small};
  `}
`;

export const NumberValue = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.green};

    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
  `}
`;
