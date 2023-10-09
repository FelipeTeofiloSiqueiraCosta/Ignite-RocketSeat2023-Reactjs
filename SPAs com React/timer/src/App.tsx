import { ThemeProvider } from "styled-components";
import { Button } from "./example/components/Button";
import { defaultTheme } from "./example/styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button />
      <Button variant="danger" />
      <Button variant="secondary" />
      <Button variant="success" />
    </ThemeProvider>
  );
}

export { App };
