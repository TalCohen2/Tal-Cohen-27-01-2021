import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ComposeComponent } from './compose/compose.component';
import { ManageComponent } from './manage/manage.component';
import { MessageListComponent } from './manage/message-list/message-list.component';
import { MessageComponent } from './manage/message/message.component';
import { MessageItemComponent } from './manage/message-list/message-item/message-item.component';
import { AuthComponent } from './auth/auth.component';

import { ApiService } from './services/api.service';
import { MessagesService } from './services/messages.service';
import { AuthService } from './services/auth.service';
import { TokenInterceptor } from './token.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ComposeComponent,
    ManageComponent,
    MessageListComponent,
    MessageComponent,
    MessageItemComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ApiService,
    MessagesService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
