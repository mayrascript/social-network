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

  logout() {
    this.authStorageService.clean();
  }

  private saveUserInfo(res: any) {
    if (res.accessToken) {
      this.saveToken(res.accessToken);
    }

    if (res.user) {
      this.saveUserData(res.user);
    }
  }

  private saveToken(accessToken: string) {
    this.authStorageService.accessToken = accessToken;
  }

  private saveUserData(user: User) {
    this.authStorageService.user = user;
  }
}
