import { ThemeProvider } from "styled-components";
import { Button } from "./example/components/Button";
import { defaultTheme } from "./example/styles/themes/default";
import { GlobalStyle } from "./example/styles/global";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button />
      <Button variant="danger" />
      <Button variant="secondary" />
      <Button variant="success" />

      <GlobalStyle />
    </ThemeProvider>
  );
}

export { App };
