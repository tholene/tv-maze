import styled from "@emotion/styled";
import { Spacings } from "../../../../theme";

export const Notifications = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: ${Spacings.medium};
  left: 50%;
  transform: translateX(-50%);

  > span {
    padding: ${Spacings.medium} ${Spacings.large};
    min-width: 20rem;
    margin-bottom: ${Spacings.medium};
    background-color: ${({ theme }) => theme.app.primary};
  }
`;
