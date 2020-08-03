import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Home from "../routes/Home";
import NavBar from "./NavBar";
import Login from "../routes/Login";
import Upload from "../routes/Upload";
import Detail from "../routes/Detail";

const GlobalStyle = createGlobalStyle`
  body {
    color: #ffffff;
    background-color: #000000;
    font-family: Noto Sans KR;
  }
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/upload" component={Upload} />
        <Route exact path="/detail/:id" component={Detail} />
      </Switch>
    </Router>
  );
}

export default App;
