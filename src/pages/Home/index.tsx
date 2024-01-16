import { Component } from 'react';
import SearchBar from './../../components/Home/SearchBar';
import Header from './../../components/Shared/Header';
import Cards from './../../components/Home/Cards';

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
