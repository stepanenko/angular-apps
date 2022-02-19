
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from './chat.service';
import { Message } from './message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {

  user: string;
  feedback: string;
  messageText: string;
  messages: Message[] = [];

  constructor(private chatService: ChatService) { }


  ngOnInit() {
    this.chatService.join();

    this.chatService.getHistory();

    this.onTyping();

    this.onEvent('history');
    this.onEvent('join');
    this.onEvent('leave');
    this.onEvent('message');
    this.onEvent('login');
    this.onEvent('logout');
  }

  onEvent(event) {

    this.chatService.onAction(event)
      .subscribe(data => {
        event === 'history'
          ? this.messages = [...data]
          : this.messages = this.messages.concat(data);

        this.feedback = null;
      });

  }

  onTyping() {
    this.chatService.onAction('typing')
      .subscribe(data => this.feedback = data.message);
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

  ngOnDestroy() {
    this.chatService.leave(this.user);
  }

}
