import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Spacings } from "../../../../theme";

export const Input = styled.input(
  ({ theme }) => css`
    width: 100%;
    display: block;
    margin: ${Spacings.xxSmall};
    padding: ${Spacings.xSmall};
    font-size: ${Spacings.medium};
    border-radius: ${Spacings.xSmall};
    box-sizing: border-box;
  `
);
