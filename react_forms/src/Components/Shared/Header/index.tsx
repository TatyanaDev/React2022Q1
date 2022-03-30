import { NavLink } from 'react-router-dom';
import { Component } from 'react';
import style from './styles.module.css';

export default class Header extends Component {
  render() {
    return (
      <header className={style.header}>
        <NavLink
          to="/"
          data-testid="homeLink"
          className={({ isActive }) => (isActive ? style.activeLink : style.link)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about_us"
          data-testid="aboutLink"
          className={({ isActive }) => (isActive ? style.activeLink : style.link)}
        >
          About Us
        </NavLink>
        <NavLink
          to="/form"
          className={({ isActive }) => (isActive ? style.activeLink : style.link)}
        >
          Form
        </NavLink>
      </header>
    );
  }
}
