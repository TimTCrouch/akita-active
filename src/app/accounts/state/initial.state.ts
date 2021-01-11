import {Account} from './account.model';

const account1 = new Account();
account1.id = 1;
account1.fullName = "Mark Yerris";
account1.balance = 128.43;
account1.address = "14 West Ave";
account1.city = "Conroe";
account1.state = "TX";
account1.zip = "77301";

const account2 = new Account();
account2.id = 2;
account2.fullName = "Kelly Harris";
account2.balance = 213.87;
account2.address = "288 Standiford Gap";
account2.city = "Chattanooga";
account2.state = "TN";
account2.zip = "37340";

const account3 = new Account();
account3.id = 3;
account3.fullName = "Hanno Galder";
account3.balance = 319.14;
account3.address = "89 Avenue M";
account3.city = "Houston";
account3.state = "TX";
account3.zip = "77126";

export const initial = [
  account1,
  account2,
  account3
];
