import React, { useState } from "react";
import Centered from "../../components/Centered";
import Divider from "../../components/Divider";
import Page from "../../components/Page";
import Section from "../../components/Section";
import Title from "../../components/Title";

import ShowSearch from "./ShowSearch";
import ShowList from "./ShowList";

import { Show } from "../../interfaces/Show";

const ShowsView = () => {
  const [shows, setShows] = useState<Show[]>([]);

  return (
    <Page>
      <Title>Shows</Title>
      <Divider />
      <Section>
        <Centered>
          <ShowSearch onChange={setShows} />
        </Centered>
      </Section>
      <Section>
        <ShowList shows={shows} />
      </Section>
    </Page>
  );
};

export default ShowsView;
