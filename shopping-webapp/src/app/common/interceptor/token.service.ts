import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private token: string;

  constructor() {
  }

  getToken(): string {
    return this.token;
  }

  setToken(token: string) {
    this.token = token;
  }

  cleanToken() {
    this.token = '';
  }
}
