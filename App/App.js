import React from "react";
import ReactDOM from "react-dom";
import Index from "./Index";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from './Styling/AppStyle'
import CssBaseline from '@material-ui/core/CssBaseline';
import './Styling/App.css'
import {BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
    <CssBaseline />
    <div className="app">
      <Index />
    </div>
    </Router>
  </ThemeProvider>,
  document.getElementById("app")
);
