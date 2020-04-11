import { Injectable } from '@angular/core';
import { StorageService } from 'apps/social-network/src/app/core/services/storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthStorageService {

  private token: string;
  private fullName: string;
  private userId: string;
  private readonly tokenKey = 'token';

  constructor(
    private storage: StorageService,
  ) {
  }

  clean(): void {
    this.fullName = this.token = undefined;
    this.storage.clear();
  }

  setToken(token: string): void {
    this.token = token;
    try {
      this.storage.store(this.tokenKey, token);
    }catch (e) {
      console.log(e);
    }
  }

  getToken(): string {
    return this.storage.retrieve(this.tokenKey);
  }

  setFullName(fullName: string): void {
    this.fullName = fullName;
  }

  getFullName = (): string => this.fullName;

  setUserId(userId: string): void {
    this.userId = userId;
  }

  getUserId = (): string => this.userId;
}
