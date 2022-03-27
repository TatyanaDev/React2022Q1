import { Component } from 'react';
import website from './../../../icons/web.svg';
import email from './../../../icons/email.svg';
import phone from './../../../icons/phone.svg';
import style from './styles.module.css';

type UserCardState = {
  id: number;
  photo: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};

const userСards: UserCardState[] = [
  {
    id: 1,
    photo: 'https://avatars.dicebear.com/v2/avataaars/Leanne%20Graham.svg?mood[]=happy',
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    phone: '1-770-736-8031 x56442',
    website: 'http://hildegard.org',
  },
  {
    id: 2,
    photo: 'https://avatars.dicebear.com/v2/avataaars/Ervin%20Howell.svg?mood[]=happy',
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    phone: '010-692-6593 x09125',
    website: 'http://anastasia.net',
  },
  {
    id: 3,
    photo: 'https://avatars.dicebear.com/v2/avataaars/Clementine%20Bauch.svg?mood[]=happy',
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    phone: '1-463-123-4447',
    website: 'http://ramiro.info',
  },
  {
    id: 4,
    photo: 'https://avatars.dicebear.com/v2/avataaars/Patricia%20Lebsack.svg?mood[]=happy',
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    phone: '493-170-9623 x156',
    website: 'http://kale.biz',
  },
  {
    id: 5,
    photo: 'https://avatars.dicebear.com/v2/avataaars/Chelsey%20Dietrich.svg?mood[]=happy',
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    phone: '(254)954-1289',
    website: 'http://demarco.info',
  },
  {
    id: 6,
    photo: 'https://avatars.dicebear.com/v2/avataaars/Mrs.%20Dennis%20Schulist.svg?mood[]=happy',
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    phone: '1-477-935-8478 x6430',
    website: 'http://ola.org',
  },
  {
    id: 7,
    photo: 'https://avatars.dicebear.com/v2/avataaars/Kurtis%20Weissnat.svg?mood[]=happy',
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    phone: '210.067.6132',
    website: 'http://elvis.io',
  },
  {
    id: 8,
    photo:
      'https://avatars.dicebear.com/v2/avataaars/Nicholas%20Runolfsdottir%20V.svg?mood[]=happy',
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    phone: '586.493.6943 x140',
    website: 'http://jacynthe.com',
  },
  {
    id: 9,
    photo: 'https://avatars.dicebear.com/v2/avataaars/Glenna%20Reichert.svg?mood[]=happy',
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    phone: '(775)976-6794 x41206',
    website: 'http://conrad.com',
  },
  {
    id: 10,
    photo: 'https://avatars.dicebear.com/v2/avataaars/Clementina%20DuBuque.svg?mood[]=happy',
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    phone: '024-648-3804',
    website: 'http://ambrose.net',
  },
];

export default class Cards extends Component {
  render() {
    return (
      <div className={style.container}>
        {userСards.map((userCard: UserCardState) => (
          <div key={userCard.id} className={style.cardContainer}>
            <img src={userCard.photo} alt={userCard.name} className={style.photo} />
            <h1>{userCard.name}</h1>
            <h2 className={style.username}>{userCard.username}</h2>
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
