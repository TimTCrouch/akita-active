import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Account} from './state/account.model';
import {AccountService} from './account-service/account.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  accounts: Account[];

  constructor(private readonly accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.list$.subscribe(a => {
      this.accounts = a;
    });
  }

}
