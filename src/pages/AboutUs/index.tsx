import { Component } from 'react';
import Header from '../../components/shared/Header';
import style from './styles.module.css';

export default class AboutUs extends Component {
  render() {
    return (
      <div data-testid="aboutPage">
        <Header />
        <h1 className={style.aboutUs}>About_Us</h1>
      </div>
    );
  }
}
