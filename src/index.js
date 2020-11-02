import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';

import "assets/scss/material-kit-react.scss?v=1.9.0";
import 'video-react/dist/video-react.css';

// pages for this product
import LandingPage from "views/LandingPage/LandingPage.js";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#5a635b",
    },
    secondary: {
      main: "#d1c6b4",
    },
  },
});

var hist = createBrowserHistory();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router history={hist}>
      <Switch>
        <Route path="/" component={LandingPage} />
      </Switch>
    </Router>
  </ThemeProvider>,
  document.getElementById("root")
);
