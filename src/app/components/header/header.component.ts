import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [RouterLink],
  styleUrls: ['./header.component.css'],
  standalone: true
})
export class HeaderComponent {


  Logout(){
    let logout=environment.Cognito_Base_Url+"/logout?client_id="+environment.clientID+"&logout_uri="+environment.redirectSignOut;
    window.location.href = logout;


    // let url = environment.Cognito_Base_Url+"/logout?client_id=" + environment.clientID + "&logout_uri=" + environment.redirectSignOut;
  }
 }
