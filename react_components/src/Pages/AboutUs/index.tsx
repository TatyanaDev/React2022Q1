import { Component } from 'react';
import Header from './../../Components/Shared/Header';
import style from './styles.module.css';

export default class AboutUs extends Component {
  render() {
    return (
      <>
        <Header />
        <h1 className={style.aboutUs}>About Us</h1>
      </>
    );
  }
}
