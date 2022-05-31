import React from "react";
import Divider from "../../components/Divider";
import Page from "../../components/Page";
import Section from "../../components/Section";
import Title from "../../components/Title";
import { useNavigate, useParams } from "react-router";
import useTVMaze, { GET_SHOW_BY_ID_REQUEST } from "../../hooks/useTVMaze";
import { propOr, pathOr } from "ramda";
import { parseShow } from "./etc/utils";
import { sanitize } from "dompurify";
import { Link } from "react-router-dom";

const ShowView = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [, { data, loading }] = useTVMaze(
    GET_SHOW_BY_ID_REQUEST(propOr(null, "showId", params))
  );

  const show = data ? parseShow(data) : null;

  return (
    <Page>
      <Title>{loading ? "Loading..." : propOr("", "name", show)}</Title>
      <Divider />
      <Link
        to={"/"}
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        &lt; Back
      </Link>
      <Section>
        <div
          dangerouslySetInnerHTML={{
            __html: sanitize(propOr("N/A", "summary", show)),
          }}
        />
        <img src={pathOr("", ["image", "original"], show)} />
      </Section>
    </Page>
  );
};

export default ShowView;
