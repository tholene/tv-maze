import { fireEvent, render, screen } from "@testing-library/react";
import ShowsView from "./index";
import { ThemeProvider } from "@emotion/react";
import theme from "../../../theme";
import { MemoryRouter } from "react-router";
import axios from "axios";
import { map, prop } from "ramda";

import { BrowserRouter } from "react-router-dom";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const shows = [
  {
    score: 0.8786396,
    show: {
      id: 3616,
      url: "https://www.tvmaze.com/shows/3616/matrix",
      name: "Matrix",
      type: "Scripted",
      language: "English",
      genres: ["Drama"],
      status: "Ended",
      runtime: 60,
      averageRuntime: 60,
      premiered: "1993-03-01",
      ended: "1993-07-22",
      officialSite: null,
      schedule: {
        time: "22:00",
        days: [],
      },
      rating: {
        average: null,
      },
      weight: 56,
      network: {
        id: 30,
        name: "USA Network",
        country: {
          name: "United States",
          code: "US",
          timezone: "America/New_York",
        },
        officialSite: null,
      },
      webChannel: null,
      dvdCountry: null,
      externals: {
        tvrage: 4393,
        thetvdb: 76258,
        imdb: "tt0106062",
      },
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/302/755425.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/302/755425.jpg",
      },
      summary:
        "<p>Steven Matrix is a freelance hitman who will kill anyone for a price. But when another assassin puts a bullet through his head, Matrix finds himself waiting to enter the Other Place for his sins. However, an elderly man sees something in Matrix and sends him back to Earth. Now Matrix must redeem his sins by using his formerly murderous skills to help others. Helping him are representatives of the City In Between, who can appear as anything from skateboarders to nuns to accountants.</p>",
      updated: 1617554480,
      _links: {
        self: {
          href: "https://api.tvmaze.com/shows/3616",
        },
        previousepisode: {
          href: "https://api.tvmaze.com/episodes/234506",
        },
      },
    },
  },
  {
    score: 0.6855,
    show: {
      id: 2027,
      url: "https://www.tvmaze.com/shows/2027/threat-matrix",
      name: "Threat Matrix",
      type: "Scripted",
      language: "English",
      genres: ["Drama", "Action", "Crime"],
      status: "Ended",
      runtime: 60,
      averageRuntime: 60,
      premiered: "2003-09-18",
      ended: "2004-01-29",
      officialSite: "http://abc.go.com/primetime/threatmatrix/",
      schedule: {
        time: "20:00",
        days: ["Thursday"],
      },
      rating: {
        average: null,
      },
      weight: 82,
      network: {
        id: 3,
        name: "ABC",
        country: {
          name: "United States",
          code: "US",
          timezone: "America/New_York",
        },
        officialSite: "https://abc.com/",
      },
      webChannel: null,
      dvdCountry: null,
      externals: {
        tvrage: 6343,
        thetvdb: 72102,
        imdb: "tt0364888",
      },
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/11/28296.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/11/28296.jpg",
      },
      summary:
        "<p><b>Threat Matrix</b> is a one-hour drama about a highly specialized, elite task force created to respond to the Threat Matrix report, a document that is presented to the President every morning, identifying the current greatest threats to U.S. security. The team's mission is to keep the country safe from international and domestic threats, using their combined expertise and cutting-edge technology to help them fight the many faces of terror and enemies determined to destroy our way of life. Taking audiences behind the headlines and into the world of homeland security, Threat Matrix dramatizes what we are doing in the world of homeland security, why we are doing it and whether or not it is working.</p><p>The leader of this unit is Special Agent John Kilmer. This former FBI agent has White House authorization to call upon the technical skills, firepower and the specialist agents of the FBI, CIA and NSA, among others. Kilmer reports to Colonel Roger Atkins, the operations liaison to the President. Kilmer's ex-wife, Special Agent Frankie Ellroy-Kilmer, is a highly trained interrogation expert and 'profiler' whose skills allow her to crack the most hardened enemies. The rest of Kilmer's team includes Mo, the Egyptian-American former CIA operative; Lia \"Lark\" Larkin, a former FBI forensics specialist; Tim Serrano, a DEA agent from Miami; and Jelani, an African-American computer genius who intercepts phone, fax and radio signals from around the world and supports the team with the latest NSA technology.</p>",
      updated: 1620140619,
      _links: {
        self: {
          href: "https://api.tvmaze.com/shows/2027",
        },
        previousepisode: {
          href: "https://api.tvmaze.com/episodes/162177",
        },
      },
    },
  },
  {
    score: 0.41961616,
    show: {
      id: 7903,
      url: "https://www.tvmaze.com/shows/7903/martin",
      name: "Martin",
      type: "Scripted",
      language: "English",
      genres: ["Drama", "Comedy"],
      status: "Ended",
      runtime: 25,
      averageRuntime: 25,
      premiered: "1992-08-27",
      ended: "1997-05-01",
      officialSite: null,
      schedule: {
        time: "",
        days: [],
      },
      rating: {
        average: 7,
      },
      weight: 76,
      network: {
        id: 4,
        name: "FOX",
        country: {
          name: "United States",
          code: "US",
          timezone: "America/New_York",
        },
        officialSite: "https://www.fox.com/",
      },
      webChannel: null,
      dvdCountry: null,
      externals: {
        tvrage: null,
        thetvdb: 75725,
        imdb: "tt0103488",
      },
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/28/72341.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/28/72341.jpg",
      },
      summary:
        "<p><b>Martin</b> is a sassy sitcom centering on a radio-and-television personality named Martin Payne. The series focuses on Martin's romantic relationship with girlfriend Gina Waters, his job changes from a radio personality to a television personality, and the variety of friends Martin hangs out with along the way: the loud-mouthed and sassy Pam James and his best friends Tommy Strong and Cole Brown. Star, Martin Lawrence, also portrays of host of wild characters on the show. His neighbor Sheneneh; his mother Mama Payne; Otis the security guard; Jerome the gold-toothed player; Roscoe the snot-nosed kid who's always looking for a leg up; Bob, the white guy, King-Beef, Elroy, and many more. Martin is the center of attention, as each episode takes you from one hilarious circumstance to another. Hijinks, laughter, quick-witted banter, and lotsa love, make this series one to last forever.</p>",
      updated: 1628021413,
      _links: {
        self: {
          href: "https://api.tvmaze.com/shows/7903",
        },
        previousepisode: {
          href: "https://api.tvmaze.com/episodes/439372",
        },
      },
    },
  },
];

