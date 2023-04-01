import { Component, Input } from '@angular/core';
import { ACCOUNT_STATUS, Account } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent {
  @Input() account?: Account;

  public changeStatus(status: string) {
    this.account!.status = status;
  }
}
