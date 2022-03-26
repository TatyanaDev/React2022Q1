import { Component } from 'react';
import SearchBar from './../../Components/Home/SearchBar';
import Header from './../../Components/Shared/Header';

export default class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <SearchBar />
      </>
    );
  }
}
