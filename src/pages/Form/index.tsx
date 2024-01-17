import { Component } from 'react';
import Header from '../../components/shared/Header';
import Cards from '../../components/form/Cards';
import { Card, CardsProps } from '../../types';
import Form from '../../components/form/Form';

export default class FormPage extends Component<unknown, CardsProps> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  onSubmit = (card: Card) => this.setState({ cards: [...this.state.cards, card] });

  render() {
    return (
      <>
        <Header />
        <Form onSubmit={this.onSubmit} />
        <Cards cards={this.state.cards} />
      </>
    );
  }
}
