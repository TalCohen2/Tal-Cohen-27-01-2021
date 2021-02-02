import { Component, OnInit, Input } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent implements OnInit {

  @Input() message:any; // inherits message data from parent
  @Input() status:boolean = true; //inherits message status from parent (true = received, false = sent).

  constructor(private messagesService:MessagesService) { }

  ngOnInit(): void {
  }

  deleteMessage(event:Event):void { // calls to delete message by message id
    event.stopPropagation();
    this.messagesService.deleteMessage(this.message.messageId);
  }
}
