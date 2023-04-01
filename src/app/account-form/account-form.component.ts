import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AccountService, ACCOUNT_STATUS } from '../account.service';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss'],
})
export class AccountFormComponent implements OnInit {
  @ViewChild('account_name') account_name?: ElementRef<HTMLInputElement>;
  @ViewChild('account_status') account_status?: ElementRef<HTMLSelectElement>;

  constructor(private readonly accountService: AccountService) {}

  ngOnInit() {}

  public addAccount() {
    this.accountService.addAccount({
      name: this.account_name?.nativeElement.value,
      status: this.account_status?.nativeElement.value as ACCOUNT_STATUS,
    });
  }
}
