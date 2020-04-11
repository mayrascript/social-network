import { Injectable } from '@angular/core';
import { User } from 'apps/social-network/src/app/core/models/user.model';
import { ApiService } from 'apps/social-network/src/app/core/services/api/api.service';
import { AuthStorageService } from 'apps/social-network/src/app/core/services/storage/auth-storage.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly endpoint = '/auth';

  constructor(private http: ApiService,
              private authStorageService: AuthStorageService) { }

  login(email: string, password: string) {
    const body = {
      email,
      password,
    };

    return this.http.post(`${this.endpoint}/login`, body)
      .pipe(
        map((res) => {
          this.saveUserInfo(res);
        }),
      );
  }

  register(user: Partial<User>) {
    return this.http.post(`${this.endpoint}/register`, user);
  }

  private saveUserInfo(res: any) {
    if (res.token) {
      this.saveToken(res.token);
    }

    if (res.user) {
      this.saveUserData(res.user);
    }
  }

  private saveToken(token: string) {
    this.authStorageService.setToken(token);
  }

  private saveUserData(user: User) {
    if (user._id) {
      this.authStorageService.setUserId(user._id);
    }

    if (user.firstName && user.lastName) {
      this.authStorageService.setFullName(`${user.firstName} ${user.lastName}`);
    }
  }
}
