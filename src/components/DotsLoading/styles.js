import styled, { css } from 'styled-components';

export const LoadingWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    left: -9999px;
    width: 3px;
    height: 3px;
    border-radius: 5px;
    background-color: ${theme.colors.green};
    color: ${theme.colors.green};
    box-shadow: 9999px 0 0 -5px ${theme.colors.green};
    animation: dotPulse 1.5s infinite linear;
    animation-delay: 0.25s;

    &::before,
    &::after {
      content: '';
      display: inline-block;
      position: absolute;
      top: 0;
      width: 3px;
      height: 3px;
      border-radius: 5px;
      background-color: ${theme.colors.green};
      color: ${theme.colors.green};
    }

    &::before {
      box-shadow: 9984px 0 0 -5px ${theme.colors.green};
      animation: dotPulseBefore 1.5s infinite linear;
      animation-delay: 0s;
    }

    &::after {
      box-shadow: 10014px 0 0 -5px ${theme.colors.green};
      animation: dotPulseAfter 1.5s infinite linear;
      animation-delay: 0.5s;
    }

    @keyframes dotPulseBefore {
      0% {
        box-shadow: 9984px 0 0 -5px ${theme.colors.green};
      }
      30% {
        box-shadow: 9984px 0 0 2px ${theme.colors.green};
      }
      60%,
      100% {
        box-shadow: 9984px 0 0 -5px ${theme.colors.green};
      }
    }

    @keyframes dotPulse {
      0% {
        box-shadow: 9999px 0 0 -5px ${theme.colors.green};
      }
      30% {
        box-shadow: 9999px 0 0 2px ${theme.colors.green};
      }
      60%,
      100% {
        box-shadow: 9999px 0 0 -5px ${theme.colors.green};
      }
    }

    @keyframes dotPulseAfter {
      0% {
        box-shadow: 10014px 0 0 -5px ${theme.colors.green};
      }
      30% {
        box-shadow: 10014px 0 0 2px ${theme.colors.green};
      }
      60%,
      100% {
        box-shadow: 10014px 0 0 -5px ${theme.colors.green};
      }
    }
  `}
`;
