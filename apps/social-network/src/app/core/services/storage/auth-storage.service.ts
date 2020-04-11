import { Injectable } from '@angular/core';
import { User } from 'apps/social-network/src/app/core/models/user.model';
import { StorageService } from 'apps/social-network/src/app/core/services/storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthStorageService {

  private _accessToken: string;
  private _user: User;
  private readonly tokenKey = 'token';
  private readonly userKey = 'user';

  constructor(
    private storage: StorageService,
  ) {
  }

  clean(): void {
    this.user = this.accessToken = undefined;
    this.storage.clear();
  }

  get accessToken(): string {
    if(!this._accessToken) {
      return this.storage.retrieve(this.tokenKey);
    } else {
      return this._accessToken;
    }
  }

  set accessToken(value: string) {
    this._accessToken = value;
    this.storage.store(this.tokenKey, value);
  }

  get user(): User {
    if(!this._accessToken) {
      return JSON.parse(this.storage.retrieve(this.userKey));
    } else {
      return this._user;
    }
  }

  set user(value: User) {
    this._user = value;
    this.storage.store(this.userKey, JSON.stringify(value));
  }
}
