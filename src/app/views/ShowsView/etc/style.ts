import styled from "@emotion/styled";
import { css, Theme } from "@emotion/react";
import { BreakPoints, Spacings } from "../../../../theme";
import { Link } from "react-router-dom";

export const ShowSearchWrapper = styled.div`
  width: 50%;
  @media (max-width: ${BreakPoints.mobile}) {
    width: 90%;
    flex-direction: column;
  }
`;

export const Shows = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: ${BreakPoints.mobile}) {
    flex-direction: column;
  }
`;

export const StyledShowItem = styled(Link)(
  ({ theme, image }: { theme?: Theme; image: string }) =>
    css(
      theme &&
        css`
          border-radius: ${Spacings.xSmall};
          color: ${theme.text.color};
          text-decoration: none;
          position: relative;
          overflow: hidden;
          background-color: ${theme.app.foreground};
          padding: ${Spacings.small} ${Spacings.medium};
          margin: 1rem;
          height: 100%;
          min-height: 10rem;
          width: calc(100% / 2 - (${Spacings.medium} * 2) - 2rem);

          @media (max-width: ${BreakPoints.mobile}) {
            width: unset;
          }
        `,
      image &&
        css`
          background-image: url(${image});
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
        `
    )
);

export const TopInfo = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: ${Spacings.small} ${Spacings.xSmall};
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.8) 75%,
    rgba(255, 255, 255, 0) 100%
  );
`;

export const ShowName = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
`;
