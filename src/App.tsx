import { Component, createSignal } from "solid-js";
import { Route, Routes } from "@solidjs/router";
import { ThemeProvider } from "solid-styled-components";
import { Router } from "@solidjs/router";
import { Toaster } from "solid-toast";

import { lightTheme } from "./themes";
import HomePage from "./pages/HomePage";

const App: Component = () => {
  const [theme] = createSignal<typeof lightTheme>(lightTheme);

  return (
    <ThemeProvider theme={theme()}>
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
