import { Link } from 'react-router-dom';
import { Component } from 'react';
import style from './styles.module.css';

export default class NotFound extends Component {
  render() {
    return (
      <div className={style.container}>
        <div>
          <h1>Page not found</h1>
          <Link to="/" className={style.link}>
            Back to the main page
          </Link>
        </div>
      </div>
    );
  }
}
