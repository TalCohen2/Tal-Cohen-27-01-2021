import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';
import { Message } from '../message.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit, OnDestroy {

  private messagesSub:Subscription; // message list subscriber
  public messages:Message[] = []; // defines the received messages list
  public status:boolean = true // defines the current messages status (true = received, false = sent)

  constructor(private messagesService:MessagesService) {
    this.messagesSub = this.messagesService.messagesEmitter.subscribe((messagesData:{"messages":Message[],"status":boolean}|null)=>{ // Sets subscriber for message list update.
      if(messagesData!=null) {
        this.messages = messagesData.messages.reverse();
        this.status = messagesData.status;
      } else {
        this.messages = [];
      }
    })
   }

  ngOnInit(): void {
  }

  getMessagesByStatus(status:boolean):void { // calls to get messages by status (true = received, false = sent).
    this.messagesService.getMessagesByStatus(status);
  }

  ngOnDestroy():void { // Removes custom subscriber to avoid multiple subscription
    this.messagesSub.unsubscribe();
  }

}