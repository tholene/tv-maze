import styled from "@emotion/styled";
import { BreakPoints } from "../../../../theme";

export const ShowSearchWrapper = styled.div`
  width: 50%;
  @media (max-width: ${BreakPoints.mobile}) {
    width: 90%;
    flex-direction: column;
  }
`;
