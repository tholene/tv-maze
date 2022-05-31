import styled from "@emotion/styled";
import { Spacings } from "../../../../theme";

export const Title = styled.h1`
  margin-bottom: ${Spacings.large};
  color: ${({ theme }) => theme.text.color};
`;
