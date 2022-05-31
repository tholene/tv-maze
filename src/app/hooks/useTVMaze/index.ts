import axios from "axios";
import {useCallback, useState} from "react";
import config from "../../../config";

export const GET_SHOWS_REQUEST = (query: string) => `/search/shows?q=${query}`;

const useTVMaze = (
  query?: string | undefined
): [
  (query?: string | undefined) => void,
  { data: any; loading: boolean; error: any }
] => {
  const [data, setData] = useState<any | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  return [
    useCallback(
      (queryOverride?: string | undefined) => {
        setLoading(true);
        setError(undefined);
        axios
          .get(`${config.TV_MAZE_BASE_URL}/${query || queryOverride}`)
          .then((response) => {
            setData(response);
          })
          .catch((error) => {
            setError(error);
          })
          .finally(() => {
            setLoading(false);
          });
      },
      [query]
    ),
    { data, loading, error },
  ];
};

export default useTVMaze;
