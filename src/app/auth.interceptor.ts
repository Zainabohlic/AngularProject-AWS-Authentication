// import { Injectable } from '@angular/core';
// import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
// import { Observable, lastValueFrom, from } from 'rxjs';
// import { AuthService } from './auth.service';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//     token = "";
//     private readonly excludedUrls = ['getCurrentDate', 'login.transportation.dev', 'login.transportation.org'];

//     private defaultApplicationHeaders = {
//         'Content-Type': 'application/json'
//     }
//     constructor(private authApiService: AuthService) {
//     }

//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         return from(this.handle(req, next));
//     }

//     async handle(req: HttpRequest<any>, next: HttpHandler) {
//         if (!this.excludedUrls.some(url => req.url.includes(url))) {
//             let token = await this.authApiService.getToken("admin", "J3Gn7owHXVkWYTz")
//             req = req.clone({
//                 setHeaders: {
//                     Authorization: 'Bearer ' + token
//                 }
//             })
//         }
//         return await lastValueFrom(next.handle(req));
//     }

// }

import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, lastValueFrom, from } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    private readonly excludedUrls = ['getCurrentDate', 'login.transportation.dev', 'login.transportation.org'];

    constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Check if the URL should be excluded
        debugger
        if (this.excludedUrls.some(url => req.url.includes(url))) {
            return next.handle(req);
        }

        // Handle adding the token
        return from(this.addTokenToRequest(req, next));
    }

    private async addTokenToRequest(req: HttpRequest<any>, next: HttpHandler): Promise<HttpEvent<any>> {
        try {
            // Get the token (adjust if necessary for your API response)
            const token = await lastValueFrom(this.authService.getToken());
            debugger
            // Clone the request and set the Authorization header
            const clonedReq = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });

            // Handle the cloned request
            return await lastValueFrom(next.handle(clonedReq));
        } catch (error) {
            // Handle error (e.g., log to console, notify user, etc.)
            console.error('Failed to get authentication token:', error);
            throw error;
        }
    }
}
