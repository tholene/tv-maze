import {
  ChangeEvent,
  KeyboardEventHandler,
  useCallback,
  useEffect,
  useState,
} from "react";
import Input from "../../components/Input";
import { useSearchParams } from "react-router-dom";
import useTVMaze, { GET_SHOWS_REQUEST } from "../../hooks/useTVMaze";
import { ShowSearchWrapper } from "./etc/style";
import { Show } from "../../interfaces/Show";
import { parseSearchResult } from "./etc/utils";

import { equals, propOr } from "ramda";

const SEARCH_TERM_PARAM = "q";

const ShowSearch = ({ onChange }: { onChange: (shows: Show[]) => void }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(
    searchParams.has(SEARCH_TERM_PARAM)
      ? decodeURIComponent(searchParams.get(SEARCH_TERM_PARAM) || "")
      : ""
  );
  const [getShows, { data }] = useTVMaze();

  const handleOnChange = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(evt.target.value);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleOnKeyDown = useCallback(
    (evt) => {
      if (equals("Enter", propOr(undefined, "code", evt))) {
        const trimmedSearchTerm = searchTerm.trim();
        getShows(GET_SHOWS_REQUEST(trimmedSearchTerm));
        // remember query in URL to keep results on refresh
        if (searchTerm) {
          searchParams.set(
            SEARCH_TERM_PARAM,
            encodeURIComponent(trimmedSearchTerm)
          );
        } else {
          searchParams.delete(SEARCH_TERM_PARAM);
        }
        setSearchParams(searchParams);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchTerm]
  ) as KeyboardEventHandler<HTMLInputElement>;

  // Get shows on mount if search query is present in URL
  useEffect(() => {
    if (searchTerm) {
      getShows(GET_SHOWS_REQUEST(searchTerm));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    onChange(parseSearchResult(data) as Show[]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <ShowSearchWrapper>
      <Input
        placeholder={"Search shows"}
        value={searchTerm}
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
      />
    </ShowSearchWrapper>
  );
};

export default ShowSearch;
