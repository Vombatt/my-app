import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/">Стартовая страница</Link>
        <Link to="/tictac">Крестики - нолики</Link>
        <Link to="/tour">Тур героев</Link>
      </div>
    );
  }
}
