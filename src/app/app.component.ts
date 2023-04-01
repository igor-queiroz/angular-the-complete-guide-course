import { Component, OnInit } from '@angular/core';
import { Account, AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public accountsList: Account[] = [];

  constructor(private readonly accountService: AccountService) {}

  ngOnInit() {
    this.accountsList = this.accountService.accountsList;
  }
}
