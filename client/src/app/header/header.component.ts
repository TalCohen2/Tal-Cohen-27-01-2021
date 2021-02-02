import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private userStatusSub:Subscription; // user status subscriber.
  public userStatus:boolean = false; // current user status.

  constructor(private authService:AuthService,private router:Router) {
    // updates user status.
    this.userStatus = !!authService.token;
    this.userStatusSub = this.authService.userStatusEmitter.subscribe((status:boolean) => {
      this.userStatus = status;
    })
  }

  ngOnInit(): void {
  }

  logout():void {
    this.authService.logout();
  }

  ngOnDestroy():void { // Removes custom subscriber to avoid multiple subscription
    this.userStatusSub.unsubscribe();
  }

}
