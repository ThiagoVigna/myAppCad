import { tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthResponse } from '../auth/auth-response';

@Injectable({
  providedIn: 'root'
})

export class ConectService {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  API_URL = 'http://desafiodev.fsbr.com.br/api/';
  // eslint-disable-next-line max-len
  token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJuYW1lIjoiRGV2IFRlc3RlciJ9.NqpLPdG-Vqvo2yq1aNivHfaM_o1iBIlL5jkrubdYYqo';
  isLoggedIn = false;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  AuthToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJuYW1lIjoiRGV2IFRlc3RlciJ9.NqpLPdG-Vqvo2yq1aNivHfaM_o1iBIlL5jkrubdYYqo';

  constructor(public http: HttpClient) {
    this.isLoggedIn = false;
    this.AuthToken = null;
  }
  storeUserCredentials(token: string) {
    window.localStorage.setItem('token', token);
    this.useCredentials(token);
  }

  useCredentials(token: string) {
    this.isLoggedIn = true;
    this.AuthToken = token;
  }

  loadUserCredentials() {
    const token = window.localStorage.getItem('token');
    this.useCredentials(token);
  }

  // Destroy Authentication of User
  destroyUserCredentials() {
      this.isLoggedIn = false;
      this.AuthToken = null;
      window.localStorage.clear();
  }

  createAuthorization(headers: Headers) {
    headers.append('Authorization', window.localStorage.getItem('token'));
  }

  getHeader(){
    const headers = {
    headers: new HttpHeaders(this.token)
    };
    return headers;
    }
//

 // createAccount() {
  //  return this.http.post(this.API_URL + 'cadastramentos', this.token);
 // }

  listUser() {
    return this.http.get(this.API_URL + 'cadastramentos?id=0&nome&cidade=&estado', this.getHeader());
  }

  listState() {
    return this.http.get(this.API_URL + ' estados?id=0&estado');
  }
}
