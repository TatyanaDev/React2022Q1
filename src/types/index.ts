export type Card = {
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

export type UserCard = {
  id: number;
  photo: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};

export type FormProps = {
  onSubmit: (card: Card) => void;
};

export type FormState = {
  isNameValid: boolean;
  isSurnameValid: boolean;
  isBirthdayValid: boolean;
  isCountryValid: boolean;
  isGenderValid: boolean;
  isCheckboxValid: boolean;
  isPhotoValid: boolean;
  isActiveButton: boolean;
  isSend: boolean;
  isMessage: boolean;
};

export type CardsProps = {
  cards: Card[];
};

export type LocalStorage = {
  [key: string]: string;
};

export type SearchBarState = {
  value: string;
};
