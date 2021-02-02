import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../services/messages.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {


  constructor(private messagesService:MessagesService) { 
  }

  ngOnInit(): void {
    this.messagesService.getMessages();
  }

}
