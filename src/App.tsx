import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "@emotion/styled";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import { routes } from "./routes";
import loadable from '@loadable/component';

const AppContainer = styled.div`
  font-family: "Helvetica", sans-serif;
  font-size: 16px;
  height: 100%;
  width: 100%;
`;

const LoadableView = loadable(
  ({view}: {view: string}) => import(`./app/views/${view}/index`)
);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Router>
        <Routes>
          {routes.map((route) => (
            <Route
              key={`view.${route.name}`}
              path={route.path}
              element={<LoadableView view={route.view} />}
            />
          ))}
          <Route path="*">
            Not found
          </Route>
        </Routes>
        </Router>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
