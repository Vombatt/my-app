import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Game } from "./tic-tac-toe/game";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./home/home";
import { Header } from "./header/header";
import { TourOfHeroesMain } from "./tour-of-heroes/tour-main";

ReactDOM.render(
  <Router>
    <Header />
    <Route exact path="/" component={Home} />
    <Route path="/tictac" component={Game} />
    <Route path="/tour" component={TourOfHeroesMain} />
  </Router>,
  document.getElementById("root")
);
