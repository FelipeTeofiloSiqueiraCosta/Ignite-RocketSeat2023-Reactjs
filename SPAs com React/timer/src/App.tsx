import { ThemeProvider } from "styled-components";

import { defaultTheme } from "./example/styles/themes/default";
import { GlobalStyle } from "./example/styles/global";
import { Router } from "./components/Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export { App };
