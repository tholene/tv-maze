import { compose, map, pathOr, pickAll, propOr } from "ramda";

const fieldsToPick = ["id", "image", "name"];

export const parseSearchResult = compose(
  map(compose(pickAll(fieldsToPick), propOr({}, "show"))),
  pathOr([], ["data"])
);
