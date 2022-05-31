import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import styled from "@emotion/styled";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import ShowsView from "./app/views/ShowsView";
import ShowView from "./app/views/ShowView";

const AppContainer = styled.div`
  font-family: "Helvetica", sans-serif;
  font-size: 16px;
  height: 100%;
  width: 100%;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Router>
          <Routes>
            <Route path={"/"} element={<ShowsView />} />
            <Route path={"/show/:showId"} element={<ShowView />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
