import {Account} from './account.model';

const account1: Account = {
  id: 1,
  fullName: 'Howard Phillips',
  balance: 127.43,
  address: '1883 Westward Drive',
  city: 'Chattanooga',
  state: 'TN',
  zip: '37302'
};

const account2: Account = {
  id: 2,
  fullName: 'Susan Winds',
  balance: 289.71,
  address: '73 Pear Road',
  city: 'Conroe',
  state: 'TX',
  zip: '77301'
};

export const initial = [
  account1,
  account2
];
