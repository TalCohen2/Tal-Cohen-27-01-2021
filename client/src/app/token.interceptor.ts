import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> { // adds user token to the API request headers if exists.
    if(this.authService.token) {
      let tokenHeader = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.token}`
        }
      });
      return next.handle(tokenHeader);
    }
    return next.handle(request);
  }
}
