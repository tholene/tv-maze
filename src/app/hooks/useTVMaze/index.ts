import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import config from "../../../config";

export const GET_SHOWS_REQUEST = (query: string) => `search/shows?q=${query}`;
export const GET_SHOW_BY_ID_REQUEST = (id: string) => `shows/${id}`;

const useTVMaze = (
  query?: string | undefined
): [
  (query?: string | undefined) => void,
  { data: any; loading: boolean; error: any }
] => {
  const [data, setData] = useState<any | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const fetch = (fetchArg: string | undefined) => {
    if (fetchArg) {
      setLoading(true);
      setError(undefined);
      axios
        .get(`${config.TV_MAZE_BASE_URL}/${fetchArg}`)
        .then((response) => {
          setData(response);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    if (query) {
      fetch(query);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [
    useCallback(
      (queryOverride?: string | undefined) => {
        fetch(query || queryOverride);
      },
      [query]
    ),
    { data, loading, error },
  ];
};

export default useTVMaze;
