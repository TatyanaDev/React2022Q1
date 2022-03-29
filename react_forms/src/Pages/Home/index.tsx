import { Component } from 'react';
import SearchBar from './../../Components/Home/SearchBar';
import Header from './../../Components/Shared/Header';
import Cards from './../../Components/Home/Cards';

export default class Home extends Component<unknown> {
  render() {
    return (
      <div data-testid="homePage">
        <Header />
        <SearchBar />
        <Cards />
      </div>
    );
  }
}