const showsToText = async () => {
  const foundShows = await screen.findAllByTestId("show");
  return map(prop("textContent"), foundShows);
};

const showsToHrefs = async () => {
  const foundShows = await screen.findAllByTestId("show");
  return map((show) => show.getAttribute("href"), foundShows);
};

describe("views::ShowsView", () => {
  beforeEach(() => {
    mockedAxios.get.mockResolvedValue({ data: shows });
  });

  afterAll(() => {
    mockedAxios.get.mockClear();
  });

  it("should fetch and display shows", async () => {
    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ShowsView />
        </BrowserRouter>
      </ThemeProvider>
    );

    fireEvent.change(
      screen.getByPlaceholderText("Search for shows... (ENTER to search)"),
      {
        target: { value: "Matrix" },
      }
    );

    fireEvent.keyDown(
      screen.getByPlaceholderText("Search for shows... (ENTER to search)"),
      {
        code: "Enter",
      }
    );

    expect(mockedAxios.get).toHaveBeenCalledWith(
      "https://api.tvmaze.com/search/shows?q=Matrix"
    );

    expect(await showsToText()).toEqual(["Matrix", "Threat Matrix", "Martin"]);
  });

  it("should remember the search term", async () => {
    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ShowsView />
        </BrowserRouter>
      </ThemeProvider>
    );

    fireEvent.change(
      screen.getByPlaceholderText("Search for shows... (ENTER to search)"),
      {
        target: { value: "Matrix" },
      }
    );

    fireEvent.keyDown(
      screen.getByPlaceholderText("Search for shows... (ENTER to search)"),
      {
        code: "Enter",
      }
    );

    expect(await showsToText()).toEqual(["Matrix", "Threat Matrix", "Martin"]);

    expect(window.location.search).toEqual("?q=Matrix");
  });

  it("should fetch shows on init if search param is present", async () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={["/?q=Matrix%202"]}>
          <ShowsView />
        </MemoryRouter>
      </ThemeProvider>
    );

    expect(mockedAxios.get).toHaveBeenCalledWith(
      "https://api.tvmaze.com/search/shows?q=Matrix 2"
    );

    expect(await showsToText()).toEqual(["Matrix", "Threat Matrix", "Martin"]);
  });

  it("should link each show to its detail view", async () => {
    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ShowsView />
        </BrowserRouter>
      </ThemeProvider>
    );

    fireEvent.change(
      screen.getByPlaceholderText("Search for shows... (ENTER to search)"),
      {
        target: { value: "Matrix" },
      }
    );

    fireEvent.keyDown(
      screen.getByPlaceholderText("Search for shows... (ENTER to search)"),
      {
        code: "Enter",
      }
    );

    expect(await showsToHrefs()).toEqual([
      "/show/3616",
      "/show/2027",
      "/show/7903",
    ]);
  });
});
