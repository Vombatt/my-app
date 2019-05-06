import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./header.scss"

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <NavLink className="header__link" activeClassName="header__link_active" to="/" exact={true}>Стартовая страница</NavLink>
        <NavLink className="header__link" activeClassName="header__link_active" to="/tictac">Крестики - нолики</NavLink>
        <NavLink className="header__link" activeClassName="header__link_active" to="/tour">Тур героев</NavLink>
      </div>
    );
  }
}
