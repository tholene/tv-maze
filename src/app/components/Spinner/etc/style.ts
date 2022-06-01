import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const SpinnerContainer = styled.div(
  ({ centered }: { centered: boolean }) =>
    css(
      css`
        position: relative;
      `,
      centered &&
        css`
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        `
    )
);

export const Spinner = styled.div(
  ({ theme }) =>
    css`
      border: 1rem solid ${theme.app.foreground};
      border-top: 1rem solid ${theme.app.accent};
      border-radius: 50%;
      width: 7.5rem;
      height: 7.5rem;
      animation: spin 2s linear infinite;

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `
);
