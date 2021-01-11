import {EntityStore, EntityState, StoreConfig, ActiveState} from '@datorama/akita';
import {Account} from './account.model';

export interface AccountState extends EntityState<Account, number>, ActiveState {}

@StoreConfig({name: 'account'})
export class AccountStore extends EntityStore<AccountState> {
  constructor() {
    super();
  }
}
