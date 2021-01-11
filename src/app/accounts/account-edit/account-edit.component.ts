import { Component, OnInit } from '@angular/core';
import {Account} from '../state/account.model';
import {AccountService} from '../account-service/account.service';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.scss']
})
export class AccountEditComponent implements OnInit {
  account: Account = new Account();

  constructor(private readonly accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.active$.subscribe(acc => {
      this.account = {...acc};
    });
  }

  save(): void {
    this.accountService.update(this.account);
  }

}
