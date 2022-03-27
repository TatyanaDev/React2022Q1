import { Component } from 'react';
import SearchBar from './../../Components/Home/SearchBar';
import Header from './../../Components/Shared/Header';
import Cards from './../../Components/Home/Cards';

export default class Home extends Component<unknown> {
  render() {
    return (
      <>
        <Header />
        <SearchBar />
        <Cards />
      </>
    );
  }
}
