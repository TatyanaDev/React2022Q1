import { Component } from 'react';
import Header from './../../components/Shared/Header';
import Cards from './../../components/Form/Cards';
import Form from './../../components/Form/Form';

export type CardState = {
  name: string;
  surname: string;
  birthday: string;
  country: string;
  gender: string;
  personal: boolean;
  mail: boolean;
  call: boolean;
  photo: string;
};

type pagestate = {
  cards: CardState[];
};

export default class FormPage extends Component<unknown, pagestate> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  onSubmit = (card: CardState) => this.setState({ cards: [...this.state.cards, card] });

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
