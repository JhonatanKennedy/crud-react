import { Fragment } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles";
import DarkTheme from "./Themes/DarkTheme";
import Table from "./Components/Table";

function App() {
  const teste = ["header1", "header2", "header3"];
  return (
    <Fragment>
      <ThemeProvider theme={DarkTheme}>
        <GlobalStyle />
        <Table headers={teste}></Table>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
