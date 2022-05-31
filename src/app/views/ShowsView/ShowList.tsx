import React from "react";

import { Shows } from "./etc/style";
import ShowItem from "./ShowListItem";

import { Show } from "../../interfaces/Show";

import { map } from "ramda";

const ShowList = ({ shows }: { shows: Show[] }) => (
  <Shows>
    {map(
      (show) => (
        <ShowItem key={show.id} show={show} />
      ),
      shows
    )}
  </Shows>
);

export default ShowList;
