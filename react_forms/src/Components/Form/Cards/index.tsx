import { Component } from 'react';
import { CardState } from './../../../Pages/Form';

type CardsProps = { cards: CardState[] };

export default class Cards extends Component<CardsProps, unknown> {
  constructor(props: CardsProps) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.cards.map((card: CardState, index: number) => (
          <div key={index}>
            <img src={card.photo} alt={card.name}></img>
            <div>Name: {card.name}</div>
            <div>Surname: {card.surname}</div>
            <div>Date of birth: {card.birthday}</div>
            <div>Сountry: {card.country}</div>
            <div>Gender: {card.gender}</div>
            <input name="personal" type="checkbox" checked={card.personal} readOnly />
            <label htmlFor="personal">Agree to data processing</label>
            <input name="mail" type="checkbox" checked={card.mail} readOnly />
            <label htmlFor="mail">Send a copy by mail</label>
            <input name="call" type="checkbox" checked={card.call} readOnly />
            <label htmlFor="call">Call me back</label>
          </div>
        ))}
      </div>
    );
  }
}
