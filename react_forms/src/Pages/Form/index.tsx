import { Component } from 'react';
import Header from './../../Components/Shared/Header';
import Form from './../../Components/Form/Form';

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

type PageState = {
  cards: CardState[];
};

export default class FormPage extends Component<unknown, PageState> {
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
        <Form cards={this.state.cards} onSubmit={this.onSubmit} />
      </>
    );
  }
}
