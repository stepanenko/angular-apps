import { Component, OnInit } from '@angular/core';
import { Place } from './models/place';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { Observable } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { ChatService } from '../chat/chat.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  commonPlaces: Place[] = [
    { name: 'Home',      location: '/home',      icon: 'home' },
    { name: 'Dashboard', location: '/dashboard', icon: 'bar_chart' },
    { name: 'Teacher',   location: '/teacher',   icon: 'assignment_ind' },
    { name: 'Students',  location: '/students',  icon: 'school' },
    { name: 'Chat',      location: '/chat',      icon: 'message' }
  ];

  places$: Observable<Place[]> = this.authService.isAdmin$.pipe(
    map(yes => yes
      ? [{name: 'Admin', location: '/admin', icon: 'perm_identity'}]
      : []),
    map(adminPlace => this.commonPlaces.concat(adminPlace))
  );

  onlineUsers: number;
  unreadMessages = null;

  constructor(
    private authService: AuthenticationService,
    private chatService: ChatService) { }

  chatOpened: Observable<any> = this.chatService.onAction('chatOpened');

  ngOnInit() {
    this.connect();

    this.getOnlineCount();

    this.startMsgCounter();

    this.clearMsgCounter();
  }

  getOnlineCount() {
    this.chatService.onAction('online')
      .pipe(
        map(data => data - 1)
      )
      .subscribe(data => this.onlineUsers = data > 0 ? data : null);
  }

  clearMsgCounter() {
    this.chatOpened.subscribe(() => this.unreadMessages = null);
  }

  startMsgCounter() {
    this.unreadMessages = null;
    this.chatService.onAction('chatClosed')
      .subscribe(() => this.messageCounter());
  }

  messageCounter() {
    this.chatService.onAction('message')
      .pipe(
        takeUntil(this.chatOpened)
      )
      .subscribe(() => this.unreadMessages++);
  }

  connect() {
    this.chatService.initSocket();
  }
}
