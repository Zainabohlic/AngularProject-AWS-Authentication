import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    // Check if the token exists in session storage
    const token = localStorage.getItem('AccessToken');
    if (token) {
      return true;
    } else {
      // Redirect to login page if no token is found
      this.logout();
      return false;
    }
  }

  logout() {
    sessionStorage.clear();
    let loginUrl = environment.Cognito_Base_Url+"/authorize?client_id=" + environment.clientID + "&response_type=token&scope=" + environment.Scope + "&redirect_uri=" + environment.redirectSignIn;
    window.location.href = loginUrl;
}
}
