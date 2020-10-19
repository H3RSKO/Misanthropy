import React from "react";
import ReactDOM from "react-dom";
import Index from "./Index";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from './Styling/AppStyle'
import CssBaseline from '@material-ui/core/CssBaseline';
import './Styling/App.css'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <div className="app">
      <Index />
    </div>
  </ThemeProvider>,
  document.getElementById("app")
);
