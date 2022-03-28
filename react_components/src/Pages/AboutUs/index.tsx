import { Component } from 'react';
import Header from './../../Components/Shared/Header';
import style from './styles.module.css';

export default class AboutUs extends Component {
  render() {
    return (
      <div data-testid="aboutPage">
        <Header />
        <h1 className={style.aboutUs}>AboutUs</h1>
      </div>
    );
  }
}
