import { Injectable } from '@angular/core';
import { Message } from '../manage/message.model';
import { ApiService } from './api.service';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private messages:{"sent":Message[],"received":Message[]} = {"sent":[],"received":[]};   // defines the user messages list ordered by received and sent
  private status:boolean = true; // defines the status of the current displaying messages (true = received, false = sent).
  public messagesEmitter = new Subject<{"messages":Message[],"status":boolean}>(); // emits the list of the requested messages and their status.
  public deletedMessageEmitter = new Subject<number>(); // emits the message id when the message is deleted.
  public sentMessageStatusEmitter = new Subject<string>(); // emits the sent message status (success or failure)

  constructor(private apiService:ApiService, private authService:AuthService) { }

  public writeMessage(messageObj:Message):void { // Calls the server to add the written message, then displays success or failure message by the server response.
    this.apiService.writeMessage(messageObj).subscribe((result)=> {
      this.sentMessageStatusEmitter.next('');
      Swal.fire({ //opens sweetAlert 2 modal
        // sweetAlert2 modal design definition
        position: 'top-end',
        icon: 'success',
        title: 'Your message has been sent',
        showConfirmButton: false,
        timer: 2000
      })
    },(error)=> {
      let errorMessage = 'Something went wrong...';
      if(error.error.logout) {
        this.authService.logout();
        this.displayServerError(error.error.message);
      } else {
        if(typeof error.error=='string') {
            errorMessage = error.error;
        }
        this.sentMessageStatusEmitter.next(errorMessage);
      }
    })
  }

  public deleteMessage(messageId:number):void { // Calls the server to delete message by message ID, then displays success or failure message by the server response.
    Swal.fire({//opens sweetAlert 2 modal
      // sweetAlert2 modal design definition
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        let messageObj = {
          messageId: messageId,
          status: this.status ? 'received' : 'sent'
        }
        this.apiService.deleteMessage(messageObj).subscribe((res) => {
          let messageIndex = this.messages[messageObj.status as keyof {"sent":Message[],"received":Message[]}].findIndex(message => message.messageId==messageId);
          if(messageIndex!=-1) {
            this.messages[messageObj.status as keyof {"sent":Message[],"received":Message[]}].splice(messageIndex,1);
            this.getMessagesByStatus(this.status);
            this.deletedMessageEmitter.next(messageId);
            Swal.fire({//opens sweetAlert 2 modal
              // sweetAlert2 modal design definition
              position: 'top-end',
              icon: 'success',
              title: 'Message deleted successfully',
              showConfirmButton: false,
              timer: 2000
            })
          }
        },(err)=>{
          let errorMessage = 'Something went wrong...';
          if(err.error.logout) {
            this.authService.logout();
            errorMessage = err.error.message;
          } else if(typeof err.error=='string') {
            errorMessage = err.error;
          }
          this.displayServerError(errorMessage);
        })
      }
    })
  }

  public getMessages():void { // Calls the server to get the user messages, then emits the list that returned from the server.
    this.apiService.getMessages().subscribe((result)=>{
        this.messages = result;
        this.getMessagesByStatus(true);
      },(err)=>{
        let errorMessage:string = 'Something went wrong';
        if(err.error.logout) {
          this.authService.logout();
          errorMessage = err.error.message;
        } else if(typeof err.error=='string') {
          errorMessage = err.error;
        }
        this.displayServerError(errorMessage);
    });
  }

  public getMessagesByStatus(status:boolean):void { // returns the current saved messages by status (true = received, false = sent)
    this.status = status;
    let messageStatus:string = status ? 'received' : 'sent';
    let messagesData = {
      messages: this.messages[messageStatus as keyof {"sent":Message[],"received":Message[]}].slice(),
      status: status
    }
    this.messagesEmitter.next(messagesData);
  }

  public getMessageById(messageId:number) { // returns a message by message ID from the current saved messages
    let messageStatus:string = this.status ? 'received' : 'sent';
    return this.messages[messageStatus as keyof {"sent":Message[],"received":Message[]}].find(message => message.messageId==messageId);
  }

  private displayServerError(message:string):void { // displays sweetAlert2 error modal.
    Swal.fire({//opens sweetAlert 2 modal
      // sweetAlert2 modal design definition
      icon: 'error',
      title: 'Oops...',
      text: message
    })
  }

  get messageStatus():boolean { // returns the current messages status (true = received, false = sent).
    return this.status;
  }
  
}