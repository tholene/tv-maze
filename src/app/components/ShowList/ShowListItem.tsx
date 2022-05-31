import React from "react";
import { Show } from "../../interfaces/Show";
import { ShowName, StyledShowItem, TopInfo } from "./etc/style";

import { pathOr } from "ramda";

const ShowListItem = ({ show }: { show: Show }) => (
  <StyledShowItem
    data-testid="show"
    to={`/show/${show.id}`}
    image={pathOr("", ["image", "original"], show)}
  >
    <TopInfo>
      <ShowName>{show.name}</ShowName>
    </TopInfo>
  </StyledShowItem>
);

export default ShowListItem;
