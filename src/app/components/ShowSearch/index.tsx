import {
  ChangeEvent,
  KeyboardEventHandler,
  useCallback,
  useEffect,
  useState,
} from "react";
import Input from "../Input";
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
    searchParams.get(SEARCH_TERM_PARAM) || ""
  );
  const [getShows, { data }] = useTVMaze();

  const handleOnChange = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => setSearchTerm(evt.target.value),
    []
  );

  const handleOnKeyDown = useCallback(
    (evt) => {
      if (equals("Enter", propOr(undefined, "code", evt))) {
        getShows(GET_SHOWS_REQUEST(searchTerm));
        // remember query in URL to keep results on refresh
        if (searchTerm) {
          searchParams.set(SEARCH_TERM_PARAM, encodeURIComponent(searchTerm));
        } else {
          searchParams.delete(SEARCH_TERM_PARAM);
        }
        setSearchParams(searchParams);
      }
    },
    [searchTerm]
  ) as KeyboardEventHandler<HTMLInputElement>;

  // Get shows on mount if search query is present in URL
  useEffect(() => {
    if (searchTerm) {
      getShows(GET_SHOWS_REQUEST(searchTerm));
    }
  }, []);

  useEffect(() => {
    onChange(parseSearchResult(data) as Show[]);
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
