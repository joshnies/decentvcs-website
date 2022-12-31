import { Component, createSignal } from "solid-js";
import { Route, Routes } from "@solidjs/router";
import { createGlobalStyles, ThemeProvider } from "solid-styled-components";
import { Router } from "@solidjs/router";
import { Toaster } from "solid-toast";

import { lightTheme } from "./themes";
import HomePage from "./pages/HomePage";
import SupportPage from "./pages/SupportPage";

const App: Component = () => {
  const [theme] = createSignal<typeof lightTheme>(lightTheme);

  // Styles for applying current theme globally
  const GlobalStyles = createGlobalStyles`
    a {
      color: ${theme().colors.primary[500]};
    }
    a:hover {
      color: ${theme().colors.primary[700]};
    }
  `;

  return (
    <ThemeProvider theme={theme()}>
      <GlobalStyles />
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" component={HomePage} />
          <Route path="/support" component={SupportPage} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
