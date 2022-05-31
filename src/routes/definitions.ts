import {RouteProps} from "react-router/lib/components";

interface Route {
  name: string;
  path: string;
  view: string;
}

export default [
  {
    name: "shows",
    path: "",
    view: "ShowsView",
  },
] as Route[];
