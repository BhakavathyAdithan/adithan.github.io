import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private http: Http, private router: Router) { }

  login(credentials) {
    console.log('Inside Auth Service');
    return this.http.post('/api/authenticate', JSON.stringify(credentials)).map(
      response => {
        const result = response.json();
        if (result && result.token) {
          localStorage.setItem('token', result.token);
          return true;
        }
        return false;
      }
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    return tokenNotExpired();
    // let jwtHelper=new JwtHelper();
    // let token=localStorage.getItem('token');

    // if(!token)
    //   return false;

    // let expirationDate=jwtHelper.getTokenExpirationDate(token);
    // let tokenExpired=jwtHelper.isTokenExpired(token);
    // console.log('Expiration Date',expirationDate);
    // console.log('ExpiredToken',tokenExpired);

    // return !tokenExpired;
  }

  get currentUser() {
    const token = localStorage.getItem('token');

    if (!token) {
      return null;
    }

    return new JwtHelper().decodeToken(token);
  }

}
