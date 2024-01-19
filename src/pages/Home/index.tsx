import { Component } from 'react';
import UserCards from '../../components/home/UserCards';
import SearchBar from '../../components/home/SearchBar';
import Header from '../../components/shared/Header';

export default class Home extends Component {
  render() {
    return (
      <div data-testid="homePage">
        <Header />
        <SearchBar />
        <UserCards />
      </div>
    );
  }
}
