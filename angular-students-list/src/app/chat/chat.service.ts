
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import * as io from 'socket.io-client';


const SERVER_URL = 'https://chat358v2.herokuapp.com/';


@Injectable()
export class ChatService {

  private socket;

  initSocket() {
    this.socket = io(SERVER_URL);
  }

  send(user, message) {
    this.socket.emit('message', {
      user: user || 'Anonymous',
      message: message
    });
  }

  join() {
    this.socket.emit('join');
  }

  leave(user) {
    this.socket.emit('leave', user || 'Anonymous');
  }

  typing(user) {
    this.socket.emit('typing', user || 'Anonymous');
  }

  getHistory() {
    this.socket.emit('history');
  }

  clearHistory() {
    this.socket.emit('clearHistory');
  }

  onAction(action) {
    return new Observable<any>(observer => {
      this.socket.on(action, data => observer.next(data));
    });
  }


}
