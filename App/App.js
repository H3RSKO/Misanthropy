import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import Index from "./Index";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from './Styling/App'
import CssBaseline from '@material-ui/core/CssBaseline';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <div className="app">
      <Index />
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  </ThemeProvider>,
  document.getElementById("app")
);
