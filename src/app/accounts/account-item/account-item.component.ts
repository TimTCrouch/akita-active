import {Component, Input, OnInit} from '@angular/core';
import {Account} from '../state/account.model';
import {AccountService} from '../account-service/account.service';

@Component({
  selector: 'app-account-item',
  templateUrl: './account-item.component.html',
  styleUrls: ['./account-item.component.scss']
})
export class AccountItemComponent {
  @Input() account: Account;

  constructor(private readonly accountService: AccountService) { }

  selectAccount(): void {
    this.accountService.setActive(this.account.id);
  }
}
