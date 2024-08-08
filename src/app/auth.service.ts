// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { environment } from '../environments/environment';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private authUrl = `${environment.apiUrl}/Authentication/getAuthenticationToken`;

//   constructor(private http: HttpClient) { }

//   getToken(username: string, password: string): Observable<string> {
//     return this.http.get<string>(`${this.authUrl}?username=${username}&password=${password}`);
//   }
// }
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly hardcodedToken = 'hardcodedToken';

  constructor() { }

  // Return the hardcoded token as an observable
  getToken(): Observable<string> {
    return of(this.hardcodedToken);
  }
}
