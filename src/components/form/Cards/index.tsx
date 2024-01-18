import { Component } from 'react';
import { Card, CardsProps } from '../../../types';
import style from './styles.module.css';

export default class Cards extends Component<CardsProps, unknown> {
  constructor(props: CardsProps) {
    super(props);
  }

  render() {
    return (
      <div className={style.container}>
        {this.props.cards.map((card: Card, index: number) => (
          <div key={index} className={style.cardContainer}>
            <img src={card.photo} alt={card.name} className={style.photo} />
            <p>
              <span className={style.bold}>Name:</span>&nbsp;{card.name}
            </p>
            <p>
              <span className={style.bold}>Surname:</span>&nbsp;{card.surname}
            </p>
            <p>
              <span className={style.bold}>Date of birth:</span>&nbsp;
              {new Date(card.birthday).toLocaleDateString('ru-RU')}
            </p>
            <p>
              <span className={style.bold}>Country:</span>&nbsp;{card.country}
            </p>
            <p>
              <span className={style.bold}>Gender:</span>&nbsp;{card.gender}
            </p>
            &nbsp;
            <div>
              <input name="personal" type="checkbox" checked={card.personal} readOnly />
              &nbsp;
              <label htmlFor="personal">Agree to data processing</label>
            </div>
            <div>
              <input name="mail" type="checkbox" checked={card.mail} readOnly />
              &nbsp;
              <label htmlFor="mail">Send a copy by mail</label>
            </div>
            <div>
              <input name="call" type="checkbox" checked={card.call} readOnly />
              &nbsp;
              <label htmlFor="call">Call me back</label>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
