import { Link } from 'react-router-dom';
import { Component } from 'react';
import style from './styles.module.css';

export default class Header extends Component {
  render() {
    return (
      <header className={style.header}>
        <Link to="/" className={style.link}>
          Home
        </Link>
        <Link to="/about_us" className={style.link}>
          About Us
        </Link>
      </header>
    );
  }
}
