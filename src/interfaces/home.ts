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
