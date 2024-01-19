import { ChangeEvent, FormEvent, LegacyRef } from 'react';

export interface UserCard {
  id: number;
  photo: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export interface LocalStorage {
  [key: string]: string;
}

export interface SearchBarState {
  value: string;
}

export interface AdditionalInformation {
  isAgree: boolean;
  isSendCopy: boolean;
  isCallBack: boolean;
}

export interface User {
  id: number;
  name: string;
  surname: string;
  birthday: string;
  country: string;
  gender: string;
  additionalInformation: AdditionalInformation;
  photo: string;
}

export interface CardsProps {
  users: User[];
}

interface Form {
  user: User;
  errors: {
    name: string;
    surname: string;
    birthday: string;
    country: string;
    gender: string;
    additionalInformation: string;
    photo: string;
  };
  isMessage: boolean;
}

export interface FormProps extends Form {
  handleInputChange: (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => void;
  handleSubmit: (event: FormEvent) => void;
  photoInputRef: LegacyRef<HTMLInputElement> | undefined;
}

export interface FormState extends Form {
  users: User[];
}
