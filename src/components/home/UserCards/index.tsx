import { Component } from 'react';
import { userCards } from '../../../constant/userCards';
import website from './../../../icons/website.svg';
import email from './../../../icons/email.svg';
import phone from './../../../icons/phone.svg';
import { UserCard } from '../../../interfaces';
import style from './styles.module.css';

export default class UserCards extends Component {
  render() {
    return (
      <div className={style.container}>
        {userCards.map((userCard: UserCard) => (
          <div key={userCard.id} className={style.cardContainer} data-testid="userCards">
            <img src={userCard.photo} alt={userCard.name} className={style.photo} />
            <h1>{userCard.name}</h1>
            <h2 className={style.username}>Nickname: {userCard.username}</h2>
            <div className={style.contactContainer}>
              <a href={`mailto:${userCard.email}`} className={style.link}>
                <img src={email} alt="email" />
                <span className={style.contact}>{userCard.email}</span>
              </a>
              <a href={`tel:${userCard.phone}`} className={style.link}>
                <img src={phone} alt="phone" />
                <span className={style.contact}>{userCard.phone}</span>
              </a>
              <a href={userCard.website} target="_blank" rel="noreferrer" className={style.link}>
                <img src={website} alt="website" />
                <span className={style.contact}>{userCard.website}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
