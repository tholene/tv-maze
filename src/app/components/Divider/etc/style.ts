import styled from "@emotion/styled";
import { Spacings } from "../../../../theme";

export const Divider = styled.div`
  background-color: ${({ theme }) => theme.app.primary};
  height: ${Spacings.xxSmall};
  margin-bottom: ${Spacings.medium};
`;
