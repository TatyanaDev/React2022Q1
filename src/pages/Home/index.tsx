import { Component } from 'react';
import SearchBar from '../../components/home/SearchBar';
import Header from '../../components/shared/Header';
import Cards from '../../components/home/Cards';

export default class Home extends Component {
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
