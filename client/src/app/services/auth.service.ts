import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private logged:{token:null|string,userId:null|number} = {token: null,userId: null}; // defines the logged user data.
  public authErrorsEmitter = new Subject<string>(); // emits auth errors.
  public userStatusEmitter = new Subject<boolean>(); // emits user status (logged or not).

  constructor(private router:Router, private apiService:ApiService) {
    // manages the user data and status on application start
    let _sess:any = localStorage.getItem('_sess');
    let date = new Date();
    if(_sess) {
      _sess = JSON.parse(_sess);
      let tokenExpirationDate = this.getTokenExpirationDate(_sess);
      if(tokenExpirationDate && tokenExpirationDate < date) {
        this.logout();
      } else {
        this.setLogged(_sess);
      }
    }
  }

  public login(userId:number,password:string) { // calls the server to login. if succeed, calls to save the user data. if failed, displays the error. 
    this.apiService.loginUser(userId,password).subscribe((res)=>{
      this.setLogged(res,true);
      this.router.navigate(['/']);
    },(err)=>{
      let errorMessage = 'Oops, something went wrong...';
      if(typeof err.error=='string') {
        errorMessage = err.error;
      }
      this.authErrorsEmitter.next(errorMessage);
    });
  }

  public register(userId:number,password:string) { // calls the server to register new user. if succeed, calls to save the user data. if failed, displays the error. 
    this.apiService.registerNewUser(userId,password).subscribe((res)=>{
      this.setLogged(res,true);
      this.router.navigate(['/']);
    },(err)=>{
      let errorMessage = 'Oops, something went wrong...';
      if(typeof err.error=='string') {
        errorMessage = err.error;
      }
      this.authErrorsEmitter.next(errorMessage);
    });
  }
  
  public logout() { // calls to remove user data and navigate back to auth page.
    this.setLogged({
      token: null,
      id: null
    },true);
    this.router.navigate(['/auth']);
  }

  private getTokenExpirationDate(sess:{token:string}): Date|null { // returns the token expiration date.
    if(sess.token === null) return null;
    const decoded:{exp:number|undefined} = jwt_decode(sess.token);
    if (decoded.exp === undefined) return null;
    const date = new Date(0); 
    date.setUTCSeconds(decoded.exp);
    return date;
  }


  private setLogged(sess:{token:string|null,id:number|null},storeSess:boolean = false) { // sets the user data.
    this.logged.token = sess.token;
    this.logged.userId = sess.id;
    if(storeSess) {
      localStorage.setItem('_sess',JSON.stringify(sess));
    }
    this.userStatusEmitter.next(!!this.logged.token);
  }

  get token():null|string { // returns the token
    return this.logged.token;
  } 
}
