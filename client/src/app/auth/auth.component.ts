import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {

  @ViewChild('userForm',{read:NgForm}) userForm:any;
  
  isLogin:boolean = true; // defines the form role (true - login, false - register).
  authInProgress:boolean = false; // define if auth request has been sent for form buttons accessibility.
  formErrors:string[] = []; // array of the form errors.
  errorSub:Subscription; // errors subscriber.

  constructor(private authService:AuthService) {
    this.errorSub = this.authService.authErrorsEmitter.subscribe((errorMsg:string)=>{ // sets subscriber for the form errors.
      this.clearForm();
      this.formErrors.push(errorMsg);
    })
  }

  ngOnInit(): void {
  }

  onSubmit():void { // validates the form propriety and calls to login / register new user or display form errors if any
    if(!this.authInProgress) {
      this.formErrors = [];
      this.authInProgress = true;
      let form:{userId:number,password:string,passwordConfirmation?:string} = this.userForm.form.value;
      if(isNaN(form.userId)) {
        this.formErrors.push('ID should be a number');
      } else if(!Number.isInteger(form.userId) || form.userId<1) {
        this.formErrors.push('ID should be integer and greater then 0');
      } else if(String(form.userId).length>16) {
        this.formErrors.push("ID must be less then 17 characters");
      }
      if(form.password.trim()=='') {
        this.formErrors.push('Password is required');
      } else if(!this.isLogin){
        if(!this.isLogin && (!form.passwordConfirmation || form.passwordConfirmation!=form.password)) {
          this.formErrors.push('Passwords should be matched');
        }
        if(!form.password.match(/[0-9]/g)) {
          this.formErrors.push('Password should contain at least 1 digit');
        }
        if(!form.password.match(/[A-Z]/g)) {
          this.formErrors.push('Password should contain at least 1 uppercase letter');
        }
        if(!form.password.match(/[a-z]/g)) {
          this.formErrors.push('Password should contain at least 1 lowercase letter');
        }
        if(form.password.length<8) {
          this.formErrors.push('Password should be at least 8 characters');
        }
      }
      if(!this.formErrors.length) {
        if(this.isLogin) {
          this.authService.login(form.userId,form.password);
        } else {
          this.authService.register(form.userId,form.password);
        }
      } else {
        this.authInProgress = false;
      }
    }
  }

  onSwitch():void { // switches between login and register forms.
    this.isLogin = !this.isLogin;
    this.formErrors = [];
  }

  clearForm():void { // clears the form inputs and data
    this.formErrors = [];
    this.authInProgress = false;
    this.userForm.controls['password'].reset();
    if(!this.isLogin) {
      this.userForm.controls['passwordConfirmation'].reset();
    }
  }

  ngOnDestroy():void { // Removes custom subscriber to avoid multiple subscription
    this.errorSub.unsubscribe();
  }

}






