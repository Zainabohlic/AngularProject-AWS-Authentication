import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone:true,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  code: string="";
  clientId: string=environment.clientID;
  redirectUri: string=environment.redirectSignIn;
  tokenEndpoint: string="https://login.transportation.dev/oauth2/token";
  clientSecret: string=environment.Client_Secret; // Optional, depending on your Cognito configuration

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {
  }

  ngOnInit() {
    const accessToken = this.extractAccessTokenFromUrl();
    if(accessToken!=null){
    localStorage.setItem("AccessToken",accessToken)
    }
    this.router.navigate(['/view-students']);
  }

  extractAccessTokenFromUrl() {
  const urlFragment = window.location.hash.substring(1); // Remove the leading '#'
  const params = new URLSearchParams(urlFragment);
  const accessToken = params.get('access_token');

  return accessToken;
}
}