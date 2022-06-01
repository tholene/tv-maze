import SlowConnectionWarning from "./index";
import { act, render, screen } from "@testing-library/react";
import { ThemeProvider } from "@emotion/react";
import theme from "../../../theme";

describe("components::SlowConnectionWarning", () => {
  jest.useFakeTimers();

  it("should render nothing if not loading", () => {
    render(
      <ThemeProvider theme={theme}>
        <SlowConnectionWarning loading={false} threshold={1000} />
      </ThemeProvider>
    );

    expect(screen.queryByText("Working on it...")).toEqual(null);
  });

  it("should appear after a given threshold", () => {
    render(
      <ThemeProvider theme={theme}>
        <SlowConnectionWarning loading={true} threshold={1000} />
      </ThemeProvider>
    );

    expect(screen.queryByText("Working on it...")).toEqual(null);

    act(() => {
      jest.runOnlyPendingTimers();
    });

    screen.getByText("Working on it...");
  });

  it("should show additional messages after additional time", () => {
    render(
      <ThemeProvider theme={theme}>
        <SlowConnectionWarning loading={true} threshold={1000} />
      </ThemeProvider>
    );

    act(() => {
      jest.runOnlyPendingTimers();
    });

    screen.getByText("Working on it...");

    act(() => {
      jest.runOnlyPendingTimers();
    });

    screen.getByText("You might want to refresh the page...");
  });
});
