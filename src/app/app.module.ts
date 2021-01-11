import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';
import { AccountsComponent } from './accounts/accounts.component';
import {AccountStore} from './accounts/state/account.store';
import {AccountQuery} from './accounts/state/account.query';
import { AccountItemComponent } from './accounts/account-item/account-item.component';
import { AccountEditComponent } from './accounts/account-edit/account-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    AccountItemComponent,
    AccountEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    environment.production ? [] : AkitaNgDevtools.forRoot()
  ],
  providers: [AccountStore, AccountQuery],
  bootstrap: [AppComponent]
})
export class AppModule { }
