import { NavLink } from 'react-router-dom';
import { Component } from 'react';
import style from './styles.module.css';

export default class Header extends Component {
  render() {
    return (
      <header className={style.header}>
        <NavLink to="/" className={({ isActive }) => (isActive ? style.activeLink : style.link)}>
          Home
        </NavLink>
        <NavLink
          to="/about_us"
          className={({ isActive }) => (isActive ? style.activeLink : style.link)}
        >
          About Us
        </NavLink>
      </header>
    );
  }
}
