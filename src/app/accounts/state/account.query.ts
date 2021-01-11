import {QueryEntity} from '@datorama/akita';
import {AccountState, AccountStore} from './account.store';
import {Injectable} from '@angular/core';

@Injectable()
export class AccountQuery extends QueryEntity<AccountState> {
  constructor(protected store: AccountStore) {
    super(store);
  }
}

