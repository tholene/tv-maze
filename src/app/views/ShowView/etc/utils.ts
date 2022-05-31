import { compose, pickAll, propOr } from "ramda";

const fieldsToPick = ["image", "name", "summary"];

export const parseShow = compose(pickAll(fieldsToPick), propOr({}, "data"));
