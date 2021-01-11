import { Injectable } from '@angular/core';
import {AccountStore} from '../state/account.store';
import {AccountQuery} from '../state/account.query';
import {initial} from '../state/initial.state';
import {Observable} from 'rxjs';
import {Account} from '../state/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  list$: Observable<Account[]>;
  active$: Observable<Account>;

  constructor(private readonly accountStore: AccountStore,
              private readonly accountQuery: AccountQuery) {
    //set the initial state and set first to active
    this.accountStore.set(initial);
    this.accountStore.setActive(1);

    this.list$ = this.accountQuery.selectAll();
    this.active$ = this.accountQuery.selectActive();
  }

  setActive(id: number): void {
    this.accountStore.setActive(id);
  }

  update(account: Account): void {
    this.accountStore.updateActive({...account});
    // this.accountStore.updateActive({fullName: 'Raff'});
  }
}
