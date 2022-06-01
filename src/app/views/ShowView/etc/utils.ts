import { compose, pickAll, propOr } from "ramda";

const fieldsToPick = [
  "image",
  "name",
  "summary",
  "premiered",
  "ended",
  "rating",
  "genres",
];

export const parseShow = compose(pickAll(fieldsToPick), propOr({}, "data"));
