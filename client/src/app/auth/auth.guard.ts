import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService:AuthService,private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // guard routes by user status (logged or not).
    let currentRoute = route.routeConfig?.path;
    let userLogged = this.authService.token;
    if(userLogged) {
      if(currentRoute=='auth') {
        return this.router.createUrlTree(['/compose']);
      } else {
        return true;
      }
    } else {
      if(currentRoute=='auth') {
        return true;
      } else {
        return this.router.createUrlTree(['/auth']);
      }
    }
  }
  
}
