
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from './chat.service';
import { Message } from './models/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  user: string;
  feedback: string;
  messageText: string;
  messages: Message[] = [];

  constructor(private chatService: ChatService) {}


  ngOnInit() {
    this.connect();

    this.chatService.join();

    this.chatService.onAction('typing')
    .subscribe(data => {
      this.feedback = data.message;
    });

    this.onEvent('leave');
    this.onEvent('join');
    this.onEvent('message');
  }

  ngOnDestroy() {
    this.chatService.leave(this.user);
  }

  onEvent(event) {
    this.chatService.onAction(event)
      .subscribe(data => {
        this.messages = this.messages.concat(data);
        this.feedback = '';
      });
  }

  connect() {
    this.chatService.initSocket();
  }

  typing() {
    this.chatService.typing(this.user);
  }

  send() {
    if (this.messageText) {
      this.chatService.send(this.user, this.messageText);

      this.messageText = null;
    }
  }

}
