import { Injectable } from '@angular/core';

export interface Account {
  name?: string;
  status?: string;
}

export enum ACCOUNT_STATUS {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  UNKNOWN = 'UNKNOWN',
}

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private _accountsList: Account[] = [];

  public get accountsList(): Account[] {
    return this._accountsList;
  }

  public addAccount(account: Account) {
    this._accountsList.push(account);
  }

  public changeStatus(status: string) {}
}
