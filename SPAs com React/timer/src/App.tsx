import { ThemeProvider } from "styled-components";

import { defaultTheme } from "./example/styles/themes/default";
import { GlobalStyle } from "./example/styles/global";
import { Router } from "./components/Router";
import { BrowserRouter } from "react-router-dom";
import { CycleProvider } from "./contexts/CyclesContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CycleProvider>
          <Router />
        </CycleProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export { App };
