import { Component, createSignal } from "solid-js";
import { Route, Routes } from "@solidjs/router";
import { createGlobalStyles, ThemeProvider } from "solid-styled-components";
import { Router } from "@solidjs/router";
import { Toaster } from "solid-toast";

import { lightTheme } from "./themes";
import HomePage from "./pages/HomePage";

const App: Component = () => {
  const [theme] = createSignal<typeof lightTheme>(lightTheme);

  // Styles for applying current theme globally
  const GlobalStyles = createGlobalStyles`
    a:hover {
      color: ${theme().colors.primary[500]};
    }
  `;

  return (
    <ThemeProvider theme={theme()}>
      <GlobalStyles />
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" component={HomePage} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;