import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../manage/message.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private messagesEndPoint:string = 'messages'; // Sets the messages API endpoint
  private usersEndPoint:string = 'users';// Sets the users API endpoint

  constructor(private http:HttpClient) {}

  public writeMessage(messageObj:Message) { // Returns write message API request
    return this.http.post<any>(`${this.messagesEndPoint}/writeMessage`,messageObj);
  }

  public deleteMessage(messageData:{}) { // Returns delete message API request
    return this.http.delete<any>(`${this.messagesEndPoint}/deleteMessage`,{params:messageData});
  } 

  public getMessages() { // Returns get messages API request
    return this.http.get<any>(`${this.messagesEndPoint}/getMessages`);
  }

  public loginUser(id:number,password:string) { // returns login API request
    return this.http.post<any>(`${this.usersEndPoint}/login`,{
      id:id,
      password:password
    })
  }

  public registerNewUser(id:number,password:string) { // returns register new user API request.
    return this.http.post<any>(this.usersEndPoint,{
      id: id,
      password: password
    })
  }

}
