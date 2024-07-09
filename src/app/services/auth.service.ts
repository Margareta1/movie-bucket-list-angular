import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private validUsername = 'username';
  private validPassword = 'password';

  constructor(private cookieService: CookieService) {}

  login(username: string, password: string): boolean {
    if (username === this.validUsername && password === this.validPassword) {
      const expireTime = new Date();
      expireTime.setTime(expireTime.getTime() + 1 * 60 * 60 * 1000);
      this.cookieService.set('isAuthenticated', 'true', {
        expires: expireTime,
      });
      return true;
    }
    return false;
  }

  logout(): void {
    this.cookieService.delete('isAuthenticated');
  }

  get isLoggedIn(): boolean {
    return this.cookieService.get('isAuthenticated') === 'true';
  }
}
