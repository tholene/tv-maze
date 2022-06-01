import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { BreakPoints, Spacings } from "../../../../theme";

export const BackLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: ${({ theme }) => theme.app.tertiary};
  :before {
    content: "<- ";
  }
`;

export const ShowDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ShowInformation = styled.div`
  margin-top: ${Spacings.medium};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;

  @media (max-width: ${BreakPoints.mobile}) {
    align-items: start;
    flex-direction: column;
  }
  span {
    color: ${({ theme }) => theme.app.secondary};
    font-size: 0.9rem;
  }
`;

export const ShowSummary = styled.div``;

export const ShowImage = styled.img`
  height: 100%;
  width: 100%;
`;
