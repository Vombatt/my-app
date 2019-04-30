import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./header.scss"

export class Header extends Component {
  render() {
    return (
      <div className="main-header">
        <NavLink className="main-header-link" activeClassName="main-header-link-active" to="/" exact={true}>Стартовая страница</NavLink>
        <NavLink className="main-header-link" activeClassName="main-header-link-active" to="/tictac">Крестики - нолики</NavLink>
        <NavLink className="main-header-link" activeClassName="main-header-link-active" to="/tour">Тур героев</NavLink>
      </div>
    );
  }
}
