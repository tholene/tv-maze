import React from "react";
import Divider from "../../components/Divider";
import Page from "../../components/Page";
import Section from "../../components/Section";
import Title from "../../components/Title";
import { useNavigate, useParams } from "react-router";
import useTVMaze, { GET_SHOW_BY_ID_REQUEST } from "../../hooks/useTVMaze";
import { join, pathOr, propOr } from "ramda";
import { parseShow } from "./etc/utils";
import { sanitize } from "dompurify";
import {
  BackLink,
  ShowDetails,
  ShowImage,
  ShowInformation,
  ShowSummary,
} from "./etc/style";
import { Show } from "../../interfaces/Show";
import Spinner from "../../components/Spinner";
import Centered from "../../components/Centered";

const DefaultStringValue = "N/A";

const ShowView = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [, { data, loading, error }] = useTVMaze(
    GET_SHOW_BY_ID_REQUEST(propOr(null, "showId", params))
  );

  if (loading) {
    return (
      <Page>
        <Spinner centered />
      </Page>
    );
  }

  const show = parseShow(data) as Show;

  const premiered = propOr(DefaultStringValue, "premiered", show) as string;
  const ended = propOr(DefaultStringValue, "ended", show) as string;
  const genres = join(
    ", ",
    propOr([DefaultStringValue], "genres", show)
  ) as string;
  const rating = pathOr(
    DefaultStringValue,
    ["rating", "average"],
    show
  ) as string;

  const showName = propOr(DefaultStringValue, "name", show) as string;
  const showImage = pathOr("", ["image", "original"], show) as string;

  const showSummary = sanitize(
    propOr(DefaultStringValue, "summary", show)
  ) as string;

  if (!loading && error) {
    return (
      <Page>
        <Centered>
          <Title>Something went wrong</Title>
        </Centered>
        <p>{error.toString()}</p>
        <BackLink to={"/"}>Back to search</BackLink>
      </Page>
    );
  }

  return (
    <Page>
      <Title>{loading ? "Loading..." : showName}</Title>
      <Divider />
      <BackLink
        to={"/"}
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        Back
      </BackLink>
      <Section>
        <ShowDetails>
          <ShowInformation>
            <span>Genres: {genres}</span>
            <span>Premiered: {premiered}</span>
            <span>Ended: {ended}</span>
            <span>
              Rating: {rating}
              {rating !== DefaultStringValue && <>&#9733;</>}
            </span>
          </ShowInformation>
          <ShowSummary
            dangerouslySetInnerHTML={{
              __html: showSummary,
            }}
          />
          <ShowImage src={showImage} alt={showName} />
        </ShowDetails>
      </Section>
    </Page>
  );
};

export default ShowView;
