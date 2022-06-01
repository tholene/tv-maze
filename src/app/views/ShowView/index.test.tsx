import {render, screen, waitForElementToBeRemoved,} from "@testing-library/react";
import ShowView from "./index";
import {ThemeProvider} from "@emotion/react";
import theme from "../../../theme";
import {MemoryRouter} from "react-router";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const show = {
  id: 66,
  url: "https://www.tvmaze.com/shows/66/the-big-bang-theory",
  name: "The Big Bang Theory",
  type: "Scripted",
  language: "English",
  genres: ["Comedy"],
  status: "Ended",
  runtime: 30,
  averageRuntime: 30,
  premiered: "2007-09-24",
  ended: "2019-05-16",
  officialSite: "http://www.cbs.com/shows/big_bang_theory/",
  schedule: {
    time: "20:00",
    days: ["Thursday"],
  },
  rating: {
    average: undefined,
  },
  weight: 98,
  network: {
    id: 2,
    name: "CBS",
    country: {
      name: "United States",
      code: "US",
      timezone: "America/New_York",
    },
    officialSite: "https://www.cbs.com/",
  },
  webChannel: null,
  dvdCountry: null,
  externals: {
    tvrage: 8511,
    thetvdb: 80379,
    imdb: "tt0898266",
  },
  image: {
    medium:
      "https://static.tvmaze.com/uploads/images/medium_portrait/173/433868.jpg",
    original:
      "https://static.tvmaze.com/uploads/images/original_untouched/173/433868.jpg",
  },
  summary:
    '<p><b>The Big Bang Theory</b> is a comedy about brilliant physicists, Leonard and Sheldon, who are the kind of "beautiful minds" that understand how the universe works. But none of that genius helps them interact with people, especially women. All this begins to change when a free-spirited beauty named Penny moves in next door. Sheldon, Leonard\'s roommate, is quite content spending his nights playing Klingon Boggle with their socially dysfunctional friends, fellow Cal Tech scientists Wolowitz and Koothrappali. However, Leonard sees in Penny a whole new universe of possibilities... including love.</p>',
  updated: 1616618140,
  _links: {
    self: {
      href: "https://api.tvmaze.com/shows/66",
    },
    previousepisode: {
      href: "https://api.tvmaze.com/episodes/1646220",
    },
  },
};

describe("views::ShowView", () => {
  beforeEach(() => {
    mockedAxios.get.mockResolvedValue({ data: show });
  });

  afterAll(() => {
    mockedAxios.get.mockClear();
  });

  it("should show a spinner while loading", async () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={["/show/66"]}>
          <ShowView />
        </MemoryRouter>
      </ThemeProvider>
    );

    await waitForElementToBeRemoved(screen.queryByTestId("loading"));
  });

  it("should fetch and display a specific show", async () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={["/show/66"]}>
          <ShowView />
        </MemoryRouter>
      </ThemeProvider>
    );

    await waitForElementToBeRemoved(screen.queryByTestId("loading"));

    screen.getByText("Genres: Comedy");
    screen.getByText("Premiered: 2007-09-24");
    screen.getByText("Ended: 2019-05-16");
    screen.getByText("Rating: N/A");
    screen.getByAltText("The Big Bang Theory");
  });

  it("should show error if no show found and provide a link to search view", async () => {
    mockedAxios.get.mockRejectedValueOnce("SERVER KAPUT");
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={["/show/bogus"]}>
          <ShowView />
        </MemoryRouter>
      </ThemeProvider>
    );

    await waitForElementToBeRemoved(screen.queryByTestId("loading"));

    screen.getByText("Something went wrong");

    screen.getByText("SERVER KAPUT");

    expect(screen.getByText("Back to search").getAttribute("href")).toEqual(
      "/"
    );
  });
});
