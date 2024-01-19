import { Component } from 'react';
import { CardsProps, User } from '../../../interfaces';
import style from './styles.module.css';

export default class Cards extends Component<CardsProps, unknown> {
  constructor(props: CardsProps) {
    super(props);
  }

  render() {
    return (
      <div className={style.container}>
        {this.props.users.map((user: User) => (
          <div key={user.id} className={style.cardContainer}>
            <img src={user.photo} alt={user.name} className={style.photo} />
            <p>
              <span className={style.bold}>Name:</span>&nbsp;{user.name}
            </p>
            <p>
              <span className={style.bold}>Surname:</span>&nbsp;{user.surname}
            </p>
            <p>
              <span className={style.bold}>Date of birth:</span>&nbsp;
              {new Date(user.birthday).toLocaleDateString('ru-RU')}
            </p>
            <p>
              <span className={style.bold}>Country:</span>&nbsp;{user.country}
            </p>
            <p>
              <span className={style.bold}>Gender:</span>&nbsp;{user.gender}
            </p>
            &nbsp;
            <div>
              <input
                name="personal"
                type="checkbox"
                checked={user.additionalInformation.isAgree}
                readOnly
              />
              &nbsp;
              <label htmlFor="personal">Agree to data processing</label>
            </div>
            <div>
              <input
                name="mail"
                type="checkbox"
                checked={user.additionalInformation.isSendCopy}
                readOnly
              />
              &nbsp;
              <label htmlFor="mail">Send a copy by mail</label>
            </div>
            <div>
              <input
                name="call"
                type="checkbox"
                checked={user.additionalInformation.isCallBack}
                readOnly
              />
              &nbsp;
              <label htmlFor="call">Call me back</label>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
