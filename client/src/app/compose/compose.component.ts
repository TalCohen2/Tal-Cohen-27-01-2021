import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from '../manage/message.model';
import { MessagesService } from '../services/messages.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})

export class ComposeComponent implements OnInit,OnDestroy {

  public formErrors:String[] = []; // defines the form errors list.
  @ViewChild('messageForm',{read:NgForm}) messageForm:any; // defines the message form object
  private messageSentSub:Subscription; // sent message status subscriber
  public sendInProcess:boolean = false; // responsible for form buttons accessibility by send status

  constructor(private messageService:MessagesService) {
    this.messageSentSub = this.messageService.sentMessageStatusEmitter.subscribe((status:string)=> { // sets subscriber for the sent message status
      if(!status) {
        this.clearForm();
      } else {
        this.formErrors.push(status);
      }
      this.sendInProcess = false;
    })
  }

  ngOnInit(): void {}

  onSubmit():void { // validates the form propriety and calls to write message or display form errors if any
    if(!this.sendInProcess) {
      this.formErrors = [];
      let form:Message = this.messageForm.form.value;
      if(isNaN(form.receiverId)) {
        this.formErrors.push("IDs should be a number");
      } else if(!Number.isInteger(form.receiverId)) {
        this.formErrors.push("ID should be an integer");
      } else if(form.receiverId<1) {
        this.formErrors.push("ID should be with positive value");
      } else if(String(form.receiverId).length>16) {
        this.formErrors.push("ID's letter length should be less then 17");
      }
      if(!form.subject || form.subject.trim()=="") {
        this.formErrors.push("Subject should not be empty");
      }
      if(!form.message || form.message.trim()=="") {
        this.formErrors.push("Message should not be empty");
      }
      if(!this.formErrors.length) {
        this.sendInProcess = true;
        this.messageService.writeMessage(form);
      }
    }
  }

  clearForm():void { // clears the form inputs and errors
    this.formErrors = [];
    this.messageForm.reset();
  }

  ngOnDestroy():void { // Removes custom subscriber to avoid multiple subscription
    this.messageSentSub.unsubscribe();
  }


}
