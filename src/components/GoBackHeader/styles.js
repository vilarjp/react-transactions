import styled, { css } from 'styled-components';

import { Container } from '../Container';

export const Wrapper = styled(Container)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-bottom: ${theme.spacings.medium};

    a {
      position: absolute;
      height: 15px;
      width: 15px;
      transition: opacity ${theme.transition.default};

      &:hover {
        opacity: 0.7;
      }
    }

    svg {
      position: absolute;
    }

    h1 {
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.darkPurple};
      margin: 0 auto;
    }
  `}
`;
