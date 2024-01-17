import { NavLink } from 'react-router-dom';
import { Component } from 'react';
import style from './styles.module.css';

export default class Header extends Component {
  className = ({ isActive }: { isActive: boolean }) => (isActive ? style.activeLink : style.link);

  render() {
    return (
      <header className={style.header}>
        <NavLink to="/" data-testid="homeLink" className={this.className}>
          Home
        </NavLink>
        <NavLink to="/about_us" data-testid="aboutLink" className={this.className}>
          About Us
        </NavLink>
        <NavLink to="/form" className={this.className}>
          Form
        </NavLink>
      </header>
    );
  }
}
