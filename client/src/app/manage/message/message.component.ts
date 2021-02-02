import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MessagesService } from 'src/app/services/messages.service';
import { Message } from '../message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit,OnDestroy {
  
  public message:Message = {subject:'',message:'',senderId:0,receiverId:0}; // defines the message data
  private deletedMessageSub:Subscription; // message subscriber
  public messageStatus:boolean | undefined; // defines the message status (true = received, false = sent)

  constructor(private messagesService:MessagesService, private router:Router,private route:ActivatedRoute) {
    this.deletedMessageSub = this.messagesService.deletedMessageEmitter.subscribe((messageId)=>{ // Sets subscriber for deleted message update. 
      if(this.message.messageId==messageId) {
        this.routeBack();
      }
    })
   }


  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{ // sets route params subscriber for message display
      let messageData = this.messagesService.getMessageById(+params.id);
      if(messageData) {
        this.message = messageData;
      } else {
        this.routeBack();
      }
    })
    this.messageStatus = this.messagesService.messageStatus;
  }

  routeBack() :void { // routes one level backwards
    this.router.navigate(['../'],{relativeTo: this.route});
  }

  ngOnDestroy() :void { // Removes custom subscriber to avoid multiple subscription
    this.deletedMessageSub.unsubscribe();
  }

}
