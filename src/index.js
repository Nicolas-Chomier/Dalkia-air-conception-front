import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./context/userContext";
//Styles
import "./styles/index.scss";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Main application styles

let theme = createTheme();
theme.typography.h1 = {
  fontFamily: "Montserrat , Arial",
  color: "WhiteSmoke",
  fontSize: "4rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "8rem",
  },
};
theme.typography.h2 = {
  fontFamily: "Montserrat , Arial",
  color: "WhiteSmoke",
  fontSize: "3rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "6rem",
  },
};
theme.typography.h3 = {
  fontFamily: "Montserrat , Arial",
  color: "black",
  fontSize: "2.5rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },
};
theme.typography.h4 = {
  fontFamily: "Raleway, Arial",
  color: "White",
  fontSize: "1.2rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "1.5rem",
  },
};
theme.typography.body1 = {
  fontFamily: "Raleway, Arial",
  color: "White",
  fontSize: "1rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "1.3rem",
  },
};
theme.typography.body2 = {
  fontFamily: "Raleway, Arial",
  color: "LightGray",
  fontSize: "0.9rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "1rem",
  },
};
theme.typography.subtitle1 = {
  fontFamily: "Raleway, Arial",
  color: "black",
  fontSize: "1.2rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "1.5rem",
  },
};
theme.typography.subtitle2 = {
  fontFamily: "Raleway, Arial",
  color: "black",
  fontSize: "1.2rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "1.5rem",
  },
};

ReactDOM.render(
  <BrowserRouter>
    <UserContextProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </UserContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
